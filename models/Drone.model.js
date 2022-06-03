// Iteration #1

const { Schema, SchemaTypes, model } = require("mongoose");

const droneSchema = new Schema({
  name: SchemaTypes.String,
  propellers: SchemaTypes.Number,
  maxSpeed: SchemaTypes.Number,
});

const Drone = model("Drone", droneSchema);

module.exports = Drone;
