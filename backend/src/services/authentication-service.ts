import { users } from "@prisma/client";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { SignInParams } from "../protocols";
import { invalidCredentialsError } from "../errors/invalid-credentials-error";
import userRepository from "../repositories/user-repository";
import sessionRepository from "../repositories/session-repository";
import { exclude } from "../utils/prisma-utils";

async function signIn(params: SignInParams): Promise<SignInResult> {
  const { email, password } = params;

  const user = await getUserOrFail(email);

  if (password) {
    await validatePasswordOrFail(password, user.password);
  }

  const token = await createSession(user.id);

  return {
    user: exclude(user, "password"),
    token,
  };
}

async function getUserOrFail(email: string): Promise<GetUserOrFailResult> {
  const user = await userRepository.findByEmail(email);
  if (!user) throw invalidCredentialsError();

  return user;
}

async function validatePasswordOrFail(password: string, userPassword: string) {
  const isPasswordValid = await bcrypt.compare(password, userPassword);
  if (!isPasswordValid) throw invalidCredentialsError();
}

async function createSession(userId: number) {
  const token: string = jwt.sign(userId, process.env.JWT_SECRET);
  await sessionRepository.create({
    token,
    userId,
  });

  return token;
}

type GetUserOrFailResult = Pick<users, "id" | "email" | "password">;
type SignInResult = {
  user: Pick<users, "id" | "email">;
  token: string;
};

const authenticationService = {
  signIn,
};

export default authenticationService;
