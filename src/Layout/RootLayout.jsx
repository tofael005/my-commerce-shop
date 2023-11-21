import { Outlet } from "react-router-dom";
import NavBar from "../Header/NavBar";
import Footer from "../Footer/Footer";


const RootLayout = () => {
    return (
        <div>
            <div>
                <NavBar />
            </div>
            <div className="md:min-h-[calc(100vh-100px)]">
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default RootLayout;