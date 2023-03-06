import { Request, Response } from "express";
import httpStatus from "http-status";
import userService from "../services/users-service";

export async function usersPost(req: Request, res: Response) {
  const { name, email, password, repeatPassword } = req.body;
  try {
    const user = await userService.createUser({
      name,
      email,
      password,
      repeatPassword,
    });
    return res.status(httpStatus.CREATED).json({
      id: user.id,
      email: user.email,
      name: user.name,
    });
  } catch (error) {
    if (error.name === "DuplicatedDataError") {
      return res.status(httpStatus.CONFLICT).send(error);
    }
    if (error.name === "IncorrectPasswordError") {
      return res.status(httpStatus.UNPROCESSABLE_ENTITY).send(error);
    }
    return res.status(httpStatus.BAD_REQUEST).send(error);
  }
}
