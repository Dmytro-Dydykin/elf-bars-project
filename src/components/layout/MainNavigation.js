
import classes from './MainNavigation.module.css';
import HeaderCartButton from "./HeaderCartButton";
import {useState} from "react";
import Menu from "../menu/Menu";

const MainNavigation = () => {
    const [menuActive, setMenuActive] = useState(false)


    const items = [{value: 'Products page', navLink: '/products', icon: 'done_all'},
        {value: 'Clients page', navLink: '/clients', icon: 'account_circle'},
        {value: 'Orders page', navLink: '/orders', icon: 'store'},
        {value: 'Analytic page', navLink: '/money', icon: 'attach_money'},
        {value: 'Stock fulfilment', navLink: '/purchase', icon: 'store'},]
    return (
        <header className={classes.header}>

                <div className={classes.menu}>
                    <div className={classes.nav}>
                        <div className={classes.burger_btn} onClick={() => setMenuActive(!menuActive)} >
                            <span/>
                        </div>
                    </div>
                    <Menu active={menuActive} setActive={setMenuActive} items={items}/>
                    <div className={classes.logo}><img src="../images/Elf-Bar-logo.svg" alt=""/></div>
                </div>
                <HeaderCartButton/>
        </header>
    );
};

export default MainNavigation;
