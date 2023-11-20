import { FaLocationDot } from "react-icons/fa6";
import { TbTruckDelivery } from "react-icons/tb";

const NavBar = () => {
    return (
        <div>
            <div>
                <h1>Welcome to worldwide Megamart!</h1>
                <div>
                    <div>
                        <FaLocationDot />
                        <h1>Deliver to 423651</h1>
                    </div>
                    <div>
                        <TbTruckDelivery />
                    </div>
                </div>
            </div>
            <h1>Navbar</h1>
        </div>
    );
};

export default NavBar;