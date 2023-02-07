import { users, Prisma } from "@prisma/client";
import prisma from "../config/database";

async function findByEmail(email: string): Promise<users> {
  return prisma.users.findFirst({
    where: {
      email,
    },
  });
}

async function findMany(): Promise<users[]> {
  return prisma.users.findMany();
}

async function create(data: Prisma.usersUncheckedCreateInput) {
  return prisma.users.create({
    data,
  });
}

const userRepository = {
  findByEmail,
  create,
  findMany,
};

export default userRepository;
