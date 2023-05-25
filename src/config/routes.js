import Home from "../pages/Home";
import About from "../pages/About";
import EONET from "../pages/EONET";

const routes = [
    {
        path: "",
        component: Home,
        name: "Home Screen",

    },
    {
        path: "/about",
        component: About,
        name: "About",

    },
    {
        path: "/eonet",
        component: EONET,
        name: "EONET"
    },
]

export default routes