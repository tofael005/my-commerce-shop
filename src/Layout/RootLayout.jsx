import { Outlet } from "react-router-dom";
import NavBar from "../Header/NavBar";


const RootLayout = () => {
    return (
        <div>
            <NavBar />
            <div>
                <Outlet />
            </div>
        </div>
    );
};

export default RootLayout;