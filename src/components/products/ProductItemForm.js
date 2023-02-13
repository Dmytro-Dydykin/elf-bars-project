import React, {useRef} from "react";
import classes from "./ProductItemForm.module.css";
const ProductItemForm = (props) => {

    const quantityInputRef = useRef()
    const priceInputRef = useRef()
    const submitHandler = (event) => {
        event.preventDefault()

        const quantity = quantityInputRef.current.value;
        const price = priceInputRef.current.value

        console.log(quantityInputRef.current.value)

        addToCartHandler({
            quantity: quantity,
            sellingPrice: price
        })
    }
    const addToCartHandler = async (userData) => {
        console.log(userData)
        await fetch('https://elf.denisov.link/api/cart', {
            method: 'POST',
            mode: 'no-cors',
            body: JSON.stringify({
                productId: props.productId,
                quantity: userData.quantity,
                sellingPrice: userData.sellingPrice,
            })
        })
    }
    return (
        <form className={classes.form} onSubmit={submitHandler}>
            <input type='text' className={classes.input} name='quantity' ref={quantityInputRef}/>
            <input type='text' className={classes.input} name='price' ref={priceInputRef} />
            <button className={classes.btn}>+ Add</button>
        </form>
    )
}
export default ProductItemForm