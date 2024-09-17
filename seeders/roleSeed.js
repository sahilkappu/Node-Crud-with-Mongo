// const mongoose = require('mongoose');
const Role = require("../Models/Role");
// const connect = require('../db/connection');

const roles = [
  { role: "SuperAdmin" },
  { role: "Admin" },
  { role: "SubAdmin" },
  { role: "Company" },
  { role: "Candidate" },
  { role: "CV Builder" },
  { role: "BackGround Checker" },
];

const seedRoles = async () => {
  try {
    //   await connect;
    // Check for existing roles to avoid duplication
    const existingRoles = await Role.find({});
    if (existingRoles.length > 0) {
      console.log("Roles already exist. Skipping seeding.");
      return;
    }

    // Insert roles into the database
    await Role.insertMany(roles);
    console.log("Roles seeded successfully.");
  } catch (e) {
    console.error("Error occurred during role seeding:", e);
  }
};

// seedRoles();
module.exports = seedRoles;

