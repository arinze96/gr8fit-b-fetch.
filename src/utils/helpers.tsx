import AsyncStorage from "@react-native-async-storage/async-storage";


export const getAppState = async () => {
  let appStateResult = JSON.parse(
    (await AsyncStorage.getItem('')) as string
  );
  return appStateResult?.data;
};

export const clearAsyncStorage = async () => {
  return await AsyncStorage.clear();
};

export {};
