import app from "../../src/app";
import supertest from "supertest";
import httpStatus from "http-status";
import { faker } from "@faker-js/faker";
import { cleanDb, generateValidToken } from "./helpers";
import {
  generateValidSignUpBody,
  createUser,
} from "../factories/users-factory";
import { duplicatedDataError } from "../../src/errors/duplicated-data-error";
import prisma from "../../src/config/database";

beforeAll(async () => {
  await cleanDb();
});

const server = supertest(app);

describe("POST /users", () => {
  it("should respond with status 400 when body is not given", async () => {
    const response = await server.post("/users");

    expect(response.status).toBe(httpStatus.BAD_REQUEST);
  });

  it("should respond with status 400 when body is not valid", async () => {
    const invalidBody = { [faker.lorem.word()]: faker.lorem.word() };

    const response = await server.post("/users").send(invalidBody);

    expect(response.status).toBe(httpStatus.BAD_REQUEST);
  });

  describe("when body is valid", () => {
    it("should respond with status 400 when there are passwords input fields with different values", async () => {
      let body = generateValidSignUpBody();
      body = { ...body, repeatPassword: faker.internet.password(12) };

      const response = await server.post("/users").send(body);

      expect(response.status).toBe(httpStatus.BAD_REQUEST);
    });

    it("should respond with status 409 when there is an user with given email", async () => {
      const body = generateValidSignUpBody();
      await createUser(body);

      const response = await server.post("/users").send(body);

      expect(response.status).toBe(httpStatus.CONFLICT);
      expect(response.body).toEqual(duplicatedDataError());
    });

    it("should respond with status 201 and create user when given email is unique", async () => {
      const body = generateValidSignUpBody();

      const response = await server.post("/users").send(body);

      expect(response.status).toBe(httpStatus.CREATED);
      expect(response.body).toEqual({
        id: expect.any(Number),
        email: body.email,
        name: body.name,
      });
    });

    it("should not return user password on body", async () => {
      const body = generateValidSignUpBody();

      const response = await server.post("/users").send(body);

      expect(response.body).not.toHaveProperty("password");
    });

    it("should save user on db", async () => {
      const body = generateValidSignUpBody();

      const response = await server.post("/users").send(body);

      const user = await prisma.users.findUnique({
        where: { email: body.email },
      });
      expect(user).toEqual(
        expect.objectContaining({
          id: response.body.id,
          email: response.body.email,
        })
      );
    });
  });
});
