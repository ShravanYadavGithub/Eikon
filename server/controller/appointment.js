const fs = require("fs");
const model = require('../Models/appointment');
const mongoose = require('mongoose');
const Appointment = model.appointment;

exports.createAppointment =  async (req, res) => {
  try {
    
    const appointmentData = req.body;
    const newAppointment = new Appointment(appointmentData);
    await newAppointment.save();
    res.json({ success: true, message: 'Appointment created successfully' });
  } catch (error) {
    console.error('Error creating appointment:', error);
    res.status(500).json({ success: false, error: 'Failed to create appointment' });
  }
};


exports.getAllAppointments = async (req, res) => {
  try {
    const appointments = await Appointment.find();
    res.json(appointments);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to fetch appointments' });
  }
};

exports.getAppointment = async (req, res) => {
  const id = req.params.id;
  try {
    const appointment = await Appointment.findById(id);
    if (!appointment) {
      return res.status(404).json({ error: 'Appointment not found' });
    }
    res.json(appointment);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to fetch appointment' });
  }
};

exports.replaceAppointment = async (req, res) => {
  const id = req.params.id;
  try {
    const doc = await Appointment.findOneAndReplace({ _id: id }, req.body, { new: true });
    if (!doc) {
      return res.status(404).json({ error: 'Appointment not found' });
    }
    res.status(201).json(doc);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to replace appointment' });
  }
};

exports.updateAppointment = async (req, res) => {
  const id = req.params.id;
  try {
    const doc = await Appointment.findOneAndUpdate({ _id: id }, req.body, { new: true });
    if (!doc) {
      return res.status(404).json({ error: 'Appointment not found' });
    }
    res.status(201).json(doc);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to update appointment' });
  }
};

exports.deleteAppointment = async (req, res) => {
  const id = req.params.id;
  try {
    const doc = await Appointment.findOneAndDelete({ _id: id });
    if (!doc) {
      return res.status(404).json({ error: 'Appointment not found' });
    }
    res.status(204).send(); // No content in response for successful deletion
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to delete appointment' });
  }
};
