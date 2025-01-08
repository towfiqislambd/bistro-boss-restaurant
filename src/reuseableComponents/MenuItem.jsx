const MenuItem = ({ item }) => {
    const { image, name, price, recipe } = item
    return (
        <div className="grid grid-cols-12 items-center gap-3 md:gap-5">
            <div className="col-span-3 sm:col-span-2 lg:col-span-3">
                <img src={image} className="rounded-full shadow border h-[90px] lg:h-24 rounded-tl-none" />
            </div>
            <div className="col-span-9 sm:col-span-10 lg:col-span-9">
                <div className="flex justify-between items-center">
                    <p className="text-lg font-medium mb-[2px] lg:mb-1">{name} ------</p>
                    <p className="text-yellow-600">${price}</p>
                </div>
                <p className="text-gray-500 pr-5">{recipe}</p>
            </div>
        </div>
    )
}

export default MenuItem;