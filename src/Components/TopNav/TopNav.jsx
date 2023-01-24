import React from 'react'

import { GiHamburgerMenu } from "react-icons/gi";

import "./TopNav.css"
function TopNav(props) {

  return (
    <div className="TopNav_container">
      <button
        onClick={() => {
          props.setnav(!props.nav);
        }}
        // className='nav_toggle'
        className={props.nav ? "nav_toggle nav_toggle_hidden" : "nav_toggle"}
      >
        <GiHamburgerMenu />
      </button>
    </div>
  );
}

export default TopNav