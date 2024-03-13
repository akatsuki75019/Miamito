import axios from "axios";
import { API_URL } from "../constants";

async function RegisterFetch(email, password) {
  try {
    const response = await axios.post(API_URL, {
      user: {
        email: email,
        password: password,
      },
    });

    const data = response.data;

    return data;
  } catch (error) {
    throw new Error("Failed to register: " + error.message);
  }
}

async function LoginFetch(email, password) {
  try {
    const response = await axios.post(`${API_URL}/sign_in`, {
      user: {
        email: email,
        password: password,
      },
    });
    console.log("Full response:", response);
    const token = response.headers.authorization.split(" ")[1];
    return { token: token, data: response.data } || response;
  } catch (error) {
    throw new Error("Failed to login: " + error.message);
  }
}

async function logoutFetch() {
  try {
    const response = await axios.delete(`${API_URL}/sign_out`);
    return response.data;
  } catch (error) {
    throw new Error("Failed to log out: " + error.message);
  }
}

async function EditPasswordFetch(
  resetPasswordToken,
  newPassword,
  password_confirmation
) {
  try {
    const response = await axios.patch(`${API_URL}/password`, {
      user: {
        reset_password_token: resetPasswordToken,
        password: newPassword,
        password_confirmation: password_confirmation,
      },
    });
    return response.data;
  } catch (error) {
    throw new Error("Failed to edit password: " + error.message);
  }
}

async function ResetPasswordFetch(email) {
  try {
    const response = await axios.post(`${API_URL}/password`, {
      user: {
        email: email,
      },
    });
    return response.data;
  } catch (error) {
    throw new Error("Failed to reset password: " + error.message);
  }
}
export {
  EditPasswordFetch,
  LoginFetch,
  RegisterFetch,
  ResetPasswordFetch,
  logoutFetch,
};
