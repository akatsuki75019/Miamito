import { getMealPlan } from "@/services/recipeService";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchMeals = createAsyncThunk("recipes/fetchMeals", async () => {
  const response = await getMealPlan();
  return response.week; // Ajustez selon le format de votre réponse
});

export const recipesReducer = createSlice({
  name: "recipes",
  initialState: {
    weekMeals: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchMeals.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchMeals.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.weekMeals = Object.values(action.payload).map(
          (day) => day.meals[day.meals.length - 5]
        );
      })
      .addCase(fetchMeals.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default recipesReducer.reducer;
