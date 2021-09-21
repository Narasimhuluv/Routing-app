import React from 'react'
import {  NavLink } from 'react-router-dom'

function Sidebar() {
    console.log("Home")
    return (
        <div className="border w-3/12 h-screen">
            <NavLink activeClassName="active" to="/" exact>
                <h2 className="text-2xl py-2 text-center">Home</h2>
            </NavLink>
            <NavLink activeClassName="active" to="/articles" exact>
                <h2 className="text-2xl text-center mt-4 py-2">Articles</h2>
            </NavLink>

            <NavLink activeClassName="active" to="/help" exact>
                <h2 className="text-2xl  text-center mt-4 py-2">Help</h2>
            </NavLink>
        </div>
    )
}

export default Sidebar
