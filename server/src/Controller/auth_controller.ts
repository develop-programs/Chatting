import { Auth } from "../models/auth.model";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { v4 as uuidv4 } from "uuid";

/**
 * Asynchronous function for user login.
 *
 * @param {any} req - request object
 * @param {any} res - response object
 * @return {Promise<void>} Promise that resolves to the login response
 */
export async function login(req: any, res: any) {
  const { email, password } = req.body;
  try {
    const user = await Auth.findOne({ email });
    const match = bcrypt.compareSync(password, user.password);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    if (match === false) {
      return res.status(401).json({ message: "Invalid password" });
    }
    if (match === true) {
      await Auth.findOneAndUpdate(
        { email: email },
        { online: true },
        { new: true }
      );
      const token = jwt.sign(
        { email: email, password: password },
        `${process.env.JWT_SECRET}`,
        {
          algorithm: "HS256",
        }
      );
      return res.status(200).json({
        message: "Login successful",
        token: token,
      });
    }
  } catch (error: any) {
    return res.send(error.message);
  }
}

/**
 * Function to create a new user in the database based on the request body.
 *
 * @param {any} req - the request object containing user data
 * @param {any} res - the response object to send back the result
 * @return {Promise<void>} a Promise that resolves when the user is successfully created
 */
export async function CreateUser(req: any, res: any) {
  const body = req.body;
  try {
    const find = await Auth.findOne({ email: body.email });
    if (find) {
      return res.status(200).json({ message: "User already exists" });
    } else {
      const salt = bcrypt.genSaltSync(10);
      const hash = bcrypt.hashSync(body.password, salt);
      const model = {
        uuid: uuidv4(),
        name: body.name,
        email: body.email,
        password: hash,
        address: body.address,
        phone: body.phone,
        image: body.image,
      };
      const user = await Auth.create(model);
      return res.status(200).json(user);
    }
  } catch (error: any) {
    return res.send(error.message);
  }
}

/**
 * Update user information if password matches and new password is confirmed.
 *
 * @param {any} req - request object containing user information
 * @param {any} res - response object to send back user information or error message
 * @return {Promise<any>} JSON response with updated user information or error message
 */
export async function UpdateUser(req: any, res: any) {
  const { email, password, newPassword, confirmPassword } = req.body;
  try {
    const find = await Auth.findOne({ email: email });
    if (find) {
      const match = bcrypt.compareSync(password, find.password);
      if (match) {
        if (newPassword === confirmPassword) {
          const salt = bcrypt.genSaltSync(10);
          const hash = bcrypt.hashSync(newPassword, salt);
          const model = {
            name: req.body.name,
            email: req.body.email,
            password: hash,
            address: req.body.address,
            phone: req.body.phone,
            image: req.body.image,
          };
          const user = await Auth.findOneAndUpdate({ email: email }, model, {
            new: true,
          });
          return res.status(200).json(user);
        } else {
          return res.status(400).json({ message: "Password does not match" });
        }
      }
    }
  } catch (error: any) {
    return res.send(error.message);
  }
}

/**
 * Asynchronous function to delete a user.
 *
 * @param {any} req - request object
 * @param {any} res - response object
 * @return {Promise<void>} Promise that resolves with the deleted user or rejects with an error message
 */
export async function DeleteUser(req: any, res: any) {
  const { email, password } = req.body;
  try {
    const find = await Auth.findOne({ email: email });
    if (find) {
      const match = bcrypt.compareSync(password, find.password);
      if (match) {
        const user = await Auth.findOneAndDelete({ email: email });
        return res.status(200).json(user);
      }
    }
  } catch (error: any) {
    return res.send(error.message);
  }
}
