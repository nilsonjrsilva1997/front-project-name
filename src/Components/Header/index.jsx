import React from "react";
import "./index.css";
import { FaRegUserCircle } from "react-icons/fa";

import ButtonHeader from "../ButtonHeader";
import TextHeader1 from "../TextHeader1";
import TextHeader2 from "../TextHeader2";
import TextHeader3 from "../TextHeader3";
import ImageHeader from '../ImageHeader';
import TextButton from "../TextButton";
import DrawerMenu from "../DrawerMenu";
import { Link } from "react-router-dom";

function Header(props) {
    return(
    <div class="header">
        <div class="restaurant-container">
            <div class="image-container">
                <div>
                    <ImageHeader src="https://duisktnou8b89.cloudfront.net/img/stores/5b7af37400c29.png" alt="Logo do restaurante"></ImageHeader>
                </div>
                <div>
                    <TextHeader1>Haru é teu cu - SANTOS</TextHeader1>
                    <TextHeader2>Santos - SP</TextHeader2>
                    <TextHeader3>Indisponível no momento</TextHeader3>
                </div>
            </div>
        </div>

         <div>
            
            <div class="actions-container">                
                <div>
                    <div>
                        <ButtonHeader>
                            <FaRegUserCircle />
                            <Link to="/login"><TextButton>Entre ou Cadastre-se</TextButton></Link>
                        </ButtonHeader>
                    </div>

                    <div>
                        <DrawerMenu />
                    </div>
                </div>
            </div>
        </div>
    </div>);
}

export default Header;