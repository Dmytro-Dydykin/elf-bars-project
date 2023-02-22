import React, {useState} from "react";
import '../../index.css'
import classes from "./HeaderCartButton.module.css";
import Cart from "../cart/Cart";

const HeaderCartButton = props => {

    const [productAddingShown, setProductAddingShown] = useState(false)
    const showProductHandler = () => {
        setProductAddingShown(true)
    }
    const hideProductHandler = async () => {
        setProductAddingShown(false)
    }


    return (
        <div>
            <button className={classes.button} onClick={showProductHandler}>
                <span className={classes.order}>Order</span>
                <span className="material-icons">{'shopping_basket'}</span>
            </button>
            <div className={productAddingShown ? 'blur' : 'original'}>
                <Cart onClose={hideProductHandler}/>
            </div>
        </div>


    )
}

export default HeaderCartButton