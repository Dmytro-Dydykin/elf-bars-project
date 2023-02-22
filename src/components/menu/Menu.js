import React from 'react';
import classes from "./Menu.module.css";
import {NavLink} from "react-router-dom";

const Menu = ({items, active, setActive}) => {
    return (
        <div className={active ? classes.menu_active : classes.menu} onClick={() => setActive(false)}>
            <div className={classes.blur}>
                <div className={classes.menu__content} >
                    <h1>Menu</h1>

                    <ul>
                        {items.map(item =>
                            <li key={item.value}>
                                <NavLink to={item.navLink} className={({isActive}) =>
                                    isActive ? classes.active : ''}>
                                    <div className={classes.link}>
                                        <span className="material-icons">{item.icon}</span>
                                        <div className={classes.link__text}>{item.value}</div>
                                    </div>
                                </NavLink>
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Menu;