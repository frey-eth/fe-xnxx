import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./redux/auth-slice";
const makestore = () => {
  return configureStore({
    reducer: {
      auth: authReducer,
    },
  });
};
const store = makestore();
export default store;

export type AppStore = ReturnType<typeof makestore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
