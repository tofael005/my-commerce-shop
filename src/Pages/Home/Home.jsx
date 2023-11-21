import DaillyNeeds from "../../Components/Daily Need/DaillyNeeds";
import PhoneHome from "../../Components/SmartGadget/Phone/PhoneHome";
import TopElectronics from "../../Components/TopElectronicsBand/TopElectronics";
import Banner from "../../Header/Banner";
import AllShop from "../ShopCategory/AllShop";


const Home = () => {
    return (
        <div>
            <Banner />
            <PhoneHome />
            <AllShop />
            <TopElectronics />
            <DaillyNeeds />
        </div>
    );
};

export default Home;