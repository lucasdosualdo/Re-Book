import api from "./api";

export async function getBooksByTitle(searchTerm, startIndex) {
  const response = await api.get(`/search?searchTerm=${searchTerm}&startIndex=${startIndex}`);
  return response.data;
}

export async function getBooksBySubject(subject, startIndex) {
  const response = await api.get(`/subjects?subject=${subject}&startIndex=${startIndex}`);
  return response.data;
}
