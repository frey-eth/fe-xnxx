import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./redux/auth-slice";
export const makestore = () => {
  return configureStore({
    reducer: {
      auth: authReducer,
    },
  });
};

export type AppStore = ReturnType<typeof makestore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
