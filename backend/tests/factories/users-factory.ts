import { faker } from "@faker-js/faker";
import prisma from "../../src/config/database";
import { users } from "@prisma/client";
import bcrypt from "bcrypt";

export function generateValidBody() {
  return {
    email: faker.internet.email(),
    password: faker.internet.password(10),
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
