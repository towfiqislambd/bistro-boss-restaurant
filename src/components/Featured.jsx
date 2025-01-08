import featuredBg from "../assets/home/featured.jpg"

const Featured = () => {
    return (
        <section className="p-7 md:p-28 rounded" style={{
            backgroundImage: `url(${featuredBg})`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundAttachment: "fixed",
            backgroundColor: 'rgba(0,0,0,0.5)',
            backgroundBlendMode: 'overlay',
        }}>
            <div className="text-center mx-auto sm:w-5/12 lg:w-4/12 xl:w-3/12 mb-10">
                <p className="text-lg text-yellow-600 font-medium">---- Check It Out ----</p>
                <div className="divider divider-warning m-0 my-2"></div>
                <h3 className="font-medium uppercase text-2xl text-gray-300">FROM OUR MENU</h3>
                <div className="divider divider-warning m-0 my-2"></div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-7 md:gap-10 items-center">
                <img src={featuredBg} className="rounded" />
                <div className="text-gray-200 flex flex-col gap-2">
                    <span>January 20, 2025</span>
                    <span className="text-lg font-medium"> WHERE CAN I GET SOME?</span>
                    <p className="text-gray-300 mb-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                    <button className="uppercase w-40 text-gray-200 font-medium btn btn-outline">Read more</button>
                </div>
            </div>
        </section>
    )
}

export default Featured;