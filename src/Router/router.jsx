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
            }
        ]
    }
])
export default router;