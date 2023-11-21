import { Outlet } from "react-router-dom";
import NavBar from "../Header/NavBar";
// import Footer from "../Footer/Footer";


const RootLayout = () => {
    return (
        <div>
            <div>
                <NavBar />
            </div>
            <div>
                <Outlet />
            </div>
            {/* <Footer /> */}
        </div>
    );
};

export default RootLayout;