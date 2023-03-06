import prisma from "../config/database";

import { sessions, Prisma } from "@prisma/client";

async function create(
  data: Prisma.sessionsUncheckedCreateInput
): Promise<sessions> {
  try {
    const session = await prisma.sessions.create({
      data,
    });
    return session;
  } catch (error) {
    console.log(error);
  }
}

async function update(userId: number) {
  await prisma.sessions.updateMany({
    where: { userId },
    data: {
      valid: false,
    },
  });
}

const sessionRepository = {
  create,
  update,
};

export default sessionRepository;
