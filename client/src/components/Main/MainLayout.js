import React from 'react'
import Jumbotron from './Jumbotron'
import Search from './Search'
import HousesCardDeck from './HousesCardDeck';

const MainLayout = () => (
  <div >
    <Jumbotron />
    <Search />
    {/* Remove hard coded card deck. Needs to be dynamically populated with backend results based on search criteria */}
    < HousesCardDeck />
  </div>
)

export default MainLayout