import { Toaster } from "@/components/ui/toaster";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./components/AppRoutes";
import Footer from "./components/Footer";
import Navbar from "./components/nav/NavBar";
import SearchBar from "./components/search/SearchBar";

function App() {
  return (
    <>
      <Router>
        <div className="flex flex-col min-h-screen">
          <Navbar className="fixed top-0 w-full" />
          <SearchBar />
          <div className="flex-grow">
            <AppRoutes />
          </div>
          <Footer className="fixed bottom-0 w-full" />
        </div>
        <Toaster />
      </Router>
    </>
  );
}

export default App;
