import useRefreshToken from "@/hooks/use-refresh-token";
import { selectIsAuthenticated } from "@/lib/redux/auth-slice";
import { ReactNode, useEffect } from "react";
import { useSelector } from "react-redux";

export default function PersistLoginProvider({
  children,
}: {
  children: ReactNode;
}) {
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const refresh = useRefreshToken();
  useEffect(() => {
    const refreshToken = async () => {
      try {
        await refresh();
      } finally {
        console.log("refresh token done");
      }
    };

    if (!isAuthenticated) {
      refreshToken();
    }
  }, [isAuthenticated, refresh]);
  return <>{children}</>;
}
