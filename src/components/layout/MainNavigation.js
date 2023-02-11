
import classes from './MainNavigation.module.css';
import HeaderCartButton from "./HeaderCartButton";
import {useState} from "react";
import Menu from "../menu/Menu";

const MainNavigation = (props) => {
    const [menuActive, setMenuActive] = useState(false)


    const items = [{value: 'Products', navLink: '/store', icon: 'done_all'},
        {value: 'Clients', navLink: '/clients', icon: 'account_circle'},
        {value: 'Analytic', navLink: '/money', icon: 'attach_money'},
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
                    <div className={classes.logo}><img src="../Images/Elf-Bar-logo.svg" alt=""/></div>
                </div>
                <HeaderCartButton onClick={props.onShowCart}/>
        </header>
    );
};

export default MainNavigation;
