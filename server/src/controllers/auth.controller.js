import { createJwt } from "../helpers/createJwt.js";
import { createUser, getUserByCredentials, getUserById } from "../models/user.model.js";

export const signInCtrl = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await getUserByCredentials(email, password);

    if (!user) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const token = await createJwt(user.id);

    res.cookie("token", token, { httpOnly: true });

    return res.status(200).json({ token, user });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const signUpCtrl = async (req, res) => {
  try {
    // ! Completar la función signUpCtrl
    const user = req.body;

    const newUser = await createUser(user);

    const token = await createJwt(user.id);

    res.cookie("token", token, { httpOnly: true });

    return res.status(201).json({ message: "User created", token, user: newUser });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const signOutCtrl = (_req, res) => {
  try {
    // ! Completar la función signOutCtrl
    return res.status(200).json({ message: "Sign out success" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getMeCtrl = (req, res) => {
  try {
    return res.status(200).json(req.user);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
