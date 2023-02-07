import { ApplicationError } from "../protocols";

export function duplicatedDataError(): ApplicationError {
    return {
      name: "DuplicatedEmailError",
      message: "There is already an user with given data",
    };
  }
  