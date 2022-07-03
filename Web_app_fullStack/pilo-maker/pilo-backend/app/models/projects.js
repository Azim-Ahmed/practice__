const { Schema } = require("mongoose");

module.exports = (mongoose) => {
  var schema = mongoose.Schema(
    {
      name: { type: String, require: true },
      start_date: { type: Date, require: true },
      end_date: { type: Date, require: true },
      description: { type: String, require: true },
      thumbnail: { type: String },
      members: [
        {
          _id: false,
          user: {
            type: Schema.Types.ObjectId,
            ref: "user",
          },
          email: {
            type: String,
            required: true,
          },
          role: {
            type: String,
            default: "admin",
          },
        },
      ],
      lists: [{ type: Schema.Types.ObjectId, ref: "list" }],
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

  const Project = mongoose.model("project", schema);
  return Project;
};
