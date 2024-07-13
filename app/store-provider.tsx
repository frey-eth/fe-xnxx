"use client";
import { AppStore, makestore } from "@/lib/store";
import { ReactNode, useRef } from "react";
import { Provider } from "react-redux";

export default function StoreProvider({ children }: { children: ReactNode }) {
  const storeRef = useRef<AppStore | null>(null);
  if (!storeRef.current) {
    storeRef.current = makestore();
  }

  return <Provider store={storeRef.current}>{children}</Provider>;
}
