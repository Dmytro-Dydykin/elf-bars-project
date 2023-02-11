import React, {Fragment, useRef, useState} from "react";
import Input from "./Input";
import classes from "./MealItemForm.module.css";

const MealItemForm = (props) => {
    const [amountIsValid, setAmountIsValid] = useState(true)
    const amountInputRef = useRef()


    const submitHandler = event => {
        event.preventDefault();

        const enteredAmount = amountInputRef.current.value;
        const enteredAmountNumber = +enteredAmount;

        if (enteredAmount.trim().length === 0 || enteredAmountNumber < 1 || enteredAmountNumber > 100) {
            setAmountIsValid(false);
            return;
        }
        props.onAddToCart(enteredAmountNumber)
    }

    return (
        <Fragment>
            <form className={classes.form} onSubmit={submitHandler}>
                <Input
                    ref={amountInputRef}
                    input={{
                        id: 'amount_' + props.id,
                        type: 'number',
                        min: '1',
                        max: '100',
                        step: '1',
                        defaultValue: '1'
                    }}/>
                <button className={classes.btn}>+ Add</button>
                {!amountIsValid && <p>Please enter a valid amount (1 - 10)</p>}
            </form>
        </Fragment>
    )
}

export default MealItemForm