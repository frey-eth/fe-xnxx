"use client";
import { ListChapter } from "@/constants/list-chapter";
import useClickOutside from "@/hooks/use-click-outside";
import { useSearchChapter } from "@/hooks/use-search-chapter";
import { usePathname, useRouter } from "next/navigation";

type ChapterPanigationProps = {
  isOpen: boolean;
  setOpen: (value: boolean) => void;
};

const ListChapterPanigation = ({ isOpen, setOpen }: ChapterPanigationProps) => {
  const { createQueryString } = useSearchChapter();
  const pathname = usePathname();
  const router = useRouter();
  const { nodeRef } = useClickOutside(() => setOpen(false));
  return (
    <div
      ref={nodeRef}
      className={`flex flex-col overflow-y-auto w-full mx-2 max-w-md py-2 px-3 absolute bg-black rounded-lg bg-opacity-80 max-h-[300px] ${
        isOpen ? "bottom-14" : "-bottom-96"
      } z-[100] transition-all duration-300`}
    >
      {ListChapter.map((chapter) => (
        <button
          onClick={() => {
            const query = createQueryString("chapter", chapter.id.toString());
            router.push(pathname + "?" + query);
            setOpen(false);
          }}
          key={chapter.id}
          className="text-white text-xs py-4 flex flex-row items-center gap-1 px-5 font-medium border-opacity-50 border-b w-full text-center opacity-90 whitespace-nowrap text-ellipsis overflow-hidden"
        >
          Chapter {chapter.id}: {chapter.name}
        </button>
      ))}
    </div>
  );
};

export default ListChapterPanigation;
