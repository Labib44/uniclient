import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout/MainLayout";
import Home from "../pages/Home/Home";
import Demos from "../pages/Demos/Demos";
import About from "../pages/About/About";
import Blog from "../pages/Blog/Blog";
import Pages from "../pages/Pages/Pages";
import Contact from "../pages/Contact/Contact";
import Error from "../component/Shared/Error/Error";

const routers = createBrowserRouter([

    {
        path: '/', element: <MainLayout></MainLayout>, children: [

            {
                path: '/', element: <Home></Home>
            },
            {
                path: '/demos', element: <Demos></Demos>
            },
            {
                path: '/about', element: <About></About>
            },
            {
                path: '/blog', element: <Blog></Blog>
            },
            {
                path: '/pages', element: <Pages></Pages>
            },
            {
                path: '/contact', element: <Contact></Contact>
            },
        ]
    },
    {
        path: '/*', element: <Error></Error>
    }
])

export default routers;