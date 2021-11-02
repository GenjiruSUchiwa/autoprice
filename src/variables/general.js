// Assets
import avatar1 from "assets/img/avatars/avatar1.png";
// Custom icons
import {
  SABCLogo,
} from "components/Icons/Icons.js";
import {
  FaArrowDown,
  FaArrowUp,
  FaFilePdf,
  FaShoppingCart,
} from "react-icons/fa";

export const dashboardTableData = [
  {
    logo: SABCLogo,
    name: "SABC Sales",
    members: [avatar1],
    budget: "500,000 XAF",
    progression: 80,
  },
];

export const timelineData = [
  {
    logo: FaShoppingCart,
    title: "Server Payments for April",
    date: "21 DEC 9:28 PM",
    color: "blue.400",
  },
  {
    logo: FaShoppingCart,
    title: "Top Ananas buying",
    date: "21 DEC 9:28 PM",
    color: "blue.400",
  },
  {
    logo: FaShoppingCart,
    title: "Top orange buying",
    date: "21 DEC 9:28 PM",
    color: "blue.400",
  },
];

export const tablesTableData = [
  {
    logo: avatar1,
    name: "Coca Cola",
    domain: "SABC Cameroon",
    status: "Available",
    quantity: "150",
  },
  {
    logo: avatar1,
    name: "Top pamplemousse",
    domain: "SABC Cameroon",
    status: "Available",
    quantity: "300",
  },
  {
    logo: avatar1,
    name: "Top grenadine",
    domain: "SABC Cameroon",
    status: "Available",
    quantity: "100",
  },
  {
    logo: avatar1,
    name: "Djino",
    domain: "SABC Cameroon",
    status: "Available",
    quantity: "200",
  },
];

export const invoicesData = [
  {
    date: "March, 01, 2020",
    code: "#MS-415646",
    price: "180 000 XAF",
    logo: FaFilePdf,
    format: "PDF",
  },
  {
    date: "February, 10, 2020",
    code: "#RV-126749",
    price: "50 000 XAF",
    logo: FaFilePdf,
    format: "PDF",
  },
  {
    date: "April, 05, 2020",
    code: "#FB-212562",
    price: "600 000 XAF",
    logo: FaFilePdf,
    format: "PDF",
  },
  {
    date: "June, 25, 2019",
    code: "#QW-103578",
    price: "600 000 XAF",
    logo: FaFilePdf,
    format: "PDF",
  },
  {
    date: "March, 01, 2019",
    code: "#AR-803481",
    price: "900 000 XAF",
    logo: FaFilePdf,
    format: "PDF",
  },
];

export const newestTransactions = [
  {
    name: "SABC Top Pamplemousse",
    date: "27 March 2021, at 12:30 PM",
    price: "- 500 XAF",
    logo: FaArrowDown,
  },
  {
    name: "SABC Top Grenadine",
    date: "27 March 2021, at 12:30 PM",
    price: "- 500 XAF",
    logo: FaArrowDown,
  },
  {
    name: "SABC Top Ananas",
    date: "27 March 2021, at 12:30 PM",
    price: "- 500 XAF",
    logo: FaArrowDown,
  },
];

export const olderTransactions = [
  {
    name: "SABC Top Ananas",
    date: "26 March 2021, at 13:45 PM",
    price: "50 000 XAF",
    logo: FaArrowUp,
  },
  {
    name: "SABC Top Grenadine",
    date: "26 March 2021, at 13:45 PM",
    price: "50 000 XAF",
    logo: FaArrowUp,
  },
];
