import React from "react";
import DrawerMenu from "../../DrawerMenu";
import './index.css';

function NavBar() {
    return (
        <>
            <nav class="navbar navbar-dark bg-dark">
                <div>
                    <DrawerMenu anchor="left" />
                </div>
                <a class="navbar-brand" href="#">
                    Nilson
                </a>
            </nav>
        </>
    )
}

export default NavBar;