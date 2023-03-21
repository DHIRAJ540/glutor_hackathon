import Home from "../pages/Home";
import Report from "../pages/Report";
import Login from "../pages/Login";
import Support from "../pages/Support";
import Details from "../pages/Details";

const routes = [
  {
    key: "home",
    title: "home",
    component: <Home />,
    path: "/",
    protected: false,
  },
  {
    key: "login",
    title: "login",
    component: <Login />,
    path: "/login",
    protected: false,
  },
  {
    key: "report",
    title: "report",
    component: <Report />,
    path: "/report",
    protected: false,
  },
  {
    key: "support",
    title: "support",
    component: <Support />,
    path: "/support",
    protected: false,
  },
  {
    key: "details",
    title: "details",
    component: <Details />,
    path: "/details",
    protected: false,
  },
];

export default routes;
