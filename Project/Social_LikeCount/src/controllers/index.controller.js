// import { User } from "../models/user.models.js";
export const indexController = (req, res) => {
  res.render("index");
};

// export const createUser = async (req, res) => {
//   const user = new User(req.body);
//   await user.save();
//   res.redirect("/home");
// };

// export const home = async (req, res) => {
//   const users = await User.find();
//   res.render("home", { users });
// };
