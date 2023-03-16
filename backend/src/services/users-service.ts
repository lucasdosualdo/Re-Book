import { duplicatedDataError } from "../errors/duplicated-data-error";
import { incorrectPasswordError } from "../errors/incorrect-password-error";
import userRepository from "../repositories/user-repository";
import { CreateUserParams } from "../protocols";
import { v4 as uuid } from "uuid";
import bcrypt from "bcrypt";
import { profile, users } from "@prisma/client";
import profileRepository from "../repositories/profile-repository";

export async function createUser({
  name,
  email,
  password,
  repeatPassword,
}: CreateUserParams) {
  if (password !== repeatPassword) throw incorrectPasswordError();
  await validateUniqueEmailOrFail(email);

  await checkPasswordExists(password);

  const hashedPassword = await bcrypt.hash(password, 10);

  const user: users = await userRepository.create({
    name,
    email,
    password: hashedPassword,
  });

  await profileRepository.createProfile(user.id);
  return user;
}

async function checkPasswordExists(password: string) {
  const users = await userRepository.findMany();
  const existsPassword = users.some((user) =>
    bcrypt.compareSync(password, user.password)
  );
  if (existsPassword) throw duplicatedDataError();
}

async function validateUniqueEmailOrFail(email: string) {
  const userWithSameEmail = await userRepository.findByEmail(email);
  if (userWithSameEmail) {
    throw duplicatedDataError();
  }
}

const userService = {
  createUser,
};

export default userService;
