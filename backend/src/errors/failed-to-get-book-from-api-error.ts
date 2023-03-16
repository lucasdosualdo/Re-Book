import { ApplicationError } from "../protocols";

export function failedToGetBookFromApi(message): ApplicationError {
  return {
    name: "FailedToGetBookFromApi",
    message,
  };
}
