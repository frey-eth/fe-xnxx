import {
  logout,
  updateAccessToken,
  updateRefreshToken,
} from "@/lib/redux/auth-slice";
import { authService } from "@/services/auth.service";
import { storageConstants } from "@/utils/local_storage";
import { useDispatch, useSelector } from "react-redux";

const useRefreshToken = () => {
  const dispatch = useDispatch();

  return async () => {
    const refreshToken = localStorage.getItem(storageConstants.REFRESH_TOKEN);
    if (!refreshToken) return;
    try {
      const response = await authService.refreshToken(refreshToken);
      if (response) {
        dispatch(updateAccessToken(response.data.token));
        dispatch(updateRefreshToken(response.data.refreshToken));
      }
    } catch (error) {
      dispatch(logout());
    }
  };
};

export default useRefreshToken;
