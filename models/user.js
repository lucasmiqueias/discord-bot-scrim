const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserSchema = new Schema(
  {
    discordName: { type: String, required: true },
    nickName: { type: String, required: true, max: 100 },
    kill: { type: Number, required: true },
    lvl: { type: Number, required: true }
  }, {
    timestamps: true
  }
);

//Export model
module.exports = mongoose.model('users', UserSchema);