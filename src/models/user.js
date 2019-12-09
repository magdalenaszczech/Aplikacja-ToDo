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

const User = mongoose.model("User", userSchema);

module.exports = User;