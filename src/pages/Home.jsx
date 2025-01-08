import { Helmet } from "react-helmet-async";
import Banner from "../components/Banner";
import CallNow from "../components/CallNow";
import Cart from "../components/Cart";
import Content from "../components/Content";
import Featured from "../components/Featured";
import Menu from "../components/Menu";
import PopularMenu from "../components/PopularMenu";
import Testimonial from "../components/Testimonial";

const Home = () => {
    return (
        <div>
             <Helmet><title>Bistro Boss Restaurant</title></Helmet>
            <Banner></Banner>
            <Menu></Menu>
            <Content></Content>
            <PopularMenu></PopularMenu>
            <CallNow></CallNow>
            <Cart></Cart>
            <Featured></Featured>
            <Testimonial></Testimonial>
        </div>
    )
}

export default Home;