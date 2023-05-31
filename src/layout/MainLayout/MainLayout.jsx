import { Outlet } from "react-router-dom";
import Footer from "../../component/Shared/Footer/Footer";
import Navbra from "../../component/Shared/Navbar/Navbra";


const MainLayout = () => {
    return (
        <>
            <Navbra></Navbra>
           
                <Outlet></Outlet>
           
            <Footer></Footer>
        </>
    );
};

export default MainLayout;