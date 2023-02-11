import {Fragment, useState} from 'react';
import Cart from "../store/Cart";
import MainNavigation from './MainNavigation';


const Layout = (props) => {
    const [cartIdShown, setCartIsShown] = useState(false)

    const showCartHandler = () => {
        setCartIsShown(true)
    }

    return (
        <Fragment>
            <MainNavigation onShowCart={showCartHandler}/>
            {cartIdShown && <Cart/>}
            {props.children}
        </Fragment>
    );
};

export default Layout;
