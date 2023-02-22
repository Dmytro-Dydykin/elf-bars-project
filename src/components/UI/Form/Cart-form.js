import React from 'react';
import classes from "./Cart-form.module.css"


const CartForm = (props) => {

    return (
        <div>
            <div className={classes.box}>
                <div className={classes.box_form}>
                    <div className={classes.box_login_tab}></div>
                    <div className={classes.box_login_title}>
                        <h2>Order</h2>
                        <span className="material-icons" onClick={props.onClose}>{'close'}</span>
                    </div>
                    <div className={classes.box_login}>
                        {props.children}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartForm;