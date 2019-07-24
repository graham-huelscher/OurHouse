const hardCodedHouses = [
    {
        id: 1,
        price: "$1,500,000",
        address: "123 Baker Street",
        bedrooms: 4,
        bathrooms: 2
    },
    {
        id: 2,
        price: "$1,500,000",
        address: "123 Baker Street",
        bedrooms: 4,
        bathrooms: 2
    },
    {
        id: 3,
        price: "$1,500,000",
        address: "123 Baker Street",
        bedrooms: 4,
        bathrooms: 2
    },
    {
        id: 4,
        price: "$1,500,000",
        address: "123 Baker Street",
        bedrooms: 4,
        bathrooms: 2
    },
    {
        id: 5,
        price: "$1,500,000",
        address: "123 Baker Street",
        bedrooms: 4,
        bathrooms: 2
    }
]


const HousesController = {
    getHouses: async () => {
        return hardCodedHouses
    }
}

module.exports = HousesController