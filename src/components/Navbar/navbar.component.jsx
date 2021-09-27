import React from 'react';
import {BiChevronRight,BiSearch,BiMenu,BiChevronDown} from "react-icons/bi";



const NavSm =()=>{
    return (
        <>
        <div className="text-white flex items-center justify-between">
            <div><h3 className="text-xl font-bold">It all starts Here </h3>
            <span className="text-bms-400  text-xs flex items-center">Gwalior <BiChevronRight/></span></div>
        <div className="w-8 h-8">
            <BiSearch className="w-full h-full"/>
        </div>
        
        </div>
        
        </>
    )
};
const NavMd =()=>{
    return(
        <div className="w-full flex items-center gap-3 bg-white px-3 py-2 rounded-md">
            <BiSearch/>
            <input type="search" className="w-full bg-transparent border-none focus:outline-none" placeholder="Search for Movies, events, Plays, Sports and Activities "/>
        </div>
    )
};
const Navlg =()=>{
    return(
        <>
        <div className="container mx-auto px-4 flex items-center justify-between gap-3">
            <div className="flex items-cnter w-1/2 rounded"><div className="w-12 h-12 rounded"><img src="data:image/jpeg;base64,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" alt="logo" className="w-full h-full" /></div>
            <div className="w-full flex items-center gap-3 bg-white px-3 py-2 rounded-md">
            <BiSearch/>
            <input type="search" className="w-full bg-transparent border-none focus:outline-none" placeholder="Search for Movies, events, Plays, Sports and Activities "/>
        </div>
            </div>
            <div className="flex items-center gap3"><span className="text-bms-200  text-xs flex items-center hover:text-white cursor-pointer ...">Gwalior <BiChevronDown/></span>
            <button className="bg-red-500 text-white px-2 py-1 text-sm rounded">Sign in</button>
            <div className="w-8 h-8 text-white"><BiMenu className="w-full h-full"/> </div>
            </div>
        </div>
        </>
    )
};
const Navbar=()=>{
return <>
<nav className="bg-bms-700 p-4">
<div className="md:hidden"> {/*mobile screen */} <NavSm/> </div>
<div className="hidden md:flex lg:hidden">
    {/*medium/tab */}
    <NavMd/>
</div>
<div className="hidden lg:flex">
    {/*Large dev*/}
    <Navlg/>
</div>

</nav>
</>;

};
export default Navbar;