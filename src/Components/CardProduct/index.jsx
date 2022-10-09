import React from "react";
import './index.css';

function CardProduct(props) {
    return(
        <div class="product-container">
            <div class="productInfo">
                <div class="titleProduct">{props.productName}</div>
                <div class="textProduct">{props.description}</div>
                <div class="textProduct">{props.price}</div>
            </div>

            <div class="image-product">
                <img src={props.image} alt="Imagem do produto" />
            </div>
        </div>
    )
}

export default CardProduct;