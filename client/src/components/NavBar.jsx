import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import LogOutButton from "./LogOutButton";

function NavBar() {
  const token = useSelector((state) => state.auth.token);

  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand as={Link} to="/">
        Home
      </Navbar.Brand>
      <Nav className="ml-auto">
        {token ? (
          <LogOutButton />
        ) : (
          <>
            <Nav.Link as={Link} to="/login">
              Sign in
            </Nav.Link>
            <Nav.Link as={Link} to="/register">
              Sign up
            </Nav.Link>
          </>
        )}
      </Nav>
    </Navbar>
  );
}

export default NavBar;
