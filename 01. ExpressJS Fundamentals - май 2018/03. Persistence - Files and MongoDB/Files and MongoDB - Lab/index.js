const mongoose = require('mongoose')
const Car = require('./models/car')

mongoose
  .connect('mongodb://localhost:27017/cars')
  .then(() => {
    Car.find()
      .then((cars) => {
        for (const car of cars) {
          console.log(car._id)
        }
      })
  })
  .catch((err) => {
    console.log(err)
  })
