const mongoose = require("mongoose");

const HoldingsSchema = require("../schema/HoldingsSchema");

// 🔥 FORCE correct collection name
const Holdingsmodel = mongoose.model("Holding", HoldingsSchema, "holdings");

module.exports = Holdingsmodel;