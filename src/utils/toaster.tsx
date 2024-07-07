import React from "react";
import Toast, {
	BaseToast,
	BaseToastProps,
	ErrorToast,
} from "react-native-toast-message";

export const toastConfig = {
	success: (props: any) => (
		<BaseToast
			{...props}
			style={{ borderLeftColor: "green" }}
			visibilityTime={7000}
			contentContainerStyle={{ paddingHorizontal: 15 }}
			text1Style={{
				fontSize: 16,
				fontWeight: "500",
			}}
		/>
	),
	error: (props: any) => (
		<ErrorToast
			{...props}
			style={{ borderLeftColor: "red" }}
			visibilityTime={7000}
			text1Style={{
				fontSize: 16,
				fontWeight: "500",
			}}
			text2Style={{
				fontSize: 15,
			}}
		/>
	),
};

export const successToast = (data: string | any) => {
	Toast.show({
		type: "success",
		text1: data,
		position: "top",
	});
};
export const successToastBottom = (data: string | any) => {
	Toast.show({
		type: "success",
		text1: data,
		position: "bottom",
	});
};
export const errorToast = (data: string | any) => {
	Toast.show({
		type: "error",
		text1: data,
		position: "top",
	});
};
