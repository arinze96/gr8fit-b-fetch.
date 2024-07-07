import AsyncStorage from "@react-native-async-storage/async-storage";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { GR8FIT_APP_STATE } from "../../utils/constants";


interface AppState {
  submitAppStateData?: string;
}

const initialState: AppState = {
  submitAppStateData: "false",
};

export const appStateSlice = createSlice({
  name: "appState",
  initialState: initialState,
  reducers: {
    setAppState: (state, action: PayloadAction<AppState>) => {
      state.submitAppStateData = action.payload.submitAppStateData;
      AsyncStorage.setItem(GR8FIT_APP_STATE, JSON.stringify(state));
    },
  },
});

export const {
  setAppState,
} = appStateSlice.actions;
export default appStateSlice.reducer;
