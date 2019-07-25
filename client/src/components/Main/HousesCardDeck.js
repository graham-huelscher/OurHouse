import React, { Component } from 'react';
import HouseCard from './HouseCard'

class HousesCardDeck extends Component {

    render() {

        const cardsJSX = this.props.housesArray.map(house => <HouseCard key={house.id} {...house}></HouseCard>)
        return (
            <div className="container">
                <div className="row">
                    <div className="card-deck">
                        {cardsJSX}
                    </div>
                </div>
            </div>
        )
    }
}

export default HousesCardDeck