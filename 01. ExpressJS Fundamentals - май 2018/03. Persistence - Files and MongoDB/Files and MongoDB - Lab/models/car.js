const mongoose = require('mongoose')

let carSchema = new mongoose.Schema({
  brand: {type: String, required: true},
  model: {type: String, required: true},
  color: {type: String},
  year: {type: Number, required: true}
})
let Car = mongoose.model('Car', carSchema)

module.exports = Car
