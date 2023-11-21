import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../Layout/RootLayout";
import Home from "../Pages/Home/Home";
import AllPhone from "../Components/SmartGadget/Phone/AllPhone";

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
            }
        ]
    }
])
export default router;