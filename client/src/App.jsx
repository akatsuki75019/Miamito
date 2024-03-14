import { Button } from "@/components/ui/button";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./components/AppRoutes";
import Navbar from "./components/NavBar";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Button>Button</Button>
        <AppRoutes />
      </Router>
    </>
  );
}

export default App;
