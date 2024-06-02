const express = require("express");
const { AppointmentModel } = require("../Model/AppointmentModel");

const appointmentRouter = express.Router();

appointmentRouter.post("/bookAppointment", async (req, res) => {
  try {
    const newAppointment = AppointmentModel({ ...req.body });
    await newAppointment.save();
    res.status(200).send({ msg: "Appointment Booked Successfully" });
  } catch (error) {
    res.status(400).send({ msg: "Cannot book appointment" });
  }
});

appointmentRouter.get("/bookAppointment/:phoneNumber", async (req, res) => {
  try {
    const newAppointment = AppointmentModel({ ...req.body });
    await newAppointment.save();
    res.status(200).send({ msg: "Appointment Booked Successfully" });
  } catch (error) {
    res.status(400).send({ msg: "Cannot book appointment" });
  }
});

appointmentRouter.patch("/bookAppointment/", async (req, res) => {
  try {
    const newAppointment = AppointmentModel({ ...req.body });
    await newAppointment.save();
    res.status(200).send({ msg: "Appointment Booked Successfully" });
  } catch (error) {
    res.status(400).send({ msg: "Cannot book appointment" });
  }
});

module.exports = {
  appointmentRouter,
};
