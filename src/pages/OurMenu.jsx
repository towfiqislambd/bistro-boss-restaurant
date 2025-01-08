import { Helmet } from "react-helmet-async";
import MenuCover from "../reuseableComponents/MenuCover";
import coverBg from "../assets/menu/banner3.jpg"
import SectionTitle from "../reuseableComponents/SectionTitle"
import MenuCategory from "../reuseableComponents/MenuCategory";
import useMenu from "../hooks/useMenu";
import cover1 from "../assets/menu/dessert-bg.jpeg"
import cover2 from "../assets/menu/pizza-bg.jpg"
import cover3 from "../assets/menu/salad-bg.jpg"
import cover4 from "../assets/menu/soup-bg.jpg"

const OurMenu = () => {
    const [menu] = useMenu();
    const offeredItems = menu.filter(item => item.category === 'offered')
    const dessertItems = menu.filter(item => item.category === 'dessert')
    const pizzaItems = menu.filter(item => item.category === 'pizza')
    const saladItems = menu.filter(item => item.category === 'salad')
    const soupItems = menu.filter(item => item.category === 'soup')
    return (
        <div>
            <Helmet><title>Bistro Boss | Our Menu</title></Helmet>
            <MenuCover bgImg={coverBg} title='our menu' subTitle='Would you like to try a dish?'></MenuCover>
            <div className="mt-16">
                <SectionTitle heading="today's offer" subHeading="Don't Miss"></SectionTitle>
            </div>
            <MenuCategory items={offeredItems}></MenuCategory>
            <MenuCategory btnText='order your favorite food' bgCover={cover1} title='dessert' subTitle="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." items={dessertItems}></MenuCategory>
            <MenuCategory btnText='order your favorite food' bgCover={cover2} title='pizza' subTitle="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." items={pizzaItems}></MenuCategory>
            <MenuCategory btnText='order your favorite food' bgCover={cover3} title='salad' subTitle="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." items={saladItems}></MenuCategory>
            <div className="mb-16">
                <MenuCategory btnText='order your favorite food' bgCover={cover4} title='soup' subTitle="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." items={soupItems}></MenuCategory>
            </div>
        </div>
    )
}

export default OurMenu;