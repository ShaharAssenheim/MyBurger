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
    <div className={classes.Buildcontrols}>
      {controls.map(crtl => (
        <BuildControl key={crtl.label} label={crtl.label}/>
      ))}
    </div>
);

export default buildControls;