import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./components/AppRoutes";
import Navbar from "./components/NavBar";
import Footer from "./components/Footer";
import { Toaster } from "@/components/ui/toaster";

function App() {
	return (
		<>
			<Router>
				<div className="flex flex-col min-h-screen">
					<Navbar className="fixed top-0 w-full" />
					<div className="m-auto">
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
