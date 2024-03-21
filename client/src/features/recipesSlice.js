import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  getMealPlan,
  getRecipeInformations,
  getRecipeSummary,
} from "../services/recipeService";

export const fetchMeals = createAsyncThunk("recipes/fetchMeals", async () => {
  try {
    const localMeals = localStorage.getItem("meals");
    if (localMeals) {
      return JSON.parse(localMeals);
    }
    const response = await getMealPlan();
    console.log(response);
    const meals = Object.entries(response.week).reduce((acc, val) => {
      const preparation = {
        ...val[1].meals[2],
        readyInMinutes: val[1].meals[2].readyInMinutes,
      };
      acc.push(preparation);
      return acc;
    }, []);
    localStorage.setItem("meals", JSON.stringify(meals));
    return meals;
  } catch (error) {
    console.error("Failed to fetch recipes:", error);
  }
});

export const fetchInformation = createAsyncThunk(
  "recipes/fetchInformation",
  async (recipeId) => {
    const response = await getRecipeInformations(recipeId);
    return {
      recipeId,
      cookingMinutes: response.cookingMinutes,
      preparationMinutes: response.preparationMinutes,
      title: response.title,
    };
  }
);

export const fetchSummary = createAsyncThunk(
  "recipes/fetchSummary",
  async (recipeId) => {
    const response = await getRecipeSummary(recipeId);
    return { recipeId, summary: response.summary, title: response.title };
  }
);

const recipesReducer = createSlice({
  name: "recipes",
  initialState: {
    weekMeals: null,
    status: "idle",
    error: null,
    recipeInformation: null,
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
      .addCase(fetchMeals.pending, (state, action) => {
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
    // builder
    //   .addCase(fetchInformation.pending, (state, action) => {
    //     state.status = "loading";
    //   })
    //   .addCase(fetchInformation.fulfilled, (state, action) => {
    //     const { recipeId, cookingMinutes, preparationMinutes, title } =
    //       action.payload;
    //     state[recipeId] = { cookingMinutes, preparationMinutes, title }; // Assurez-vous que cela correspond à la structure de votre état.
    //   })
    //   .addCase(fetchInformation.rejected, (state, action) => {
    //     state.status = "failed";
    //     state.error = action.error.message;
    //   });
    // builder
    //   .addCase(fetchSummary.pending, (state, action) => {
    //     state.status = "loading";
    //   })
    //   .addCase(fetchSummary.fulfilled, (state, action) => {
    //     state.status = "succeeded";
    //     state[action.payload.recipeId] = {
    //       summary: action.payload.summary,
    //       title: action.payload.title,
    //     };
    //   })
    //   .addCase(fetchSummary.rejected, (state, action) => {
    //     state.status = "failed";
    //     state.error = action.error.message;
    //   });
  },
});

export const { setWeekMeals } = recipesReducer.actions;

export default recipesReducer.reducer;
