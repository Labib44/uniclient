import { Link } from 'react-router-dom';
import uniclient from '../../../assets/uniclient.jpg'
import CustomButton from '../CustomButton/CustomButton';


const Navbra = () => {

    const menuItem = <>
        <li><Link className='btn btn-ghost' to='/demos'>Demos</Link></li>
        <li><Link className='btn btn-ghost' to='/about'>About</Link></li>
        <li><Link className='btn btn-ghost' to='/blog'>Blog</Link></li>
        <li><Link className='btn btn-ghost' to='/pages'>Pages</Link></li>
        <li><Link className='btn btn-ghost' to='/contact'>Contact</Link></li>

    </>
    return (
        <div className='container mx-auto bg-[#12141D] text-white'>
            <div className="navbar flex justify-between">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={1} className="menu menu-compact dropdown-content mt-3 p-2 shadow rounded-box w-52 text-white">
                            {menuItem}
                        </ul>
                    </div>
                    <div className=''>

                        <Link to={'/'}>
                            <img src={uniclient} className='h-12' alt="Uniclient" />
                        </Link>
                    </div>

                    <div className="hidden lg:flex ">
                        <ul className="menu menu-horizontal p-0 text-white">
                            {menuItem}
                        </ul>
                    </div>
                </div>


                <div className="navbar-end">
                    
                    <CustomButton
                    buttonName={"Sign in"}
                    cssStyle={
                        "btn mr-2 bg-black"
                    }
                    ></CustomButton>

                    <CustomButton
                        buttonName={"Get Started Free"}
                        cssStyle={
                            "btn bg-gradient-to-r from-[#2B59FF] to-[#BB2BFF] hidden lg:inline"
                        }
                    ></CustomButton>
                </div>
            </div>

        </div>
    );
};

export default Navbra;