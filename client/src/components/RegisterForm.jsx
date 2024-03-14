import { useState } from "react";

import { RegisterFetch } from "../services/authService";

function RegisterForm() {
  const [formData, setFormData] = useState({
    user: {
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      user: {
        ...prevState.user,
        [name]: value,
      },
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.user.password !== formData.user.confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    try {
      const data = await RegisterFetch(
        formData.user.email,
        formData.user.password
      );
      console.log(data);
      window.location.href = "/";
    } catch (error) {
      alert("Failed to register: " + error.message);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          name="email"
          value={formData.user.email}
          onChange={handleChange}
          placeholder="Enter email"
        />
        <Form.Text className="text-muted">
          We will never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          name="password"
          value={formData.user.password}
          onChange={handleChange}
          placeholder="Password"
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
        <Form.Label>Confirm Password</Form.Label>
        <Form.Control
          type="password"
          name="confirmPassword"
          value={formData.user.confirmPassword}
          onChange={handleChange}
          placeholder="Confirm Password"
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default RegisterForm;
