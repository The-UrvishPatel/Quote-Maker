import React from "react";
import logo from "../images/SquareLogo.png"

export default function Header () {

    return (

        <div className="header-container">

            <div className="header">

                <img src={logo} alt="You can't see me, but i can see you!" className="logo"/>
                <span className="logoName">Quote Maker</span>

            </div>

        </div>
    )
}