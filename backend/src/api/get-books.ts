import axios from "axios";
import { SubjectParams } from "../protocols";

const API_KEY = process.env.GOOGLE_API_KEY;
const GOOGLE_URL = "https://www.googleapis.com/books/v1/volumes";

export async function getBooksByTitle(searchTerm: string, startIndex: string) {
  return axios.get(
    `${GOOGLE_URL}?q=intitle:${searchTerm}&maxResults=24&startIndex=${startIndex}&langRestrict=pt-BR&key=${API_KEY}`
  );
}

export async function getBooksBySubject(
  searchTerm: SubjectParams,
  startIndex: string
) {
  return axios.get(
    `${GOOGLE_URL}?q=subjects:${searchTerm}&maxResults=40&orderBy=relevance&startIndex=${startIndex}&key=${API_KEY}`
  );
}

export async function getBookById(bookId: string) {
  const book = await axios.get(`${GOOGLE_URL}/${bookId}`);
  return book;
}

export async function getCover(url: string) {
  return axios.get(url);
}
