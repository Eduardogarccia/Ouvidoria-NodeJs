const mongoose = require('mongoose')
const Schema = mongoose.Schema

const manifestSchema = new Schema({
  title: {type: String, required: true, unique: true },
  type: {type: String, required: true},
  description: {type: String, required: true},
})


module.exports = mongoose.model("manifestModel", manifestSchema);