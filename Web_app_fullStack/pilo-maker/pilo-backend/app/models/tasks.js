const { Schema } = require("mongoose");
module.exports = (mongoose) => {
  var schema = mongoose.Schema({
    name: { type: String, require: true },
    duedate: { type: Date, require: true },
    description: { type: String, require: true },
    progress: { type: Number, default: 0 },
    members: [
      {
        _id: false,
        user: {
          type: Schema.Types.ObjectId,
          ref: "user",
        },
        username: {
          type: String,
          required: true,
        },
      },
    ],
    checklists: [
      {
        text: {
          type: String,
        },
        complete: {
          type: Boolean,
        },
      },
    ],
  });
  schema.method("toJSON", function () {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  const Task = mongoose.model("task", schema);
  return Task;
};
