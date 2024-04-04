import axios from "axios";
import Cookies from "js-cookie";
import { REACT_APP_API_URL } from "../constants";

const token = Cookies.get("token");

async function ShowUser() {
  try {
    const response = await axios.get(`${REACT_APP_API_URL}users/show/`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    throw new Error(
      "Échec de la récupération de l'utilisateur : " + error.message
    );
  }
}

async function UpdateUser(userId, userData) {
  try {
    const response = await axios.patch(`${REACT_APP_API_URL}users/${userId}`, {
      user: userData,
    });
    return response.data;
  } catch (error) {
    throw new Error(
      "Échec de la mise à jour de l'utilisateur : " + error.message
    );
  }
  try {
    const response = await axios.patch(
      `${REACT_APP_API_URL}users/${userId}`,
      {
        user: userData,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    throw new Error(
      "Échec de la mise à jour de l'utilisateur : " + error.message
    );
  }
}

async function DeleteUser(userId) {
  try {
    const response = await axios.delete(`${REACT_APP_API_URL}users/${userId}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    return response;
  } catch (error) {
    throw new Error(
      "Échec de la récupération de l'utilisateur : " + error.message
    );
  }
}

export { DeleteUser, ShowUser, UpdateUser };
