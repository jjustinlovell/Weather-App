import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import Home from "./ui/Home";
import Weather from "./features/Weather";
import SearchedWeather from "./features/SearchedWeather";


const router = createBrowserRouter([
  {
    element: <AppLayout/>,
    children: [
      {
        path: "/",
        element : <Home/>
      },
      {
        path : "/weather/all",
        element : <Weather/>
      },
      {
        path : "/weather/:cityName",
        element : <SearchedWeather/>
      }
    ]
  }
])

export default function App(){
  return <RouterProvider router={router}/>
}