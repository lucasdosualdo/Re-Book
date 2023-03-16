import { ApplicationError } from "../protocols";

export function cannotFoundProfile(): ApplicationError {
  return {
    name: "CannotFoundProfile",
    message: "failed to get profile for the given user. Please verify your signup",
  };
}
