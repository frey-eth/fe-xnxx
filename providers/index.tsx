"use client";
import PersistLoginProvider from "./persist-login-provider";
import ProtectedRouterProvider from "./protected-router-provider";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { useState } from "react";

import StoreProvider from "./store-provider";

export default function IndexProvider({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <StoreProvider>
        <PersistLoginProvider>
          <ProtectedRouterProvider>{children}</ProtectedRouterProvider>
        </PersistLoginProvider>
      </StoreProvider>
    </QueryClientProvider>
  );
}
