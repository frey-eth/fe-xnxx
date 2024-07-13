export const storageConstants = {
  ACCESS_TOKEN: "accessToken",
  REFRESH_TOKEN: "refreshToken",
};

export const LocalStorage = function () {
  function _setToken(access_token: string) {
    if (access_token) {
      localStorage.setItem(storageConstants.ACCESS_TOKEN, access_token);
    }
  }

  function _getToken() {
    return localStorage.getItem(storageConstants.ACCESS_TOKEN);
  }

  function _setRefreshToken(refresh_token: string) {
    if (refresh_token) {
      localStorage.setItem(storageConstants.REFRESH_TOKEN, refresh_token);
    }
  }

  function _getRefreshToken() {
    return localStorage.getItem(storageConstants.REFRESH_TOKEN);
  }

  function _clearToken() {
    localStorage.removeItem(storageConstants.ACCESS_TOKEN);
    localStorage.removeItem(storageConstants.REFRESH_TOKEN);
  }

  return {
    setToken: _setToken,
    getToken: _getToken,
    setRefreshToken: _setRefreshToken,
    getRefreshToken: _getRefreshToken,
    clearToken: _clearToken,
  };
};
