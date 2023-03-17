import app from "../../src/app";
import supertest from "supertest";
import httpStatus from "http-status";
import { faker } from "@faker-js/faker";
import { cleanDb, generateValidToken } from "./helpers";
import {
  generateValidSignInBody,
  createUser,
  createProfile,
} from "../factories/users-factory";

beforeAll(async () => {
  await cleanDb();
});

const server = supertest(app);

describe("POST /auth/sign-in", () => {
  it("should respond with status 400 when body is not given", async () => {
    const response = await server.post("/auth/sign-in");

    expect(response.status).toBe(httpStatus.BAD_REQUEST);
  });

  it("should respond with status 400 when body is not valid", async () => {
    const invalidBody = { [faker.lorem.word()]: faker.lorem.word() };

    const response = await server.post("/auth/sign-in").send(invalidBody);

    expect(response.status).toBe(httpStatus.BAD_REQUEST);
  });

  describe("when body is valid", () => {
    it("should respond with status 401 if there is no user for given email", async () => {
      const body = generateValidSignInBody();

      const response = await server.post("/auth/sign-in").send(body);

      expect(response.status).toBe(httpStatus.UNAUTHORIZED);
    });

    it("should respond with status 401 if there is a user for given email but password is not correct", async () => {
      const body = generateValidSignInBody();

      await createUser(body);

      const response = await server.post("/auth/sign-in").send({
        ...body,
        password: faker.lorem.word(),
      });

      expect(response.status).toBe(httpStatus.UNAUTHORIZED);
    });

    describe("when credentials are valid", () => {
      it("should respond with status 200", async () => {
        const body = generateValidSignInBody();
        const user = await createUser(body);
        await createProfile(user.id);
        const response = await server.post("/auth/sign-in").send(body);

        expect(response.status).toBe(httpStatus.OK);
      });

      it("should respond with user data", async () => {
        const body = generateValidSignInBody();
        const user = await createUser(body);
        await createProfile(user.id);
        const response = await server.post("/auth/sign-in").send(body);
        const bodyResponse = {
          id: response.body.user.id,
          email: response.body.user.email,
        };

        expect(bodyResponse).toEqual({
          id: user.id,
          email: user.email,
        });
      });

      it("should respond with session token", async () => {
        const body = generateValidSignInBody();
        const user = await createUser(body);
        await createProfile(user.id);
        const response = await server.post("/auth/sign-in").send(body);

        expect(response.body.token).toBeDefined();
      });
    });
  });
});
