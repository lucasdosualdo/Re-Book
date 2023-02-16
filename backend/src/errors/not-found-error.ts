import { ApplicationError } from "../protocols";

export function notFoundError(): ApplicationError {
  return {
    name: "NotFoundError",
    message: "cannot find datas by the search term",
  };
}
