// Iteration #1
const Drone = require("../models/Drone.model.js");
require("../db");
const { default: mongoose } = require("mongoose");

const drones = [
  { name: "Creeper XL 500", propellers: 3, maxSpeed: 12 },
  { name: "Racer 57", propellers: 4, maxSpeed: 20 },
  { name: "Courier 3000i", propellers: 6, maxSpeed: 18 },
];

async function seedDrones() {
  await Drone.deleteMany();
  const createdDrones = await Drone.create(drones);
  console.log(`Created ${createdDrones.length} drones.`);
  // await mongoose.connection.close();
  // console.log("Connection closed.");
}

seedDrones();
