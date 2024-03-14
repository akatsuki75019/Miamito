import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/NavBar";
import AppRoutes from "./components/AppRoutes";
import { Button } from "@/components/ui/button";

function App() {
  return (
    <>
      <Router>
        <Button>Button</Button>
        {/* <Navbar /> */}
        <AppRoutes />
      </Router>
    </>
  );
}

export default App;
