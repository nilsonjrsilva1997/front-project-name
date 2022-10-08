import React from "react";
import "./index.css";
import { FaPhone } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaRegUserCircle } from "react-icons/fa";
import { FaStore } from "react-icons/fa";

import ButtonHeader from "../ButtonHeader";
import TextHeader1 from "../TextHeader1";
import TextHeader2 from "../TextHeader2";
import TextHeader3 from "../TextHeader3";
import ImageHeader from '../ImageHeader';

function Header(props) {
    return(
    <div class="header">
         <div>
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
            <div>
                <div>OUTROS LINKS</div>
                <div  class="unities">
                    <FaStore />
                    <div>Ver outras unidades</div>
                    <TextHeader1>Ver outras unidades</TextHeader1>
                </div>

                <div>
                    <ButtonHeader>
                        <FaRegUserCircle />
                        <TextHeader2>Entre ou Cadastre-se</TextHeader2>
                    </ButtonHeader>
                </div>
            </div>
        </div>
    </div>);
}

export default Header;