const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    _id: Schema.Types.ObjectId,
    login: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 30,
    },
    password: {
        type: String,
        required: true,
        minlength: 8,
        maxlength: 1024,
    },
    lists: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "List",
    }],
});

userSchema.methods.generateAuthToken = function() {
    const token = jwt.sign(
      {
        _id: this._id,
        login: this.name,
      },
      process.env.JWT_PRIVATE_KEY
    );
    return token;
  };

const User = mongoose.model("User", userSchema);

exports.User = User;