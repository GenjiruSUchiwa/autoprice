// import
import Dashboard from "views/Dashboard/Dashboard.js";
import Tables from "views/Dashboard/Tables.js";

import {
  HomeIcon,
  StatsIcon,
} from "components/Icons/Icons";

var dashRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: <HomeIcon color="inherit" />,
    component: Dashboard,
    layout: "/admin",
  },
  {
    path: "/inventory",
    name: "Inventory",
    icon: <StatsIcon color="inherit" />,
    component: Tables,
    layout: "/admin",
  },
];
export default dashRoutes;
