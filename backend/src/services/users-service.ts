import { duplicatedDataError } from "../errors/duplicated-data-error";
import userRepository from "../repositories/user-repository";
import { CreateUserParams } from "../protocols";
import { v4 as uuid } from "uuid";
import bcrypt from "bcrypt";
import { users } from "@prisma/client";

export async function createUser({ name, email, password }: CreateUserParams) {
  await validateUniqueEmailOrFail(email);

  await checkPasswordExists(password);

  let hashedPassword;
  if (password) {
    hashedPassword = await bcrypt.hash(password, 10);
  } else {
    hashedPassword = uuid();
  }

  return userRepository.create({
    name,
    email,
    password: hashedPassword,
  });
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
