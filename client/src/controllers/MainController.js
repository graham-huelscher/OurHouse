import axios from 'axios'

const MainController = {
  getHouses: async (searchTerm) => {
      const response = await axios.get(`/api/houses/${searchTerm}`)
      return response.data
  }
}

export default MainController