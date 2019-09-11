import React from 'react';
import classes from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';

//an array of build key value pairs for controls
const controls = [
    { label: 'Salad', type: 'salad'},
    { label: 'Cheese', type: 'cheese'},
    { label: 'Meat', type: 'meat'},
    { label: 'Bacon', type: 'bacon'},
  ];

const buildControls = (props) => (
    <div className={classes.BuildControls}>
      <p>Current Price: <strong>{props.price.toFixed(2)}</strong></p>
      {controls.map(crtl => (
        <BuildControl 
        key={crtl.label} 
        label={crtl.label} 
        added={() => props.ingridientAdded(crtl.type)}
        remove={() => props.ingridientRemove(crtl.type)}
        disabeld= {props.disabeld[crtl.type]}/>
      ))}
      <button 
      className={classes.OrderButton} 
      disabled={!props.purchasable}
     onClick={props.orderd}>ORDER NOW</button>
    </div>
);

export default buildControls;