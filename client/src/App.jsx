import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./components/AppRoutes";
import Navbar from "./components/NavBar";
import { Toaster } from "@/components/ui/toaster";

function App() {
	return (
		<>
			<Router>
				<Navbar />
				<AppRoutes />
				<Toaster />
			</Router>
		</>
	);
}

export default App;
