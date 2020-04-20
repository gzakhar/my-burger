import React from 'react';
import classes from './BuildControl.module.css';

const buildControl = (props) => (
    <div className={classes.BuildControl}>
        <div className={classes.Label}>{props.lable}</div>
        <button className={classes.Less} onClick={props.ingredientRemoved} disabled={props.disabled}>Less</button>
        <button className={classes.More} onClick={props.ingredientAdded}>More</button>
    </div>
);

export default buildControl;