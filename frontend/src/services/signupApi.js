import api from "./api";

export async function postSignup(body) {
  const response = api.post("/users", body);
  return response;
}
