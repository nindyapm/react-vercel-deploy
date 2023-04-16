import CreateProduct from "../Pages/CreateProduct";
import LandingPage from "../Pages/LandingPage";

const Routers = [
    {
        path: "/",
        element: <LandingPage/>,
    },
    {
        path: "/CreateProduct",
        element: <CreateProduct/>,
    },
];

export default Routers