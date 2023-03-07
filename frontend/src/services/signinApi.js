import api from "./api";

export async function postLogin(body) {
  const response = api.post("/auth/sign-in", body);
  return response;
}
