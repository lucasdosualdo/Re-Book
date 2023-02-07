import { ApplicationError } from "../protocols";

export function duplicatedDataError(): ApplicationError {
    return {
      name: "DuplicatedDataError",
      message: "There is already an user with given data",
    };
  }
  