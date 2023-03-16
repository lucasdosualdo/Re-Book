import { profile, users } from "@prisma/client";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { SignInParams } from "../protocols";
import { invalidCredentialsError } from "../errors/invalid-credentials-error";
import { cannotCreateSessionError } from "../errors/cannot-create-session-error";
import userRepository from "../repositories/user-repository";
import sessionRepository from "../repositories/session-repository";
import { exclude } from "../utils/prisma-utils";
import profileRepository from "../repositories/profile-repository";
import { cannotFoundProfile } from "../errors/cannot-found-profile";

async function signIn(params: SignInParams): Promise<SignInResult> {
  const { email, password } = params;

  const user: users = await getUserOrFail(email);
  if (password) {
    await validatePasswordOrFail(password, user.password);
  }
  const profile: profile = await getProfileOrFail(user.id);
  const token = await createSession(user.id);

  return {
    user: exclude(user, "password", "createdAt", "updatedAt"),
    profile: exclude(profile, "userId", "createdAt", "updatedAt"),
    token,
  };
}

async function getUserOrFail(email: string): Promise<users> {
  const user = await userRepository.findByEmail(email);

  if (!user) throw invalidCredentialsError();

  return user;
}

async function getProfileOrFail(userId: number): Promise<profile> {
  const profile: profile = await profileRepository.getProfile(userId);
  if (!profile) throw cannotFoundProfile();
  return profile;
}

async function validatePasswordOrFail(
  password: string,
  userPassword: string
): Promise<void> {
  const isPasswordValid: boolean = await bcrypt.compare(password, userPassword);

  if (!isPasswordValid) {
    throw invalidCredentialsError();
  }
}

async function createSession(userId: number) {
  const token: string = jwt.sign({ userId }, process.env.JWT_SECRET);
  await updateToken(userId);
  const session = await sessionRepository.create({
    token,
    userId,
  });

  if (!session) throw cannotCreateSessionError();

  return token;
}

async function updateToken(userId: number): Promise<void> {
  await sessionRepository.update(userId);
}

//type GetUserOrFailResult = Pick<users, "id" | "email" | "password">;
type SignInResult = {
  user: Pick<users, "id" | "email">;
  profile: Pick<profile, "id" | "picture">;
  token: string;
};

const authenticationService = {
  signIn,
};

export default authenticationService;
