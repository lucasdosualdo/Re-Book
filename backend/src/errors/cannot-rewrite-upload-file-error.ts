import { ApplicationError } from "../protocols";

export function cannotRewriteUpalodFile(): ApplicationError {
  return {
    name: "CannotRewriteUpalodFile",
    message: "cannot rewrite the given upalod file",
  };
}
