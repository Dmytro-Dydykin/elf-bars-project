import React from "react";
import classes from "./HeaderCartButton.module.css";
import {NavLink} from "react-router-dom";

const HeaderCartButton = props => {




    return (
    <NavLink to='/cart' className={classes.cart_link}>
        <button className={classes.button}>
            <span className={classes.order}>Order</span>
            <span className="material-icons">{'shopping_basket'}</span>
        </button>
    </NavLink>
    )
}

export default HeaderCartButton