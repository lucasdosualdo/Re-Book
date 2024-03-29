import { faker } from "@faker-js/faker";
import prisma from "../../src/config/database";
import { users, profile } from "@prisma/client";
import bcrypt from "bcrypt";

export function generateValidSignInBody() {
  return {
    email: faker.internet.email(),
    password: faker.internet.password(10),
  };
}

export function generateValidSignUpBody() {
  const password = faker.internet.password(10);
  return {
    name: faker.lorem.word(10),
    email: faker.internet.email(),
    password,
    repeatPassword: password,
  };
}

export async function createUser(params: Partial<users> = {}): Promise<users> {
  const incomingPassword = params.password || faker.internet.password(10);
  const hashedPassword = await bcrypt.hash(incomingPassword, 10);

  return prisma.users.create({
    data: {
      name: faker.lorem.word(10),
      email: params.email || faker.internet.email(),
      password: hashedPassword,
    },
  });
}

export async function createProfile(userId: number): Promise<profile> {
  return prisma.profile.create({
    data: {
      userId,
    },
  });
}
