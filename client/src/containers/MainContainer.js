import React, { Component } from 'react'
import { MainController } from '../controllers'
import MainLayout from '../components/Main/MainLayout'


class MainContainer extends Component {
    state = {
        housesArray: null
    }

    //   componentDidMount() {
    //   }

    mainSearch = async (searchTerm) => {
        this.setState({
            housesArray: await MainController.getHouses(searchTerm)
        })
    }

    render() {


        return (
            <MainLayout
                mainSearch={this.mainSearch}
                housesArray={this.state.housesArray} 
            />
        )
    }
}

export default MainContainer