import { CommentType } from "@/types/comment";
import { timeAgo } from "@/utils/time-convert";
import { AiOutlineLike } from "react-icons/ai";

const Comment = ({ avatar, name, comment, date }: CommentType) => {
  return (
    <div className="flex flex-row gap-2 w-full">
      <div className="w-12 h-12 min-w-12 bg-gray-500 rounded-full overflow-hidden">
        <img src={avatar} className="w-full h-full object-cover" />
      </div>
      <div className="flex flex-col gap-1 w-full">
        <div className="flex flex-col gap-1 w-full rounded-2xl p-2 bg-gray-200">
          <div className="flex flex-row w-full justify-between">
            <h2 className="text-black font-semibold text-sm">{name}</h2>
          </div>
          <p className="text-black text-[16px] leading-5">{comment}</p>
        </div>

        <div className="flex flex-row justify-between items-start px-2">
          <div className="flex flex-row gap-2 text-[12px] leading-3">
            <span className="text-gray-400">{timeAgo(date)}</span>
            <button className="text-black font-semibold">Thích</button>
            <button className="text-black font-semibold">Phản hồi</button>
          </div>
          <span className="flex flex-row gap-1 text-[12px] font-medium">
            317 <AiOutlineLike size={16} />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Comment;
