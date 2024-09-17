const connect = require("../db/connection");
const roleSeed = require("./roleSeed");
const userSeed = require("./userSeed");

const seed = async () => {
  try {
    await connect;
    roleSeed();
    setTimeout(() => {
      userSeed();
    }, 1500);
  } catch (e) {
    console.error("Error occurred during user seeding:", e);
  }
};

seed();
