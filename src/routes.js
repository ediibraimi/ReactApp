import AddTravel from "./pages/AddTravel";
import DestinationDetails from "./pages/DestinationDetails";
import DestinationList from "./pages/DestinationList";
import EditTravel from "./pages/EditTravel";
import HomePage from "./pages/HomePage";
import TravelList from "./pages/TravelList";

const { createBrowserRouter, RouterProvider } = require("react-router-dom");
const { default: AppLayout } = require("./AppLayout");

const router = createBrowserRouter([
    {
        path: "/",
        element:<AppLayout/>,
        children: [
            {
                path: "/",
                element: <HomePage/>,
            },

            {
                path: "/travelList",
                element: <TravelList/>,
            },
          
            {
                path: "/destinationList",
                element: <DestinationList/>,
            },
            {
                path: "/destinationDetails/:name",
                element: <DestinationDetails/>,
            },
            {
                path: "/addTravel",
                element: <AddTravel/>,
            },
          
            {
                path: "/editTravel/:destiation",
                element: <EditTravel/>,
            },
          




            
        ]
    }
   
])
export function AppRouter(){
    return <RouterProvider router={router}/>
}