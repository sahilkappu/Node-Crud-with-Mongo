const user = require("../Models/User");
const createUser = async (req, res) => {
  try {
    // console.log(user);
    const body = req.body;
    const users = await new user(body).save();
    return res
      .status(201)
      .json({ message: "User Document Created Successfully"  , data:users});
  } catch (e) {
    console.log("Error is : ", e);
  }
};

module.exports = createUser;
