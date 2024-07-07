import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query/react";
import appStateSlice from "./appStateSlice";
import { locationAPI } from "./locationAPI";

export const store = configureStore({
	reducer: {
		appState: appStateSlice,
		[locationAPI.reducerPath]: locationAPI.reducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			immutableCheck: false,
			serializableCheck: false,
		}).concat(
			locationAPI.middleware,
		),
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
setupListeners(store.dispatch);
