module.exports = (mongoose) => {
  var schema = mongoose.Schema(
    {
      name: { type: String, require: true },
      background: { type: String },
      description: { type: String, require: true },
      // owner: {type: Schema.ObjectId, ref: "user", require: true},
    },
    {
      timestamps: true,
    }
  );

  schema.method("toJSON", function () {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  const Board = mongoose.model("board", schema);
  return Board;
};
