import LoginForm from "../components/LoginForm";
function Login() {
	return (
		<>
			<h1>Login</h1>
			<LoginForm />
			<a href="/register">Not registered yet YO ?</a>
			{" | "}
			<a href="/password/reset">Forgot password ?</a>
		</>
	);
}

export default Login;
