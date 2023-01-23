let mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/task ')
let schema = mongoose.Schema(
  {
    content: {
      type: String,
      required: true
    }
  }
)
module.exports = mongoose.model('tasks', schema);
