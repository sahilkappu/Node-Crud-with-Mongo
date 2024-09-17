// const mongoose = require('mongoose');
const User = require("../Models/User");
const Role = require("../Models/Role");
// const connect = require("../db/connection");

const getRoleId = async (roleName) => {
  const role = await Role.findOne({ role: roleName });
  if (!role) {
    throw new Error(`Role ${roleName} not found`);
  }
  return role._id;
};

const seedUsers = async () => {
  try {
    // await connect;
    // Check for existing roles to avoid duplication
    const existingusers = await User.find({});
    if (existingusers.length > 0) {
      console.log("User already exist. Skipping seeding.");
      return;
    }

    const superAdminRoleId = await getRoleId("SuperAdmin");
    const adminRoleId = await getRoleId("Admin");

    const users = [
      {
        name: "Sahil Chauhan",
        email: "sahilchauhancs07@gmail.com",
        password: "secret@123",
        role_id: superAdminRoleId,
      },
      {
        name: "Aman Kumar",
        email: "amnankumar@gmail.com",
        password: "secret@123",
        role_id: adminRoleId,
      },
    ];
    // Insert roles into the database
    await User.insertMany(users);
    console.log("Users seeded successfully.");
  } catch (e) {
    console.error("Error occurred during user seeding:", e);
  }
};
// seedUsers();
module.exports = seedUsers;
