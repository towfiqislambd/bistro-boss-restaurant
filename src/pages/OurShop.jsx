import { Helmet } from "react-helmet-async";
import MenuCover from "../reuseableComponents/MenuCover";
import coverBg from "../assets/shop/banner2.jpg"
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from "../hooks/useMenu";
import Card from "../components/Card";
import { useParams } from "react-router-dom";
import { useState } from "react";

const OurShop = () => {
    const categories = ['salad', 'pizza', 'soup', 'dessert', 'drinks'];
    const { category } = useParams();
    const initialIndex = categories.indexOf(category);
    const [tabIndex, setTabIndex] = useState(initialIndex)









    const [menu] = useMenu();
    const saladItems = menu.filter(item => item.category === 'salad')
    const pizzaItems = menu.filter(item => item.category === 'pizza')
    const soupItems = menu.filter(item => item.category === 'soup')
    const dessertItems = menu.filter(item => item.category === 'dessert')
    const drinksItems = menu.filter(item => item.category === 'drinks')

    return (
        <div>
            <Helmet><title>Bistro Boss | Our Shop</title></Helmet>
            <MenuCover bgImg={coverBg} title='our shop' subTitle='Would you like to try a dish?'></MenuCover>
            <section className="container mx-auto px-5 my-16">

                <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                    <TabList className='tablist space-x-4 mb-10 text-center'>
                        <Tab>Salad</Tab>
                        <Tab>pizza</Tab>
                        <Tab>soups</Tab>
                        <Tab>desserts</Tab>
                        <Tab>drinks</Tab>
                    </TabList>
                    <TabPanel>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
                            {
                                saladItems.map(item => <Card key={item._id} item={item}></Card>)
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
                            {
                                pizzaItems.map(item => <Card key={item._id} item={item}></Card>)
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
                            {
                                soupItems.map(item => <Card key={item._id} item={item}></Card>)
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
                            {
                                dessertItems.map(item => <Card key={item._id} item={item}></Card>)
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
                            {
                                drinksItems.map(item => <Card key={item._id} item={item}></Card>)
                            }
                        </div>
                    </TabPanel>
                </Tabs>
            </section>
        </div>
    )
}

export default OurShop;