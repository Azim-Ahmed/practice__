const { Schema } = require("mongoose");
module.exports = (mongoose) => {
  var schema = mongoose.Schema({
    name: { type: String, require: true },
    tasks: [{ type: Schema.Types.ObjectId, ref: "task" }],
  });
  schema.method("toJSON", function () {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  const List = mongoose.model("list", schema);
  return List;
};
