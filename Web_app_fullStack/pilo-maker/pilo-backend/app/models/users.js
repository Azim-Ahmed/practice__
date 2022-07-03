module.exports = (mongoose) => {
  var schema = mongoose.Schema(
    {
      username: { type: String, require: true },
      email: { type: String, require: true },
      password: { type: String, require: true },
      position: { type: String },
      avatar: { type: String, data: Buffer },
      bio: { type: String },
      projects: [{ type: mongoose.Schema.ObjectId, ref: "project" }],
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

  const User = mongoose.model("user", schema);
  return User;
};
