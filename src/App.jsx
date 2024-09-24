import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import Home from "./ui/Home";
import SearchedWeather, {
  loader as searchedLoader,
} from "./features/SearchedWeather";
import Error from "./ui/Error";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error/>,
    children: [
      {
        path: "/",
        element: <Home />,
        errorElement: <Error/>,
      },
      {
        path: "/weather/:cityName",
        loader: searchedLoader,
        element: <SearchedWeather />,
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
