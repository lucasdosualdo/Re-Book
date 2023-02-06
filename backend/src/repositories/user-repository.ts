import { users } from "@prisma/client";
import prisma from "../config/database";

async function findByEmail(email: string): Promise<users> {
  return prisma.users.findFirst({
    where: {
      email,
    },
  });
}

const userRepository = {
  findByEmail,
};

export default userRepository;
