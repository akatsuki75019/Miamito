import axios from "axios";
import { API_URL } from "../constants";

async function FetchAllArticles() {
  try {
    const response = await axios.get(`${API_URL}/articles`);
    return response.data;
  } catch (error) {
    console.error("Failed to fetch articles:", error);
    throw error; // Propager l'erreur pour une gestion plus avancée si nécessaire
  }
}

async function FetchArticle(id) {
  try {
    const response = await axios.get(`${API_URL}/articles/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Failed to fetch article with id ${id}:`, error);
    throw error; // Propager l'erreur pour permettre une gestion d'erreur personnalisée
  }
}

export { FetchAllArticles, FetchArticle };
