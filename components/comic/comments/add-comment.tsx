"use client";
import { CommentType } from "@/types/comment";
import { useState } from "react";
import { IoSendSharp } from "react-icons/io5";

type AddCommentProps = {
  handleAddComment: (comment: CommentType) => void;
};

const AddComment = ({ handleAddComment }: AddCommentProps) => {
  const [comment, setComment] = useState("");
  return (
    <div className="flex flex-col gap-1">
      <div className="flex flex-row gap-2">
        <img
          src="/images/avatar.png"
          alt="avatar"
          className="w-8 h-8 rounded-full"
        />
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          rows={3}
          maxLength={300}
          placeholder="Add a comment"
          className="w-full border border-gray-300 rounded-md p-2 outline-none focus:border-blue-500"
          style={{ resize: "none" }}
        />
      </div>
      <button
        onClick={() => {
          handleAddComment({
            name: "User nào đó",
            avatar: "/images/avatar.png",
            comment,
            date: "2021-09-01",
          });
          setComment("");
        }}
        disabled={!comment}
        className={`self-end ${!comment && "text-gray-300"}`}
      >
        <IoSendSharp size={24} />
      </button>
    </div>
  );
};

export default AddComment;
