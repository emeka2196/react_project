import { useState } from "react";
import { BsPerson, BsSearch } from "react-icons/bs";
import { FaUser, FaBars, FaTimes } from 'react-icons/fa'
const Nav = () => {
    const [menu, setMenu] = useState(false)
    const [loggedIn, setLoggedIn] = useState(false)
    const toggleMenu = () => {
        setMenu(!menu)
    }
    return ( 
        <div className="flex shadow w-full fixed w-screen px-1c z-40 py-0.75c bg-gray-400">
            <div className="flex w-full justify-between items-center">
                <div className="flex items-center group">
                    <p className="text-black letterspacing font-bold text-xl cursor-pointer uppercase">
                        <span className="text-redc text-[1.75rem]">V</span>
                        <span className="border-b-4 border-redc text-black group-hover:text-[1.75rem] duration-500 group-hover:border-0 group-hover:text-redc ">erse</span>
                        <span className="text-redc group-hover:text-black duration-500 text-[1.75rem]">7</span></p>
                </div>
                <div className={menu?
                "flex flex-col fixed duration-500 top-3.5c pt-1c text-black right-0 w-screen h-screen  items-center text-xs font-bold gap-1.5c md:top-0 md:pt-0 md:right-0   md:flex-row md:relative bg-gray-400 md:h-auto md:w-auto" 
                : "flex md:bg-transparent duration-500 flex-col fixed top-3c pt-1c -right-[150vw] w-screen h-screen  items-center text-xs font-bold text-gray-800 gap-1.5c md:top-0 md:pt-0 md:right-0   md:flex-row md:relative bg-gray-400 md:h-auto md:w-auto "}>
                    <p className=" hover:text-redc duration-500 text-white cursor-pointer">Home</p>
                    <p className=" hover:text-redc duration-500 text-white  cursor-pointer">Series</p>
                    <p className=" hover:text-redc duration-500 text-white cursor-pointer">Movies</p>
                    <p className=" hover:text-redc duration-500 text-white cursor-pointer">Kids</p>
                    <p className=" hover:text-redc duration-500 text-white cursor-pointer">Watch Later <span className="text-redc">(2)</span></p>
                    <BsSearch className="hidden md:block cursor-pointer text-white  text-sm"/>
                    {!loggedIn
                        ?<div className="hidden md:flex h-2c w-2c cursor-pointer rounded-full bg-redc"></div>
                        :<FaUser className="hidden md:block cursor-pointer text-white  text-sm"/>
                    }
                </div>
                <div className="flex items-center gap-1.25c md:hidden text-white">
                <BsSearch className=" md:hidden cursor-pointer text-sm"/>
                {!loggedIn
                    ?<div className="flex h-1.5c w-1.5c md:h-1.75c md:w-1.75c cursor-pointer rounded-full bg-redc"></div>
                    :<FaUser className="md:hidden cursor-pointer text-sm"/>
                }
                {!menu?<FaBars className=" cursor-pointer md:hidden" onClick={toggleMenu}/>:<FaTimes className="cursor-pointer md:hidden" onClick={toggleMenu}/>
                }
                
                </div>
            </div>
        </div>
     );
}
 
export default Nav;
