const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const OrderSchema = new Schema({
    products: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Product",
        },
    ],
    name: String,
    sizes: [String],
    phone: String,
    address: String,
    pin: String,
    email: String,
});

module.exports = Order = mongoose.model("Order", OrderSchema);
