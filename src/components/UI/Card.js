import classes from "./Card.module.css"
import React, {Fragment} from "react";

const Card = props => {
    return (
        <Fragment>
            <div className={classes.details}>Customer Details</div>
            <div className={classes.information}>
                <h3>№</h3>
                <hr/>
                <p>Name</p>
                <hr/>
                <p>Address</p>
                <hr/>
                <p>User Name</p>
                <hr/>
                <p>Phone</p>
            </div>
            <div className={classes.card}>{props.children}</div>
        </Fragment>
    )
}
export default Card