import SectionTitle from "../reuseableComponents/SectionTitle";
import useMenu from "../hooks/useMenu"
import MenuCategory from "../reuseableComponents/MenuCategory";

const PopularMenu = () => {
    const [menu] = useMenu();
    const popularItems = menu.filter(item => item.category === 'popular')

    return (
        <div className="container mx-auto px-5 mb-16 ">
            <SectionTitle subHeading='Check It Out' heading='from our menu'></SectionTitle>
            <MenuCategory items={popularItems}></MenuCategory>
        </div>
    )
}

export default PopularMenu;