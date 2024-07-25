import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { storageConstants } from "@/utils/local_storage";

export type AuthState = {
  accessToken: string | null;
};

const initialState: AuthState = {
  accessToken: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (
      state,
      action: PayloadAction<{ accessToken: string; refreshToken: string }>
    ) => {
      state.accessToken = action.payload.accessToken;
      localStorage.setItem(
        storageConstants.REFRESH_TOKEN,
        action.payload.refreshToken
      );
    },
    updateAccessToken: (state, action: PayloadAction<string>) => {
      state.accessToken = action.payload;
      localStorage.setItem(storageConstants.ACCESS_TOKEN, action.payload);
    },
    updateRefreshToken: (state, action: PayloadAction<string>) => {
      localStorage.setItem(storageConstants.REFRESH_TOKEN, action.payload);
    },
    logout: (state) => {
      state.accessToken = "";
      localStorage.removeItem(storageConstants.REFRESH_TOKEN);
      localStorage.removeItem(storageConstants.ACCESS_TOKEN);
    },
  },
});

// Selectors
export const selectAccessToken = (state: RootState) => state.auth.accessToken;
export const selectIsAuthenticated = (state: RootState) =>
  state.auth.accessToken;

// Actions
export const { login, updateAccessToken, updateRefreshToken, logout } =
  authSlice.actions;

export default authSlice.reducer;
