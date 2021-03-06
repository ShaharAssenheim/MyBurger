import React, {Component} from 'react';
import Aux from '../../hoc/Auxiliary/Auxiliary';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/orderSummary/orderSummary'

const INGREDIENT_PRICES = {
    salad: 0.5,
    bacon: 0.5,
    cheese: 0.3,
    meat: 0.25,
};


class BurgerBuilder extends Component{
    state = {
        ingridients: {
            salad: 0,
            bacon:0,
            cheese:0,
            meat: 0
        },
        purchasable: false,
        totalPrice: 4,
        purchasing: false
    }

    updatePurchaseState (ingredients) {
        const sum = Object.keys( ingredients )
            .map( igKey => {
                return ingredients[igKey];
            } )
            .reduce( ( sum, el ) => {
                return sum + el;
            }, 0 );
        this.setState( { purchasable: sum > 0 } );
    }

    addIngridientHandler = (type) => {
        const oldCount = this.state.ingridients[type];
        const updatedCount = oldCount + 1;
        const updatedIngridients = {
            ...this.state.ingridients
        }
        updatedIngridients[type] = updatedCount;
        const priceAddition = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;
        this.setState({totalPrice: newPrice, ingridients: updatedIngridients});
        this.updatePurchaseState(updatedIngridients);
    }

    removeIngridientHandler = (type) => {
        const oldCount = this.state.ingridients[type];
        if(oldCount <=0)
            return;
        const updatedCount = oldCount - 1;
        const updatedIngridients = {
            ...this.state.ingridients
        }
        updatedIngridients[type] = updatedCount;
        const priceDeduction = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - priceDeduction;
        this.setState({totalPrice: newPrice, ingridients: updatedIngridients});
        this.updatePurchaseState(updatedIngridients);
    }

    purchaseHandler = () => {
        this.setState({ purchasing: true });
    };

    purchaseCancelHandler = () => {
        this.setState({ purchasing: false });
    };

    purchaseContinueHandler = async () => {
        this.props.history.push("/checkout");
    };

    render() {
        const disabeldInfo = { ...this.state.ingridients};
        //eslint-disable-next-line
        for(let key in disabeldInfo){
            
            disabeldInfo[ key ] = disabeldInfo[ key ] === 0;
        }

        return(
            <Aux>
                <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
                    <OrderSummary 
                     ingridients={this.state.ingridients}
                     purchaseCancelled={this.purchaseCancelHandler}
                     purchaseContinued={this.purchaseContinueHandler}
                     price={this.state.totalPrice}/>
                </Modal>
                <Burger ingridients={this.state.ingridients} />
                <BuildControls 
                ingridientAdded={this.addIngridientHandler}
                ingridientRemove={this.removeIngridientHandler}
                disabeld={disabeldInfo}
                purchasable={this.state.purchasable}
                orderd={this.purchaseHandler}
                price={this.state.totalPrice}/>
            </Aux>
        )
    }
}

export default BurgerBuilder;