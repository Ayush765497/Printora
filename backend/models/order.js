const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    fileName: {
      type: String,
      required: true,
    },

    copies: {
      type: Number,
      default: 1,
    },

    color: {
      type: String,
      enum: ["Black & White", "Color"],
      default: "Black & White",
    },

    duplex: {
      type: Boolean,
      default: false,
    },

    paperSize: {
      type: String,
      enum: ["A4", "A3"],
      default: "A4",
    },

    totalPrice: {
      type: Number,
      required: true,
    },

    status: {
      type: String,
      enum: ["Pending", "Printing", "Completed", "Delivered"],
      default: "Pending",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Order", orderSchema);