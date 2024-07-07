import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import React, { useEffect, useState } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import Toast from "react-native-toast-message";
import BaseNavigator from "./src/navigation";
import { store } from "./src/store";
import { toastConfig } from "./src/utils/toaster";


export default function App() {
  const queryClient = new QueryClient();

  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <NavigationContainer>
            <BaseNavigator />
        </NavigationContainer>
        <Toast config={toastConfig} />
      </QueryClientProvider>
    </Provider>
  );
}
