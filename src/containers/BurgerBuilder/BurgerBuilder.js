import React, {Component} from 'react';
import Aux from '../../hoc/Auxiliary';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

class BurgerBuilder extends Component{
    state = {
        ingridients: {
            salad: 1,
            bacon:1,
            cheese:1,
            meat: 1
        }
    }
    render() {
        return(
            <Aux>
                <Burger ingridients={this.state.ingridients} />
                <BuildControls />
            </Aux>
        )
    }
}

export default BurgerBuilder;