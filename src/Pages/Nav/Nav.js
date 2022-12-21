import React from 'react';
import { NavLink } from 'react-router-dom';
import "./nav.css"

const Nav = () => {
    return (
        <div className="navbar bg-base-100">

        <NavLink to ="/" className=" bt text-lg px-5 py-2 rounded-[16px] font-light bg-[#E0E0E0] hover:bg-slate-600 mr-2 text-[#606060]">Layout 1</NavLink>

        <NavLink to ="/layout2" className=" bt text-lg px-5 py-2 rounded-[16px] font-light bg-[#E0E0E0] hover:bg-slate-600 mr-2 text-[#606060]">Layout 2</NavLink>

        <NavLink to ="/layout3" className=" bt text-lg px-5 py-2 rounded-[16px] font-light bg-[#E0E0E0] hover:bg-slate-600 mr-2 text-[#606060]">Layout 3</NavLink>

        
      </div>
    );
}; 

export default Nav;