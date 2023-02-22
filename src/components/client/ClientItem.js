import React from "react";
import classes from "./ClientItem.module.css"


const ClientItem = props => {


    return (
        <li className={classes.client}>
            <h3>{props.name}</h3>
            <div className={classes.phone}>
                <span className="material-icons">{'contact_phone'}</span>
                <div className={classes.phone__number}>{props.phone}</div>
            </div>
        </li>
    )
}

export default ClientItem