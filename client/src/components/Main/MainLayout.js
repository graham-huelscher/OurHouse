import React from 'react'
import Jumbotron from './Jumbotron'
import Search from './Search'
import HousesCardDeck from './HousesCardDeck';

const MainLayout = (props) => (
  <div >
    <Jumbotron />
    <Search mainSearch={props.mainSearch} />
    {props.housesArray ? < HousesCardDeck housesArray={props.housesArray} /> : null}

  </div>
)

export default MainLayout