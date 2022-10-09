import './index.css';
import React from 'react';

function CategoryItem(props) {
    return(
        <>
            <div class="category-item" style={{backgroundPosition: 'center', paddingLeft: '40px', alignItems: 'center', display: 'flex', borderRadius: '12px', height: '86px' ,textShadow: '1px 1px 1px #000', fontSize: '26px' ,color: '#fff', fontWeight: 'bold', backgroundImage: `url(${props.backgroundCategory})`}}>
                <div>{props.categoryName}</div>
            </div>
        </>
    );
}

export default CategoryItem;