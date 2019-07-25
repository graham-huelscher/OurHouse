import React, { Component } from 'react';
import HouseCard from './HouseCard'

class HousesCardDeck extends Component {

    render() {

        const cardsJSX = []
        for (let i = 0; i < 10; i++) cardsJSX.push(<HouseCard id={i+1}></HouseCard>)
        return (
            <div class="container">
                <div class="row">
                    <div class="card-deck">
                        {cardsJSX}
                    </div>
                </div>
            </div>
        )
    }
}

export default HousesCardDeck