import { Toaster } from "@/components/ui/toaster";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./components/AppRoutes";
import Footer from "./components/Footer";
import Navbar from "./components/nav/NavBar";

function App() {
	return (
		<>
			<Router>
				<div className="flex flex-col min-h-screen">
					<Navbar className="fixed top-0 w-full" />
					<div className="flex-grow">
						<AppRoutes />
					</div>
					<Footer />
				</div>
				<Toaster />
			</Router>
		</>
	);
}

export default App;
