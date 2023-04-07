import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import './ReviewItem.css'

const ReviewItems = ({ product, handleRemoveFromCart }) => {
    // console.log(product);
    const {id, img, name, price, quantity } = product;
    return (
        <div className='review-item'>
            <img src={img} alt="" />
            <div className='review-detail'>
                <p className='product-title'>Name: {name} </p>
                <p>Price: <span className='orange-text'>${price}</span></p>
                <p>Order quantity: <span className='orange-text'>{quantity}</span></p>
            </div>

            <button className='btn-delete' onClick={()=>handleRemoveFromCart(id)}>
                <FontAwesomeIcon className='delete-icon' icon={faTrashAlt} />
            </button>

        </div>
    );
};

export default ReviewItems;