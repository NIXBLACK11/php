import React from "react";
import Sdata from './Sdata';
import './App.css';

function Product(Props)
{
    return(
        <div className="products">
            <div className="product_info">
                <span>{Props.title}</span>
                <img src={Props.imgsrc} height="200px" width="200px" className="product" />
                <button>Add to cart</button> 
            </div>
            </div>
    )
}

export default Product