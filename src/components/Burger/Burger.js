import React from 'react';
import classes from './Burger.css';
import BurgerIngredient from './Burgeringredient/Burgeringredient';

const Burger = (props) => {
    let transformedIngridients = Object.keys(props.ingridients)
    .map(igKey => {
        return [...Array(props.ingridients[igKey])].map((_, i) => {
            return <BurgerIngredient key={igKey+i} type={igKey} />
        });
    }).reduce((arr, el) => {
        return arr.concat(el)
    }, []);

    if(transformedIngridients.length === 0)
    {
        transformedIngridients = <p>Please start adding ingridients</p>
    }

    return(
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top"/>
            {transformedIngridients}
            <BurgerIngredient type="bread-bootom"/>
        </div>
    );
};

export default Burger