import prisma from "../config/database";

import { sessions, Prisma } from "@prisma/client";

async function create(
  data: Prisma.sessionsUncheckedCreateInput
): Promise<sessions> {
  return prisma.sessions.create({
    data,
  });
}

const sessionRepository = {
  create,
};

export default sessionRepository;
