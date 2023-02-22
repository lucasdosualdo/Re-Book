import api from "./api";

export async function getBooks(searchTerm) {
  const response = await api.get(`/search?searchTerm=${searchTerm}`);
  return response;
}
