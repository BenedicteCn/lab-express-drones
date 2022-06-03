const express = require("express");
const router = express.Router();
const drones = require("../seeds/drones.seed");

// require the Drone model here
const Drone = require("../models/Drone.model");

router.get("/drones", async (req, res, next) => {
  try {
    const allDrones = await Drone.find();
    res.status(200).json(allDrones);
  } catch (err) {
    // having the error as the argument of next allows us to get into the second middleware
    // from error-handling.js if there is a database error (we don't want a 404 in this case)
    next(err);
  }
});
// Iteration #2: List the drones
// ... your code here

router.post("/drones", async (req, res) => {
  try {
    const createOneDrone = await Drone.create(req.body);
    console.log(createOneDrone.name);
  } catch (e) {
    console.error(e);
  }
  // Iteration #3: Add a new drone
  // ... your code here
  // drones.push(req.body);

  res.status(201).json({
    message: "message received!",
  });
});

router.post("/drones/:id", async (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
  try {
    const updateDrone = await Drone.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json(updateDrone);
  } catch (err) {
    next(err);
  }
});

router.delete("/drones/:id", async (req, res, next) => {
  // Iteration #5: Delete the drone
  // ... your code here
  try {
    const deletedThing = await Drone.findByIdAndDelete(req.params.id);
    console.log(deletedThing);
    res.json({ message: `I deleted ${deletedThing.name}` });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
