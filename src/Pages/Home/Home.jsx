import PhoneHome from "../../Components/SmartGadget/Phone/PhoneHome";
import Banner from "../../Header/Banner";
import AllShop from "../ShopCategory/AllShop";


const Home = () => {
    return (
        <div>
            <Banner />
            <PhoneHome />
            <AllShop />
        </div>
    );
};

export default Home;