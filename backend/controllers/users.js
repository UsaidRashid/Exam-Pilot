const User = require("../models/users");
const jwt = require("jsonwebtoken");

module.exports.signUp = async (req, res) => {
  console.log(req.body);
  let { name, email, password, contact, username, type } = req.body;

  console.log(req.body);

  if (!name || !email || !contact || !password || !username || !type) {
    return res.status(400).json({ message: "Please fill in all fields" });
  }

  const existingUser = await User.findOne({ email: email.toLowerCase() });

  if (existingUser) {
    return res.status(400).json({ message: "Email already in use" });
  }

  const existingUsername = await User.findOne({
    username: username.toLowerCase(),
  });

  if (existingUsername) {
    return res.status(400).json({ message: "Username already in use" });
  }

  try {
    const newUser = new User({
      username,
      email,
      contact,
      name,
      type,
    });

    const registeredUser = await User.register(newUser, req.body.password);

    req.login(registeredUser, (err) => {
      if (err) {
        console.log(err);
        return res.status(400).json({ message: "Error saving the user" });
      } else {
        const token = jwt.sign({ user: registeredUser }, "jwt-secret", {
          algorithm: "HS256",
        });
        return res
          .status(200)
          .json({ message: "User created successfully", token });
      }
    });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ message: "Error registering user" });
  }
};

module.exports.login = async (req, res) => {
  const user = await User.findOne({ username: req.body.username });
  const token = jwt.sign({ user }, "jwt-secret", { algorithm: "HS256" });
  return res.status(200).json({ message: "Login successful!", token });
};

module.exports.logout = (req, res) => {
  req.logout((err) => {
    if (err) {
      console.error(err);
      return res.status(400).json({ message: "Error logging out" });
    }
    res.status(200).json({ message: "Logged out successfully" });
  });
};
