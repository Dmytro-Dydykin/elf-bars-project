import React, {useRef, useState} from 'react';
import classes from"./css/Form.module.css"


const isEmpty = value => value.trim() === '';

const Form = (props) => {


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
            phone: enteredPhone,
        })

    };

    const flavourControlClasses = `${classes.control} ${
        formInputsValidity.name ? classes.field : classes.invalid
    }`;
    const puffsControlClasses = `${classes.control} ${
        formInputsValidity.phone ? classes.field : classes.invalid
    }`;


    return (
        <div>
            <div className={classes.box}>
                <div className={classes.box_form}>
                    <div className={classes.box_login_tab}></div>
                    <div className={classes.box_login_title}>
                        <span className="material-icons" onClick={props.onCancel}>{'close'}</span>
                        <h2>ADD CLIENT</h2>
                    </div>
                    <div className={classes.box_login}>
                        <div className={classes.fieldset_body} id='login_form'>
                            <form onSubmit={confirmHandler}>
                                <p className={flavourControlClasses}>
                                    <label htmlFor='name'>Name</label>
                                    <input type='text' id='name' name="name" ref={nameInputRef} />
                                    {!formInputsValidity.name && <p>Please enter a valid name!</p>}
                                </p>
                                <p className={puffsControlClasses}>
                                    <label htmlFor='phone'>Phone</label>
                                    <input type='text' id='phone' name="phone" ref={phoneInputRef} />
                                    {!formInputsValidity.phone && <p>Please enter a valid phone!</p>}
                                </p>

                                <button className={classes.submit}>Add this client</button>

                            </form>
                        </div>
                    </div>
                </div>

            </div>




        </div>
    );
};

export default Form;