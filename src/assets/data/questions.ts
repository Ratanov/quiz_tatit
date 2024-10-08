import { ICategory, IQuestion } from "../types";
import tiger from '../img/tiger.jpg';
import taj from '../img/taj-mahal.jpeg';
import saturn from '../img/saturn.png';

const questions: { [key: string]: IQuestion[] } = {
  История: [
    {
      question: "В каком году началась Вторая мировая война?",
      options: ["1937", "1939", "1941", "1945"],
      correctAnswer: 1,
    },
    {
      question: "Кто был первым президентом США?",
      options: [
        "Томас Джефферсон",
        "Джордж Вашингтон",
        "Авраам Линкольн",
        "Джон Адамс",
      ],
      correctAnswer: 1,
    },
    {
      question: "В каком году пала Берлинская стена?",
      options: ["1985", "1989", "1991", "1993"],
      correctAnswer: 1,
    },
  ],
  Наука: [
    {
      question: "Какой элемент имеет химический символ 'Fe'?",
      options: ["Фтор", "Железо", "Фосфор", "Франций"],
      correctAnswer: 1,
    },
    {
      question: "Какая планета находится ближе всего к Солнцу?",
      options: ["Венера", "Марс", "Меркурий", "Земля"],
      correctAnswer: 2,
    },
    {
      question: "Кто открыл пенициллин?",
      options: ["Луи Пастер", "Александр Флеминг", "Роберт Кох", "Иван Павлов"],
      correctAnswer: 1,
    },
  ],
  Литература: [
    {
      question: "Кто написал роман '1984'?",
      options: [
        "Олдос Хаксли",
        "Рэй Брэдбери",
        "Джордж Оруэлл",
        "Курт Воннегут",
      ],
      correctAnswer: 2,
    },
    {
      question: "Кто автор 'Войны и мира'?",
      options: [
        "Федор Достоевский",
        "Лев Толстой",
        "Иван Тургенев",
        "Антон Чехов",
      ],
      correctAnswer: 1,
    },
    {
      question:
        "Какой шекспировский герой произносит монолог 'Быть или не быть'?",
      options: ["Макбет", "Ромео", "Гамлет", "Отелло"],
      correctAnswer: 2,
    },
  ],
  Изображения: [
    {
      question: "Какое животное изображено на картинке?",
      options: ["Лев", "Тигр", "Леопард", "Гепард"],
      correctAnswer: 1,
      image: tiger,
    },
    {
      question: "Какой памятник архитектуры изображен на фото?",
      options: ["Тадж-Махал", "Колизей", "Пирамида Хеопса", "Эйфелева башня"],
      correctAnswer: 0,
      image: taj,
    },
    {
      question: "Какая планета изображена на этом снимке?",
      options: ["Марс", "Юпитер", "Сатурн", "Нептун"],
      correctAnswer: 2,
      image: saturn,
    },
  ],
};

export const categories: ICategory[] = Object.entries(questions).map(
  ([name, questions]) => ({
    name,
    questions,
    score: 0,
    completed: false,
    userAnswers: [],
  })
);
