import './index.css';
import React from "react";
import { FaArrowRight } from 'react-icons/fa';

function CategoryList() {
    return(
        <div>
           <div>CATEGORIAS</div>

           <div>
           <ul>
                <li>Link 1 <FaArrowRight /></li>
                
                <div class="line"></div>
                <li>Link 2</li> 
                
                <div class="line"></div>
                <li>Link 3</li> <div class="line"></div>
                <li>Link 4</li> <div class="line"></div>
                <li>Link 5</li> <div class="line"></div>
                <li>Link 6</li>  <div class="line"></div>
                <li>Link 7</li>  <div class="line"></div>
                <li>Link 8</li> <div class="line"></div>
                <li>Link 9</li> <div class="line"></div>
                <li>Link 10</li> <div class="line"></div>
                <li>Link 11</li> <div class="line"></div>
                <li>Link 13</li> <div class="line"></div>
                <li>Link 13</li> <div class="line"></div>

            </ul>
           </div>
        </div>
    )
}

export default CategoryList;