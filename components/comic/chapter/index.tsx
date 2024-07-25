import SingleChapter from "./signle-chapter";
import { ListChapter } from "@/constants/list-chapter";

const ChapterList = ({ num_of_chapters }: { num_of_chapters: number }) => {
  return (
    <div className="flex flex-col h-[300px] overflow-y-auto w-full border rounded overflow-hidden">
      {ListChapter.map((chapter) => (
        <SingleChapter
          title={chapter.name}
          chapter={chapter.id}
          key={chapter.id}
        />
      ))}
    </div>
  );
};

export default ChapterList;
