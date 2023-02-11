import React from 'react';
import "./Menu.css";
import {NavLink} from "react-router-dom";

const Menu = ({items, active, setActive}) => {
    return (
        <div className={active ? 'menu active' : 'menu'} onClick={() => setActive(false)}>
            <div className='blur'>
                <div className='menu__content' onClick={e => e.stopPropagation()}>
                    <ul>
                        {items.map(item =>
                            <li key={item.value}>
                                <NavLink to={item.navLink}>
                                    {item.value}
                                    <span className="material-icons">{item.icon}</span>
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