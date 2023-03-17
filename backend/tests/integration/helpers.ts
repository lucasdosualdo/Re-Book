import jwt from "jsonwebtoken";
import prisma from "../../src/config/database";
import { users } from "@prisma/client";
import { createUser } from "../factories/users-factory";
import { createSession } from "../factories/sessions-factory";

export async function cleanDb() {
  await prisma.sessions.deleteMany({});
  await prisma.profile.deleteMany({});
  await prisma.users.deleteMany({});
}

export async function generateValidToken(user?: users) {
  const incomingUser = user || (await createUser());
  const token: string = jwt.sign(
    { userId: incomingUser.id },
    process.env.JWT_SECRET
  );

  await createSession(token);

  return token;
}
