import React from "react";
import {
  createHashRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import AppLayout from "../layouts/AppLayout";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import Contacts from "../pages/Contacts";
import Promo from "../pages/Promo";
import OfferPage from "../pages/OfferPage";
import Catalog from "../pages/Catalog";
import Product from "../pages/Product";
import Cart from "../pages/Cart";
import Checkout from "../pages/Checkout";
import AccountRouter from "./AccountRouter";
import Registration from "../pages/auth/Registration";
import AuthRoute from "./AuthRoute";
import Activate from "../pages/auth/Activate";
import Recovery from "../pages/auth/Recovery";
import ActivateEditEmail from "../pages/auth/ActivateEditEmail";

const router = createHashRouter(
  createRoutesFromElements(
    <Route path="/" element={<AppLayout />}>
      <Route index element={<Home />} />
      <Route path="menu" element={<Catalog />} />
      <Route path="menu/product" element={<Product />} />
      <Route path="cart" element={<Cart />} />
      <Route path="checkout" element={<Checkout />} />
      <Route path="promo" element={<Promo />} />
      <Route path="promo/:id" element={<OfferPage />} />
      <Route path="contacts" element={<Contacts />} />
      <Route path="*" element={<NotFound />} />
      <Route
        path="account/*"
        element={
          <AuthRoute>
            <AccountRouter />
          </AuthRoute>
        }
      />
      <Route path="activate-email/:key" element={<ActivateEditEmail />} />
      <Route path="activate/:key" element={<Activate />} />
      <Route path="password" element={<Recovery />} />
      <Route path="login" element={<Registration />} />
    </Route>
  )
);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
