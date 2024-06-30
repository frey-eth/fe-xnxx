"use client";
import { useState } from "react";
import AddComment from "./add-comment";
import Comment from "./comment";
import { commentList } from "@/constants/list-comments";
import { CommentType } from "@/types/comment";

const CommentList = () => {
  const [comments, setComments] = useState(commentList);
  const handleAddComment = (comment: CommentType) =>
    setComments((prevComments) => [comment, ...prevComments]);
  return (
    <div className="w-full flex flex-col gap-4">
      <AddComment handleAddComment={handleAddComment} />
      <div className="flex flex-col gap-3 w-full">
        {comments.map((comment, index) => (
          <Comment
            key={index}
            avatar={comment.avatar}
            comment={comment.comment}
            date={comment.date}
            name={comment.name}
          />
        ))}
      </div>
    </div>
  );
};

export default CommentList;
