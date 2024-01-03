import IComment from "./types";
import './scss/style.scss'

class Comment implements IComment {
  id: string;
  text: string;
  author: string;
  timestamp: Date;
  replies: IComment[];

  constructor(id: string, text: string, author: string) {
    this.id = id;
    this.text = text;
    this.author = author;
    this.timestamp = new Date();
    this.replies = [];
  }

  addReply(reply: IComment): void {
    this.replies.push(reply);
  }

  removeReply(replyId: string): void {
    this.replies = this.replies.filter((reply) => reply.id !== replyId);
  }
}

class CommentThread implements IComment {
  comments: IComment[];

  constructor() {
    this.comments = [];
  }

  addComment(comment: IComment): void {
    this.comments.push(comment);
  }

  removeComment(commentId: string): void {
    this.comments = this.comments.filter((comment) => commentId !== comment.id);
  }
}
