import './index.css';
import React from "react";

function CategoryList() {
    return(
        <div>
            <select name="categories" id="categories" class="selectpicker">
                <option value="">Selecione uma categoria</option>
                <option value="">Categoria 1</option>
                <option value="">Categoria 2</option>
                <option value="">Categoria 3</option>
                <option value="">Categoria 4</option>
                <option value="">Categoria 5</option>
            </select>
        </div>
    )
}

export default CategoryList;