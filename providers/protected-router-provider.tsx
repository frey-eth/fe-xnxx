import { selectIsAuthenticated } from "@/lib/redux/auth-slice";
import { usePathname, useRouter } from "next/navigation";
import { ReactNode, useEffect } from "react";
import { useSelector } from "react-redux";
const authRoutes = [
  "/login",
  "/register",
  "/reset-password",
  "/forgot-password",
];

export default function ProtectedRouterProvider({
  children,
}: {
  children: ReactNode;
}) {
  const router = useRouter();
  const isAuth = useSelector(selectIsAuthenticated);
  const path = usePathname();
  useEffect(() => {
    if (isAuth && authRoutes.includes(path)) {
      router.push("/");
    }
  }, [path, isAuth, router]);
  return <>{children}</>;
}
