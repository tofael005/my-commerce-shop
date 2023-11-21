import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../Layout/RootLayout";
import Home from "../Pages/Home/Home";
import AllPhone from "../Pages/ShopCategory/Gadget/AllPhone";
import MultipleShop from "../Pages/ShopCategory/MultipleShop";

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
            }
        ]
    }
])
export default router;