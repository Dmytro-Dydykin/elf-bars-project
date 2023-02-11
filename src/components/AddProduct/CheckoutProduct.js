import { useRef, useState } from 'react';

import classes from './CheckoutProduct.module.css';

const isEmpty = value => value.trim() === '';


const CheckoutProduct = (props) => {
    const [formInputsValidity, setFormInputsValidity] = useState({
        flavour: true,
        puffs: true,
        fulfilmentPrice: true,
        quantity: true
    })

    const flavourInputRef = useRef();
    const puffsInputRef = useRef();
    const fulfilmentPriceInputRef = useRef();
    const quantityInputRef = useRef();

    const confirmHandler = (event) => {
        event.preventDefault();

        const enteredFlavour = flavourInputRef.current.value;
        const enteredPuffs = puffsInputRef.current.value;
        const enteredFulfilmentPrice = fulfilmentPriceInputRef.current.value;
        const enteredQuantity = quantityInputRef.current.value;

        const enteredFlavourIsValid = !isEmpty(enteredFlavour);
        const enteredPuffsIsValid = !isEmpty(enteredPuffs);
        const enteredFulfilmentPriceIsValid = !isEmpty(enteredFulfilmentPrice);
        const enteredQuantityIsValid = !isEmpty(enteredQuantity);

        setFormInputsValidity({
            flavour: enteredFlavourIsValid,
            puffs: enteredPuffsIsValid,
            fulfilmentPrice: enteredFulfilmentPriceIsValid,
            quantity: enteredQuantityIsValid
        })

        const formIsValid =
            enteredFlavourIsValid &&
            enteredPuffsIsValid &&
            enteredFulfilmentPriceIsValid &&
            enteredQuantityIsValid;

        if (!formIsValid) {
            return;
        }
        props.onConfirm({
            flavour: enteredFlavour,
            puffs: +enteredPuffs,
            fulfilmentPrice: +enteredFulfilmentPrice,
            quantity: +enteredQuantity,
            isAvailable: true
        })

    };

    const flavourControlClasses = `${classes.control} ${
        formInputsValidity.flavour ? "" : classes.invalid
    }`;
    const puffsControlClasses = `${classes.control} ${
        formInputsValidity.puffs ? "" : classes.invalid
    }`;
    const fulfilmentPriceControlClasses = `${classes.control} ${
        formInputsValidity.fulfilmentPrice ? "" : classes.invalid
    }`;
    const quantityControlClasses = `${classes.control} ${
        formInputsValidity.quantity ? "" : classes.invalid
    }`;

    return (
        <form className={classes.form} onSubmit={confirmHandler}>
            <div className={flavourControlClasses}>
                <label htmlFor='flavour'>Flavour</label>
                <input type='text' id='flavour' name="flavour" ref={flavourInputRef} />
                {!formInputsValidity.flavour && <p>Please enter a valid name!</p>}
            </div>
            <div className={puffsControlClasses}>
                <label htmlFor='puffs'>Puffs</label>
                <select name="puffs" id="puffs" ref={puffsInputRef}>
                    <option value="1500">1500</option>
                    <option value="2000">2000</option>
                    <option value="3000">3000</option>
                    <option value="4000">4000</option>
                    <option value="5000">5000</option>
                </select>
                {!formInputsValidity.puffs && <p>Please enter a valid puffs!</p>}
            </div>
            <div className={fulfilmentPriceControlClasses}>
                <label htmlFor='fulfilmentPrice'>Fulfilment Price</label>
                <input type='number' id='fulfilmentPrice' name="fulfilmentPrice" ref={fulfilmentPriceInputRef} />
                {!formInputsValidity.fulfilmentPrice && <p>Please enter a valid price!</p>}
            </div>
            <div className={quantityControlClasses}>
                <label htmlFor='quantity'>quantity</label>
                <input type='number' id='quantity' name="quantity" ref={quantityInputRef} />
                {!formInputsValidity.quantity && <p>Please enter a valid quantity!</p>}
            </div>
            <div className={classes.actions}>

                <button className={classes.submit}>Confirm</button>
            </div>
        </form>
    );
};

export default CheckoutProduct;