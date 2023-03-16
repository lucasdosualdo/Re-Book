import { users, Prisma, profile } from "@prisma/client";
import prisma from "../config/database";

async function createProfile(userId: number): Promise<void> {
  await prisma.profile.create({
    data: { userId },
  });
}

async function getProfile(userId: number): Promise<profile> {
  return prisma.profile.findUnique({
    where: {
      userId,
    },
  });
}

const profileRepository = {
  createProfile,
  getProfile
};

export default profileRepository;
