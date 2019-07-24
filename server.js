const express = require('express');
const path = require('path');
const port = process.env.PORT || process.argv[2] || 8080
const app = express();

const HouseRoutes = require('./backend/Houses/HousesRoutes')

app.use(express.static(path.join(__dirname, 'client/build')));

app.use('/api/houses', HouseRoutes)

app.get('*', (req, res) => {
    // res.sendFile(path.join(__dirname+'/client/build/index.html'));
    res.send("These is not the path your are looking for")
  });

// Server Initialize
app.listen(port, () => {
    console.log(`Listening on ${port}`)
  })