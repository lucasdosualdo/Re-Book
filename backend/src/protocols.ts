import { users } from "@prisma/client";

export type ApplicationError = {
  name: string;
  message: string;
};

export type SignInParams = Pick<users, "email" | "password">;

export type CreateUserParams = Pick<users, "email" | "password" | "name"> & {
  repeatPassword?: string;
};
