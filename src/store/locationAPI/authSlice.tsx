import AsyncStorage from "@react-native-async-storage/async-storage";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { IUser } from "./interface";

export const useGetUserAsyncData = (GR8FIT_MOBILE_USER: string) => {
	return useQuery<IUser | null, Error>(GR8FIT_MOBILE_USER, async () => {
		const result: string | null = await AsyncStorage.getItem(GR8FIT_MOBILE_USER);

		return result ? JSON.parse(result) : undefined;
	});
};

export const useUpdateUserAsyncData = (GR8FIT_MOBILE_USER: string) => {
	const queryClient = useQueryClient();

	return useMutation(
		GR8FIT_MOBILE_USER,
		async (data: IUser | null) => {
			const result: string | null = await AsyncStorage.getItem(GR8FIT_MOBILE_USER);

			const currentData: IUser = result ? JSON.parse(result) : undefined;
			const user = currentData;

			await AsyncStorage.setItem(GR8FIT_MOBILE_USER, JSON.stringify(data));

			return user;
		},
		{
			onSuccess: () => queryClient.invalidateQueries(GR8FIT_MOBILE_USER),
		}
	);
};

