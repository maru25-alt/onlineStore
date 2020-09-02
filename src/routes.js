
import Dashboard from "views/Dashboard.js";
import Profile from "views/UserProfile";
import Cart from 'views/Cart';
import Orders from 'views/Orders';
import Payments from 'views/Payments';
import Messages from 'views/Messages';
import Setting from 'views/Settings';



var routes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    rtlName: "لوحة القيادة",
    icon: "tim-icons icon-chart-pie-36",
    component: Dashboard,
    layout: "/admin"
  },
  {
    path: "/profile",
    name: "Profile",
    rtlName: "لوحة القيادة",
    icon: "tim-icons icon-chart-pie-36",
    component: Profile,
    layout: "/admin"
  },
  {
    path: "/cart",
    name: "My Cart",
    rtlName: "لوحة القيادة",
    icon: "tim-icons icon-chart-pie-36",
    component: Cart,
    layout: "/admin"
  },
  {
    path: "/orders",
    name: "Orders",
    rtlName: "لوحة القيادة",
    icon: "tim-icons icon-chart-pie-36",
    component: Orders,
    layout: "/admin"
  },
  {
    path: "/payments",
    name: "Payments",
    rtlName: "لوحة القيادة",
    icon: "tim-icons icon-chart-pie-36",
    component: Payments,
    layout: "/admin"
  },
  {
    path: "/messages",
    name: "Messages",
    rtlName: "لوحة القيادة",
    icon: "tim-icons icon-chart-pie-36",
    component: Messages,
    layout: "/admin"
  },
  {
    path: "/settings",
    name: "Settings",
    rtlName: "لوحة القيادة",
    icon: "tim-icons icon-chart-pie-36",
    component: Setting,
    layout: "/admin"
  },
  
];
export default routes;
