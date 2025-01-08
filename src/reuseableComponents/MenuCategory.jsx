import { Link } from "react-router-dom";
import MenuItem from "./MenuItem";

const MenuCategory = ({ bgCover, title, subTitle, items, btnText }) => {
    return (
        <section className="container mx-auto px-5">
            {
                (bgCover && title && subTitle) && <div className="my-16 p-7 md:p-24 rounded" style={{
                    backgroundImage: `url(${bgCover})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundColor: 'rgba(0,0,0,0.3)',
                    backgroundBlendMode: 'overlay',
                }}>
                    <div className="bg-black backdrop-blur-[1px] w-full md:w-3/4 px-5 md:px-20 py-14 sm:py-20 bg-opacity-50 mx-auto text-white text-center rounded">
                        <h3 className="cinzel font-semibold tracking-widest mb-2 text-4xl">{title}</h3>
                        <p className="text-gray-200 font-light">{subTitle}</p>
                    </div>
                </div>
            }
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-14 gap-y-8 lg:gap-y-10">
                {
                    items.map(item => <MenuItem item={item} key={item._id}></MenuItem>)
                }
            </div>
            <div className="text-center mt-5">
                {
                    btnText ?
                        <Link to={`/ourShop/${title}`} className="btn btn-outline uppercase">{btnText}</Link>
                        :
                        <Link to={`/ourShop/salad`} className="btn btn-outline uppercase">view all item</Link>
                }
            </div>

        </section>
    )
}

export default MenuCategory;