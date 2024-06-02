const mongoose = require("mongoose");

const appointmentSchema = mongoose.Schema(
  {
    name: String,
    phoneNo: Number,
    age: Number,
    language: String,
    date: String,
    time: String,
    medium: String
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const AppointmentModel = mongoose.model("appointment", appointmentSchema);

module.exports = {
  AppointmentModel,
};
