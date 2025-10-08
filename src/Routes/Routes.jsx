import { createBrowserRouter } from "react-router";
import MainLayOut from "../Layout/MainLayOut";
import Home from "../Pages/Home";
import Apps from "../Pages/AllAppsPage";
import Installations from "../Pages/Installations";
import DetailsAppCard from "../Pages/DetailsAppCard";
import AllAppsPage from "../Pages/AllAppsPage";
import ErrorPage from "../Pages/ErrorPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayOut />,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
        {
            index: true,
            element: <Home></Home>,
        },
        {
            path: "/apps",
            element: <AllAppsPage></AllAppsPage>,
        },
        {
            path: "/installation",
            element: <Installations></Installations>,
        },
        {
            path: "/details/:id",
            element: <DetailsAppCard></DetailsAppCard>,
        },
        ],
    },
]);
export default router;