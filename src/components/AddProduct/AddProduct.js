import React from 'react';
import classes from "./AddProduct.module.css";
import CheckoutProduct from "./CheckoutProduct";

const AddProduct = (props) => {

    const submitOrderHandler = async (userData) => {
        console.log(userData)
        await fetch('https://elf.denisov.link/api/products', {
            method: 'POST',
            mode: 'no-cors',
            headers: {
                // 'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: JSON.stringify({
                flavour: userData.flavour,
                puffs: userData.puffs,
                isAvailable: userData.isAvailable,
                quantity: userData.quantity,
                fulfilmentPrice: userData.fulfilmentPrice,
            })
        })

    }


    return (
        <div className={classes.product__modal}>
            <CheckoutProduct onConfirm={submitOrderHandler}/>
            <button className={classes.btn} onClick={props.onCancel}>Back</button>
        </div>
    );
};

export default AddProduct;