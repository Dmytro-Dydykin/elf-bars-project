import React from 'react';
import classes from "./Form.module.css"


const Form = (props) => {

    return (
        <div>
            <div className={classes.box}>
                <div className={classes.box_form}>
                    <div className={classes.box_login_tab}></div>
                    <div className={classes.box_login_title}>
                        <span className="material-icons" onClick={props.onCancel}>{'close'}</span>
                        <h2>ADD {props.name}</h2>
                    </div>
                    <div className={classes.box_login}>
                        <div className={classes.fieldset_body} id='login_form'>
                            <form onSubmit={props.confirmHandler}>
                                {props.allData?.map(data =>
                                    <p key={data.name} className={`${classes.control} + ${classes.field}`}>
                                        <label htmlFor={data.name}>{data.name}</label>
                                        <input className={classes.input} type={data.type} id={data.name}
                                               name={data.name} ref={data.nameInputRef}/>
                                    </p>
                                )}
                                <button className={classes.submit}>Add this {props.name}</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Form;