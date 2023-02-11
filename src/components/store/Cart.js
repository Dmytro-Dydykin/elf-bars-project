import React, {Fragment} from "react";
import classes from "./Cart.module.css";

const Cart = props => {

    return (
        <Fragment>
            <div className={classes.modal}>
                <h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab atque, consectetur corporis culpa dicta
                    est
                    excepturi explicabo illum, ipsam laudantium molestiae nam nesciunt nostrum praesentium quod sit,
                    soluta
                    tempora ut?</h1>
                <button onClick={props.onClose}>Close</button>
            </div>
        </Fragment>
    )
}

export default Cart