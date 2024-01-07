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

export function getRandomHumanImage() {
  const imgContainer = document.querySelector('.image-container') as HTMLDivElement;
  // Генерируем случайный номер для изображения
  const randomNumber = Math.floor(Math.random() * 1000);

  // Формируем URL для запроса рандомного изображения человека с Picsum
  const imageUrl = 'https://picsum.photos/200/300' + randomNumber + '&category=people';
  

  // Получаем элемент изображения
  const imageElement = document.getElementById('randomImage') as HTMLImageElement;

  imageElement.onload = null;

  // Устанавливаем новый путь к изображению
  imageElement.src = imageUrl;
  imgContainer.appendChild(imageElement);
  imageElement.onload = () => {
    // Изображение успешно загружено, выполните необходимые действия здесь
    console.log('Изображение успешно загружено!');
  };

  // Добавляем обработчик события "error", чтобы обработать случаи ошибок загрузки изображения
  imageElement.onerror = () => {
    console.error('Ошибка при загрузке изображения');
  };
}
