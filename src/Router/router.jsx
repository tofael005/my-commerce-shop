import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../Layout/RootLayout";
import Home from "../Pages/Home/Home";

const router = createBrowserRouter ([
    {
        path: "/",
        element: <RootLayout />,
        children: [
            {
                path: "/",
                element: <Home />
            }
        ]
    }
])
export default router;