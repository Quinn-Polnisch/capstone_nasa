import Home from "../pages/Home";
import About from "../pages/About";
import EONET from "../pages/EONET";
import Profile from "../pages/Profile";

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
    {
        path: "/profile",
        component: Profile,
        name: "Profile"
    }
]

export default routes