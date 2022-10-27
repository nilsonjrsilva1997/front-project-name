import React from "react";
import "./index.css";



function Card(props) {
  return (
    <div class="card">
      <div class="card-image">
        <div>Mr. Burger Classico</div>
      </div>
      
      <div class="card-body">Lorem Ipsum is simply dummy text of the printing and typesetting industry</div>

      <div class="card-footer">
        <div>A partir de: </div>
        <div class="price-text">R$ 22,00</div>
      </div>
  </div>
  );
};

export default Card;