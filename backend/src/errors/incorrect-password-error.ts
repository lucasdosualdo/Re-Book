import { ApplicationError } from "../protocols";

export function incorrectPasswordError(): ApplicationError {
  return {
    name: "IncorrectPasswordError",
    message: "the password input fields are incorrect",
  };
}
