import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/authSlice";

// const rootReducer = combineReducers({
//   auth: authReducer,
//   // Ajoutez d'autres reducers ici
// });

// const persistConfig = {
//   key: "root",
//   version: 1,
//   storage,
// };

// const persistedReducer = persistReducer(persistConfig, rootReducer);

// export const store = configureStore({
//   reducer: persistedReducer,
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware({
//       serializableCheck: {
//         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//       },
//     }),
// });
// export const persistor = persistStore(store);

export default configureStore({
  reducer: {
    auth: authReducer,
  },
});
