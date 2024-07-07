import AsyncStorage from "@react-native-async-storage/async-storage";
import { fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "../constants";

export const baseQuery = fetchBaseQuery({
	baseUrl: BASE_URL,

	prepareHeaders: async (headers) => {
		const token = await AsyncStorage.getItem("gr8fitAuthToken:token");
		headers.set("X-Authorization", `Bearer ${token}`);
		return headers;
	},
});


