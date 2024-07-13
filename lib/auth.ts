import { jwtDecode } from "jwt-decode";

export function isTokenExpired(token: string) {
  console.log("🚀 ~ file: auth.ts:4 ~ isTokenExpired ~ token:", token);
  if (!token) return true;
  const decodedToken = JSON.parse(JSON.stringify(jwtDecode(token)));
  const expirationTime = decodedToken.exp * 1000;
  const now = new Date();
  return now.getTime() >= expirationTime;
}

export function extractUserIdFromToken(token: string): string {
  if (!token) return "";
  return JSON.parse(JSON.stringify(jwtDecode(token))).id;
}
