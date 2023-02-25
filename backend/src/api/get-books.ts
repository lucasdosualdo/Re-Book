import axios from "axios";
import { SubjectParams } from "../protocols";

const API_KEY = process.env.GOOGLE_API_KEY;
const GOOGLE_URL = "https://www.googleapis.com/books/v1/volumes?q=";

export async function getBooksByTitle(searchTerm: string) {
  return axios.get(
    `${GOOGLE_URL}intitle:${searchTerm}&maxResults=15&langRestrict=pt-BR&key=${API_KEY}`
  );
}

export async function getBooksBySubject(searchTerm: SubjectParams) {
  return axios.get(
    `${GOOGLE_URL}subjects:${searchTerm}&maxResults=40&key=${API_KEY}`
  );
}

export async function getCover(url: string) {
  return axios.get(url);
}
