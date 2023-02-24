import api from "./api";

export async function getBooksByTitle(searchTerm) {
  const response = await api.get(`/search?searchTerm=${searchTerm}`);
  return response.data;
}

export async function getBooksBySubject(subject) {
  const response = await api.get(`/subjects?subject=${subject}`);
  return response.data;
}
