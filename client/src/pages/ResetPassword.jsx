import { useState } from "react";
import { ResetPasswordFetch } from "../services/authService";

function ResetPasswordForm() {
  const [email, setEmail] = useState("");

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await ResetPasswordFetch(email);
      console.log(response.data);
    } catch (error) {
      console.error("Failed to reset password:", error.message);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={handleChange}
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Reset Password
      </Button>
    </Form>
  );
}

export default ResetPasswordForm;
