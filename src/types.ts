interface IComment {
  id: string;
  text: string;
  author: string;
  timestamp: Date;
  replies: IComment;

  addReplies(reply: IComment): void;
  removeReply(replyId: string): void;
}

export default IComment