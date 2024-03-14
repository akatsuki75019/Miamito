import Cookies from "js-cookie";
import { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { loginSuccess } from "../features/authSlice";
import { LoginFetch } from "../services/authService";

export default function LoginFrom() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const dispatch = useDispatch();
  const test = useSelector((state) => state.auth);
  console.log(test.token);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { token, data } = await LoginFetch(
        formData.email,
        formData.password
      );
      if (token) {
        dispatch(loginSuccess(token)); // Dispatcher l'action avec le token
        localStorage.setItem("token", token);
        Cookies.set("token", token);
        console.log(token);
        window.location.href = "/";
        console.log("You are logged in.", data.message);
      } else {
        console.error("Token is missing from the response.");
      }
    } catch (error) {
      console.error("Failed to login:", error.message);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          autoComplete="email"
        />
        <Form.Text className="text-muted">
          We will never share your email with anyone else!
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          autoComplete="current-password"
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}
