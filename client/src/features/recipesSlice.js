import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getMealPlan, getRecipeInformations } from "../services/recipeService";

export const fetchMeals = createAsyncThunk("recipes/fetchMeals", async () => {
	try {
		// Tentative de récupérer les repas du localStorage
		const localMeals = localStorage.getItem("meals");
		if (localMeals) {
			return JSON.parse(localMeals);
		}

		// Récupération des repas à partir de votre backend
		const response = await getMealPlan(); // Assurez-vous que cette fonction fait maintenant appel à votre backend

		const meals = response; // Supposition que `response` est déjà le tableau des repas
		localStorage.setItem("meals", JSON.stringify(meals));

		return meals;
	} catch (error) {
		console.error("Failed to fetch meals:", error);
		throw error; // Propager l'erreur pour permettre la gestion d'erreur dans Redux Toolkit
	}
});

export const fetchInformation = createAsyncThunk(
	"recipes/fetchInformation",
	async (recipeId, { dispatch, getState }) => {
		const info = await getRecipeInformations(recipeId);
		localStorage.setItem(`recipeInfo-${recipeId}`, JSON.stringify(info));
		return { recipeId, info };
	}
);

const recipesReducer = createSlice({
	name: "recipes",
	initialState: {
		weekMeals: [],
		status: "idle",
		error: null,
		recipeInformation: {},
		info: null,
	},
	reducers: {
		// reset() {
		//   return {
		//     weekMeals: null,
		//     status: "idle",
		//     error: null,
		//     recipeInformation: null,
		//   };
		// },
	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchMeals.pending, (state) => {
				state.status = "loading";
			})
			.addCase(fetchMeals.fulfilled, (state, action) => {
				state.status = "succeeded";
				state.weekMeals = action.payload;
			})
			.addCase(fetchMeals.rejected, (state, action) => {
				state.status = "failed";
				state.error = action.error.message;
			});
		builder
			.addCase(fetchInformation.pending, (state) => {
				state.status = "loading";
			})
			.addCase(fetchInformation.fulfilled, (state, action) => {
				state.status = "succeeded";
				state.recipeInformation[action.payload.recipeId] = action.payload.info;
			})
			.addCase(fetchInformation.rejected, (state, action) => {
				state.status = "failed";
				state.error = action.error.message;
			});
	},
});

export const { setWeekMeals } = recipesReducer.actions;

export default recipesReducer.reducer;
