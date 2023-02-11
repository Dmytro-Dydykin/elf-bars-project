import React from 'react';
import classes from "./AddClient.module.css"
import CheckoutClient from "./CheckoutClient";
import Form from "../UI/Form/Form";

const AddClient = (props) => {


    const submitOrderHandler = async (userData) => {
        console.log(userData)
        await fetch('https://elf.denisov.link/api/clients', {
            method: 'POST',
            mode: 'no-cors',
            body: JSON.stringify({
                name: userData.name,
                phone: userData.phone
            })
        })
    }


    return (
        <div>
            {/*<CheckoutClient onConfirm={submitOrderHandler}/>*/}
            <Form onConfirm={submitOrderHandler} onCancel={props.onCancel}/>
        </div>
    );
};

export default AddClient;