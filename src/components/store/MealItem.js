import React, {Fragment, useContext} from "react";
import CartContext from "./CartContext";

const MealItem = props => {

    const cartCtx = useContext(CartContext)

    const addToCartHandler = () => {
        cartCtx.addItem({
            flavour: props.flavour,
            name: props.name,
            price: props.price
        })
    }

    return (
        <Fragment>
            {props.children}
        </Fragment>
    )
}

export default MealItem