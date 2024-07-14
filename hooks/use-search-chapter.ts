import { useSearchParams } from "next/navigation";
import { useCallback } from "react";

export const useSearchChapter = () => {
  const searchParams = useSearchParams();
  const currentChapter = searchParams.get("chapter") || 1;
  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );

  return { currentChapter, createQueryString };
};
