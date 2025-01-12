require('dotenv').config();
const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const app = express();
const port = process.env.PORT || 5000;


// All Middlewares
app.use(cors({
    origin: [
        'http://localhost:5173',
        'https://bistro-boss-restaurants.netlify.app'
    ],
    credentials: true
}))
app.use(express.json())
app.use(cookieParser())

const verifyToken = (req, res, next) => {
    const token = req?.cookies?.token;
    if (!token) {
        return res.status(401).send({ message: 'Unauthorized Access' })
    }
    jwt.verify(token, process.env.JWT_ACCESS_TOKEN, (err, decoded) => {
        if (err) {
            return res.status(401).send({ message: 'Unauthorized Access' })
        }
        req.user = decoded;
        next()
    })
}


const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.jtbwf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
})

async function run() {
    try {
        // Database Name and Database Collections
        const database = client.db('bistroDB');
        const userCollection = database.collection('users');
        const menuCollection = database.collection('menus');
        const reviewCollection = database.collection('reviews');
        const cartCollection = database.collection('carts');

        // Admin Middleware
        const verifyAdmin = async (req, res, next) => {
            const email = req.user.email;
            const query = { email }
            const user = await userCollection.findOne(query);
            const isAdmin = user?.role === 'admin';
            if (!isAdmin) {
                return res.status(403).send({ message: 'Forbidden Access' })
            }
            next()
        }


        //************** Auth Related APIs *****************

        // Create Token
        app.post('/login', async (req, res) => {
            const user = req.body;
            const token = jwt.sign(user, process.env.JWT_ACCESS_TOKEN, { expiresIn: '5h' });
            res
                .cookie('token', token, {
                    httpOnly: true,
                    secure: process.env.NODE_ENV === "production",
                    sameSite: process.env.NODE_ENV === "production" ? "none" : "strict",
                })
                .send({ message: 'Login successful' })
        })
        // Clear Token
        app.post('/logout', async (req, res) => {
            res
                .clearCookie('token', {
                    maxAge: 0,
                    httpOnly: true,
                    secure: process.env.NODE_ENV === "production",
                    sameSite: process.env.NODE_ENV === "production" ? "none" : "strict",
                })
                .send({ message: 'Logged out successfully' })
        })


        // ******************** Open APIs ************************

        app.get('/', async (req, res) => {
            res.send('Server is Running')
        })
        app.get('/all-menu', async (req, res) => {
            const result = await menuCollection.find().toArray();
            res.send(result)
        })
        app.get('/all-review', async (req, res) => {
            const result = await reviewCollection.find().toArray();
            res.send(result)
        })
        app.get('/carts', async (req, res) => {
            const email = req.query.email;
            const query = { userEmail: email }
            const result = await cartCollection.find(query).toArray()
            res.send(result)
        })
        app.post('/all-users', async (req, res) => {
            const allUser = req.body;
            const query = { email: allUser.email };
            const existingUser = await userCollection.findOne(query);
            if (existingUser) {
                return res.send({ message: 'User Already Exist', insertedId: null })
            }
            const result = await userCollection.insertOne(allUser);
            res.send(result)
        })


        // ******************** Private APIs ************************

        app.get('/users/admin/:email', async (req, res) => {
            const email = req.params.email;
            // if (email !== req.user.email) {
            //     return res.status(403).send({ message: 'Forbidden Access' })
            // }
            const query = { email };
            const user = await userCollection.findOne(query);
            let admin = false;
            if (user) {
                admin = user?.role === 'admin'
            };
            res.send({ admin })
        })
        app.post('/carts', verifyToken, async (req, res) => {
            const cart = req.body;
            const result = await cartCollection.insertOne(cart);
            res.send(result)
        })
        app.delete('/carts/:id', verifyToken, async (req, res) => {
            const id = req.params.id;
            const query = { _id: new ObjectId(id) }
            const result = await cartCollection.deleteOne(query)
            res.send(result)
        })


        // Private Admin APIs
        app.get('/all-users', verifyToken, verifyAdmin, async (req, res) => {
            const users = await userCollection.find().toArray();
            res.send(users)
        })
        app.post('/all-menu', verifyToken, verifyAdmin, async (req, res) => {
            const item = req.body;
            const result = await menuCollection.insertOne(item)
            res.send(result)
        })
        app.patch('/users/admin/:id', verifyToken, verifyAdmin, async (req, res) => {
            const id = req.params.id;
            const filter = { _id: new ObjectId(id) };
            const updatedDoc = {
                $set: {
                    role: 'admin'
                }
            }
            const result = await userCollection.updateOne(filter, updatedDoc);
            res.send(result)
        })
        app.delete('/all-users/:id', verifyToken, verifyAdmin, async (req, res) => {
            const id = req.params.id;
            const query = { _id: new ObjectId(id) };
            const result = await userCollection.deleteOne(query);
            res.send(result)
        })

        app.delete('/all-menu/:id', verifyToken, verifyAdmin, async (req, res) => {
            const id = req.params.id;
            const query = { _id: new ObjectId(id) }
            const result = await menuCollection.deleteOne(query)
            res.send(result)
        })
        app.get('/updateItems/:id', verifyToken, verifyAdmin, async (req, res) => {
            const id = req.params.id;
            const query = { _id: new ObjectId(id) }
            const result = await menuCollection.findOne(query)
            res.send(result)
        })
        app.patch('/menu/updateItems/:id', verifyToken, verifyAdmin, async (req, res) => {
            const id = req.params.id;
            const filter = { _id: new ObjectId(id) }
            const item = req.body;
            const updatedDoc = {
                $set: {
                    name: item.name,
                    recipe: item.recipe,
                    category: item.category,
                    price: item.price,
                    image: item.image
                }
            }
            const result = await menuCollection.updateOne(filter, updatedDoc)
            res.send(result)
        })


        // await client.db("admin").command({ ping: 1 });
        // console.log("Pinged your deployment. You successfully connected to MongoDB!");
    }
    finally {
        //
    }
}
run().catch(err => console.log(err));


app.listen(port, () => {
    console.log(`Running port is ${port}`)
})