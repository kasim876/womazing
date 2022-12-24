import {HOME_ROUTE, SHOP_ROUTE, ABOUT_ROUTE, PRODUCT_ROUTE, CONTACTS_ROUTE, BASKET_ROUTE, BOOKING_ROUTE, BOOKING_SUCCESS_ROUTE} from "./utils/consts";

import Home from "./pages/Home/Home";
import Shop from "./pages/Shop/Shop";
import About from "./pages/About/About";
import Product from "./pages/Product/Product";
import Contacts from "./pages/Contacts/Contacts";
import Basket from "./pages/Basket/Basket";
import Booking from "./pages/Booking/Booking";
import BookingSuccess from "./pages/BookingSuccess/BookingSuccess";

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