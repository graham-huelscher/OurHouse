const express = require('express')
const router = express.Router()
const HousesController  = require('./HousesController')

router.get('/:searchTerm', async (req, res) => {
    const searchTerm = req.params.searchTerm
    const mainHouses = await HousesController.getHouses(searchTerm)
    res.json(mainHouses)
})

router.get('/:id', async (req, res) => {
    const { id } = req.params

    res.json(id)
})

router.post('/', (req, res) => {

})

router.put('/', (req, res) => {

})

router.delete('/', (req, res) => {

})

module.exports = router