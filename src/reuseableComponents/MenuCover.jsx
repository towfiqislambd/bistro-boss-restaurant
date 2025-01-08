const MenuCover = ({ bgImg, title, subTitle }) => {
    return (
        <section className="h-[450px] sm:h-[550px] flex justify-center relative" style={{
            backgroundImage: `url(${bgImg})`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundColor: 'rgba(0,0,0,0.1)',
            backgroundBlendMode: 'overlay',
        }}>
            <div className="bg-black backdrop-blur-[1px] px-5 absolute top-1/3 sm:w-3/4 py-16 sm:py-24 bg-opacity-50 mx-auto text-white text-center rounded">
                <h3 className="cinzel uppercase font-bold tracking-widest mb-2 text-3xl sm:text-5xl">{title}</h3>
                <p className="text-gray-200 tracking-wider font-semibold cinzel">{subTitle}</p>
            </div>
        </section>
    )
}

export default MenuCover;