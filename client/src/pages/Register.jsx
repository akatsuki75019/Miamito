
import RegisterForm from '../components/RegisterForm';

function Register() {
  return (
    <>
      <h1>Register</h1>
      <RegisterForm />
      <a href="/login">Already registered ?</a>
      {" | "}
      <a href="/">Back to home</a>
    </>
  );
}

export default Register;
