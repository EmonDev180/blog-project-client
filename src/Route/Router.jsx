import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home";
import AddBlogs from "../Pages/AddBlogs";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import AllBlogs from "../Pages/AllBlogs";
import Wishlist from "../Pages/WishList/Wishlist";
import PriviteRoute from "./PriveteRoute/PriviteRoute";
import Details from "../Pages/Details/Details";



const router = createBrowserRouter([

    {
        path:'/',
        element:<MainLayout></MainLayout>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:"/addBlogs",
                element: <PriviteRoute> <AddBlogs></AddBlogs></PriviteRoute> 

            },
            {
                path:'/allBlogs',
                element:<AllBlogs></AllBlogs>,
             

            },
            
            {
                path:'/wishlist',
                element:<Wishlist></Wishlist>,

            },

            {
                path:'/details',
                element:<Details></Details>
            },



           
           
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            }
        ]
    }



])

export default router;