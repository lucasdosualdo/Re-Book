import axios from "axios";

const API_KEY = process.env.GOOGLE_API_KEY;
const GOOGLE_URL = "https://www.googleapis.com/books/v1/volumes?q=";

export async function getBooks(searchTerm: string) {
  return axios.get(
    `${GOOGLE_URL}intitle:${searchTerm}&maxResults=30&langRestrict=pt-BR&key=${API_KEY}`
  );
}

export async function getCover(url: string) {
  return axios.get(url);
}
