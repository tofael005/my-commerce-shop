import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../Layout/RootLayout";
import Home from "../Pages/Home/Home";
import AllPhone from "../Pages/ShopCategory/Gadget/AllPhone";
import MultipleShop from "../Pages/ShopCategory/MultipleShop";
import AllFashion from "../Pages/ShopCategory/Fassion/AllFashion";
import AllElectronics from "../Pages/ShopCategory/Electronics/AllElectronics";
import AllSoftware from "../Pages/ShopCategory/Software/AllSoftware";
import AllPc from "../Pages/ShopCategory/Pc Building/AllPc";
import AllFrozen from "../Pages/ShopCategory/Frozen/AllFrozen";
import AllGrocery from "../Pages/ShopCategory/Grocery/AllGrocery";
import LogIn from "../Log/LogIn";
import Registration from "../Log/Registration";
import AddToCart from "../Components/Add To Cart/AddToCart";
import Apple from "../Components/Apple/Apple";
import BlackBerry from "../Components/Blackberry/BlackBerry";
import Motorola from "../Components/Motorola/Motorola";
import Oppo from "../Components/Oppo/Oppo";
import Realme from "../Components/Realme/Realme";
import Samsung from "../Components/Samsung/Samsung";
import Sony from "../Components/Sony/Sony";
import Mi from "../Components/Mi/Mi";
import Walton from "../Components/Walton/Walton";
import Vivo from "../Components/Vivo/Vivo";
import GirlsCollection from "../Pages/ShopCategory/Fassion/GirlsCollection/GirlsCollection";
import MenCollection from "../Pages/ShopCategory/Fassion/MenCollection/MenCollection";
import KidsCollection from "../Pages/ShopCategory/Fassion/KidsCollection/KidsCollection";
import Viewproduct from "../Components/Apple/Viewproduct";
import ViewproductS from "../Components/Samsung/ViewproductS";


const router = createBrowserRouter ([
    {
        path: "/",
        element: <RootLayout />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/login",
                element: <LogIn />
            },
            {
                path: "/registration",
                element: <Registration />
            },
            {
                path: "/addtocart",
                element: <AddToCart />
            },
            {
                path: "/allPhone",
                element: <AllPhone />
            },
            {
                path: "/multiple-shop",
                element: <MultipleShop />
            },
            {
                path: "/fashion",
                element: <AllFashion />
            },
            {
                path: "/electronics",
                element: <AllElectronics />
            },
            {
                path: "/software",
                element: <AllSoftware />
            },
            {
                path: "/pcBuilding",
                element: <AllPc />
            },
            {
                path: "/frozen",
                element: <AllFrozen />
            },
            {
                path: "/grocery",
                element: <AllGrocery />
            },
            {
                path: "/apple",
                element: <Apple />
            },
            {
                path: "/viewproduct",
                element: <Viewproduct />
            },
            {
                path: "/viewproducts",
                element: <ViewproductS />
            },

            {
                path: "/blackberry",
                element: <BlackBerry />
            },
            {
                path: "/motorola",
                element: <Motorola />
            },
            {
                path: "/oppo",
                element: <Oppo/ >
            },
            {
                path: "/realme",
                element: <Realme />
            },
            {
                path: "/samsung",
                element: <Samsung />
            },
            {
                path: "/sony",
                element: <Sony />
            },
            {
                path: "/mi",
                element: <Mi />
            },
            {
                path: "/walton",
                element: <Walton />
            },
            {
                path: "/vivo",
                element: <Vivo />
            },
            {
                path: "/girls",
                element: <GirlsCollection />
            },
            {
                path: "/mens",
                element: <MenCollection />
            },
            {
                path: "/kids",
                element: <KidsCollection />
            }
        ]
    }
])
export default router;