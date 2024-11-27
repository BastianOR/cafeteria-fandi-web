import { createBrowserRouter } from "react-router-dom";
import Homepage from "../Homepage";
import NotFoundPage from "../pages/NotFoundPage/notfound-page";
import CartaPage from "../pages/CartaPage/carta-page";
import LocationPage from "../pages/LocationPage/location-page";
import Index from "../index";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Index />,
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
      {
        path: "/carta",
        element: <CartaPage />,
      },
      {
        path: "/location",
        element: <LocationPage />,
      },
      {
        path: "*",
        element: <NotFoundPage />,
      }
    ],
  }
]);

export default router;
