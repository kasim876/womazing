import {lazy} from 'react';

import {HOME_ROUTE, SHOP_ROUTE, ABOUT_ROUTE, PRODUCT_ROUTE, CONTACTS_ROUTE, BASKET_ROUTE, BOOKING_ROUTE, BOOKING_SUCCESS_ROUTE} from './utils/consts';

const Home = lazy(() => import('./pages/Home'));
const Shop = lazy(() => import('./pages/Shop'));
const About = lazy(() => import('./pages/About'));
const Product = lazy(() => import('./pages/Product'));
const Contacts = lazy(() => import('./pages/Contacts'));
const Basket = lazy(() => import('./pages/Basket'));
const Booking = lazy(() => import('./pages/Booking'));
const BookingSuccess = lazy(() => import('./pages/BookingSuccess'));

export const ROUTES = [
  {
    path: HOME_ROUTE,
    element: <Home />,
  },
  {
    path: SHOP_ROUTE,
    element: <Shop />,
  },
  {
    path: SHOP_ROUTE + '/t-shirt',
    element: <Shop />,
  },
  {
    path: SHOP_ROUTE + '/swimsuit',
    element: <Shop />,
  },
  {
    path: SHOP_ROUTE + '/sweatshirt',
    element: <Shop />,
  },
  {
    path: SHOP_ROUTE + '/hoody',
    element: <Shop />,
  },
  {
    path: SHOP_ROUTE + '/coat',
    element: <Shop />,
  },
  {
    path: ABOUT_ROUTE,
    element: <About />,
  },
  {
    path: PRODUCT_ROUTE + '/:id',
    element: <Product />,
  },
  {
    path: CONTACTS_ROUTE,
    element: <Contacts />,
  },
  {
    path: BASKET_ROUTE,
    element: <Basket />,
  },
  {
    path: BOOKING_ROUTE,
    element: <Booking />,
  },
  {
    path: BOOKING_SUCCESS_ROUTE,
    element: <BookingSuccess />,
  },
];