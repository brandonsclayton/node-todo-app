
let mongoose = require('mongoose');

let Schema = mongoose.Schema;

let userSchema = new Schema({
  email: {
    type: String,
    require: true,
    minLength: 1,
    trim: true,
  }
});

let User = mongoose.model('User', userSchema);

module.exports = {
  User
};
