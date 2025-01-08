import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import b1 from "../assets/home/01.jpg"
import b2 from "../assets/home/02.jpg"
import b3 from "../assets/home/03.png"
import b4 from "../assets/home/04.jpg"
import b5 from "../assets/home/05.png"
import b6 from "../assets/home/06.png"

const Banner = () => {
    return (
        <header className='text-center mx-auto'>
            <Carousel
                showArrows={false}
                autoPlay={true}
                dynamicHeight={true}
                infiniteLoop={true}
                showStatus={false}
            >
                <div className='lg:h-[550px]'>
                    <img src={b2} className='h-full w-full' />
                </div>
                <div className='lg:h-[550px]'>
                    <img src={b1} className='h-full w-full' />
                </div>
                <div className='lg:h-[550px]'>
                    <img src={b3} className='h-full w-full' />
                </div>
                <div className='lg:h-[550px]'>
                    <img src={b4} className='h-full w-full' />
                </div>
                <div className='lg:h-[550px]'>
                    <img src={b5} className='h-full w-full' />
                </div>
                <div className='lg:h-[550px]'>
                    <img src={b6} className='h-full w-full' />
                </div>
            </Carousel>
        </header>
    )
}

export default Banner;