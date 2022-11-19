import headerLogo from '../assets/logo-sm.svg'
import { Link } from "react-router-dom";
import React, { useState } from "react"

import menu from '../assets/menu.svg'
import './Header.css'

const Header = () => {

    const [isClose, setisClose] = useState(false)
    const toggle = () => setisClose (!isClose)
    const [show, setShow] = useState(false)

    return ( 
        <header> 
            <div className="headd fixed top-0 w-full z-10 bg-white pb-4">
                {/* <Modal onClose={() => setShow(false)} show={show}/> */}
                <div className="header-container mt-5 mx-auto
                bg-white 
                flex justify-between items-center 
                w-11/12
                xxl:w-[1300px]">
                    <div className="header-logo">
                        <Link to='/'><img src={headerLogo} alt="" className='w-28 sm:w-36 tb:w-40' /></Link>
                    </div>
                    <nav className={`nav-menu lg:block text-center ${isClose ? "active" : ""}`}>
                        <ul className='inline-block lg:block'>
                            <li className='lg:inline-block mr-10 font-bold'><Link to='/' className="nav-link">Features</Link></li>
                            <li className='lg:inline-block mr-10 font-bold'><Link to='/' className="nav-link">Pricing</Link></li>
                            <li className='lg:inline-block mr-10 font-bold'><Link to='/' className="nav-link">About Us</Link></li>
                            <li className='lg:inline-block mr-10 font-bold'><Link to='/' className="nav-link">Contact Us</Link></li>
                        </ul>
                        <hr className='lg:hidden'/>
                        <div className="sign-in-mb lg:hidden">
                            <input type="button" value="Sign In" className='sign-in-btn' onClick={()=>{setShow(true)}}/>
                        </div>
                        <div className="register-mb lg:hidden">
                            <input type="button" value="Register" className='register-btn' onClick={()=>{setShow(true)}}/>
                        </div>
                    </nav>
                    <div className="sign-register flex gap-4">
                        <div className="sign-in hidden cursor-pointer hover:scale-x-[1.03]
                        lg:block border border-blue-700 rounded-lg py-2 px-5">
                            <input type="button" value="Sign In" className='sign-in-btn text-blue-700 font-semibold' onClick={()=>{setShow(true)}}/>
                        </div>
                        <div className="register hidden cursor-pointer hover:scale-x-[1.03]
                        lg:block border rounded-lg bg-blue-700 py-2 px-5">
                            <input type="button" value="Register" className='register-btn text-white' onClick={()=>{setShow(true)}}/>
                        </div>
                    </div>
                    <div className={`hamburger tb:block lg:hidden ${isClose ? "active" : ""}`} onClick={toggle}>
                            <img src={menu} alt="" className='w-6 sm:w-8 tb:w-10' />
                    </div>
                </div>
            </div>
        </header>
     );
}
 
export default Header;
