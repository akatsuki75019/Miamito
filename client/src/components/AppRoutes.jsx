import { Route, Routes } from "react-router-dom";
import ArticlePage from "../components/articles/ArticlePage";
import ArticlesIndex from "../components/articles/ArticlesIndex";
// import RecipeIndex from "../components/recipes/recipeIndex";
import EditPassword from "../pages/EditPassword";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ResetPassword from "../pages/ResetPassword";
import MealPlan from "./recipes/MealPlan";
import RecipeIndex from "./recipes/recipeIndex";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/password/reset" element={<ResetPassword />} />
      <Route path="/users/password/edit" element={<EditPassword />} />
      <Route path="/articles" element={<ArticlesIndex />} />
      <Route path="/articles/:id" element={<ArticlePage />} />
      {/* <Route path="/recipes" element={<RecipeIndex />} /> */}
      <Route path="/recipes/:id" element={<RecipeIndex />} />
      <Route path="/recipes" element={<MealPlan />} />
    </Routes>
  );
}
export default AppRoutes;
