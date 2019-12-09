const mongoose = require("mongoose");

const listSchema = new mongoose.Schema({
  _user: {
    type: mongoose.Schema.Types.ObjectId,
    required: "User"
  },
  name: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 30
  },
  tasks: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Task"
    }
  ]
});

const List = mongoose.model("List", listSchema);

exports.List = List;
