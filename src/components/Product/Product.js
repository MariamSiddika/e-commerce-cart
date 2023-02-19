import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import './Product.css';

const Product = (props) => {
    const {product, addToCartHandler} = props;
    const { name, img, price, ratings, seller } = props.product;
    
    return (
        <div className='product'>
            <img src={img} alt="No Data Found" />
            <div className='product-info'>
                <h4 className='product-name'>{name}</h4>
                <h4 className='product-price'>Price: ${price}</h4>
                <p><small>Manufacturar: {seller}</small></p>
                <p><small>Rating: {ratings} star</small></p>
            </div>
            <button onClick={() => addToCartHandler(product)} className='btn-cart'>
                <p>Add to Cart</p>
                <FontAwesomeIcon icon={faCartPlus}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Product;