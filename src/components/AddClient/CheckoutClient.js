import { useRef, useState } from 'react';

import classes from "./CheckoutClient.module.css"

const isEmpty = value => value.trim() === '';


const CheckoutClient = (props) => {
    const [formInputsValidity, setFormInputsValidity] = useState({
        name: true,
        phone: true,
    })

    const nameInputRef = useRef();
    const phoneInputRef = useRef();


    const confirmHandler = (event) => {
        event.preventDefault();

        const enteredName = nameInputRef.current.value;
        const enteredPhone = phoneInputRef.current.value;


        const enteredNameIsValid = !isEmpty(enteredName);
        const enteredPhoneIsValid = !isEmpty(enteredPhone);


        setFormInputsValidity({
            name: enteredNameIsValid,
            phone: enteredPhoneIsValid
        })

        const formIsValid =
            enteredNameIsValid &&
            enteredPhoneIsValid;

        if (!formIsValid) {
            return;
        }
        props.onConfirm({
            name: enteredName,
            phone: +enteredPhone,
        })

    };

    const flavourControlClasses = `${classes.control} ${
        formInputsValidity.name ? "" : classes.invalid
    }`;
    const puffsControlClasses = `${classes.control} ${
        formInputsValidity.phone ? "" : classes.invalid
    }`;

    return (
        <form className={classes.form} onSubmit={confirmHandler}>
            <div className={flavourControlClasses}>
                <label htmlFor='name'>Name</label>
                <input type='text' id='name' name="name" ref={nameInputRef} />
                {!formInputsValidity.name && <p>Please enter a valid name!</p>}
            </div>
            <div className={puffsControlClasses}>
                <label htmlFor='phone'>Phone</label>
                <input type='text' id='phone' name="phone" ref={phoneInputRef} />
                {!formInputsValidity.phone && <p>Please enter a valid phone!</p>}
            </div>
            <div className={classes.actions}>

                <button className={classes.submit}>Confirm</button>
            </div>
        </form>
    );
};

export default CheckoutClient;