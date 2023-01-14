import { createBrowserRouter } from "react-router-dom";
import Home from "../pages";
import CartPage from "../pages/cart";
import ErrorPage from "../components/ErrorPage/ErrorPage";

const routerName = createBrowserRouter([
  { path: "/", element: <Home />, errorElement: <ErrorPage /> },
  { path: "/cart", element: <CartPage />, errorElement: <ErrorPage /> },
]);

export default routerName;
