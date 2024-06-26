import { Navigate, Route, Routes } from "react-router-dom";
import ArticlesIndex from "../components/articles/ArticlesIndex";
import ArticlePage from "./articles/ArticleShow/ArticlePage";
// import RecipeIndex from "../components/recipes/recipeIndex";
import Contact from "../pages/Contact";
import EditPassword from "../pages/EditPassword";
import Home from "../pages/Home";
import List from "../pages/List";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ResetPassword from "../pages/ResetPassword";
import Team from "../pages/Team";
import Terms from "../pages/Terms";
import MealPlan from "./recipes/MealPlanner/MealPlan";
import RecipeIndex from "./recipes/RecipeIndex";
import RecipeShow from "./recipes/ShowRecipe/RecipeShow";
import SearchResults from "../pages/SearchResults";
import Profile from "../pages/Profile";
import Cookies from "js-cookie";

function PrivateRoute({ children, ...rest }) {
	const authToken = Cookies.get("token");
	return authToken ? children : <Navigate to="/login" />;
}

export default function AppRoutes() {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/register" element={<Register />} />
			<Route path="/login" element={<Login />} />
			<Route path="/password/reset" element={<ResetPassword />} />
			<Route path="/users/password/edit" element={<EditPassword />} />
			<Route path="/articles" element={<ArticlesIndex />} />
			<Route path="/articles/:id" element={<ArticlePage />} />
			<Route path="/recipes" element={<RecipeIndex />} />
			<Route path="/recipes/:id" element={<RecipeShow />} />
			<Route path="/mealplan/:id" element={<RecipeShow />} />
			<Route path="/mealplan" element={<MealPlan />} />
			<Route path="/search" element={<SearchResults />} />
			<Route
				path="/profile"
				element={
					<PrivateRoute>
						<Profile />
					</PrivateRoute>
				}
			/>
			<Route
				path="/list"
				element={
					<PrivateRoute>
						<List />
					</PrivateRoute>
				}
			/>
			<Route path="/team" element={<Team />} />
			<Route path="/contact" element={<Contact />} />
			<Route path="/terms" element={<Terms />} />-{" "}
		</Routes>
	);
}
