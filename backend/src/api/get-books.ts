import axios from "axios";
import httpStatus from "http-status";

const API_KEY = process.env.GOOGLE_API_KEY;
const BASE_URL = "https://www.googleapis.com/books/v1/volumes?q=";

export async function getBooks(searchTerm: string) {
  return axios.get(
    `${BASE_URL}intitle:${searchTerm}&langRestrict=pt-BR&maxResults=40&key=${API_KEY}`
  );
}
