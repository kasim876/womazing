import {HOME_ROUTE, SHOP_ROUTE, ABOUT_ROUTE, PRODUCT_ROUTE, CONTACTS_ROUTE, BASKET_ROUTE, BOOKING_ROUTE, BOOKING_SUCCESS_ROUTE} from "./utils/consts";

import Home from "./pages/Home";
import Shop from "./pages/Shop";
import About from "./pages/About";
import Product from "./pages/Product";
import Contacts from "./pages/Contacts";
import Basket from "./pages/Basket";
import Booking from "./pages/Booking";
import BookingSuccess from "./pages/BookingSuccess";

export const ROUTES = [
  {
    path: HOME_ROUTE,
    element: <Home />
  },
  {
    path: SHOP_ROUTE,
    element: <Shop />
  },
  {
    path: ABOUT_ROUTE,
    element: <About />
  },
  {
    path: PRODUCT_ROUTE,
    element: <Product />
  },
  {
    path: CONTACTS_ROUTE,
    element: <Contacts />
  },
  {
    path: BASKET_ROUTE,
    element: <Basket />
  },
  {
    path: BOOKING_ROUTE,
    element: <Booking />
  },
  {
    path: BOOKING_SUCCESS_ROUTE,
    element: <BookingSuccess />
  }
]