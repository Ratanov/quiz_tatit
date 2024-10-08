export interface IQuestion {
  question: string;
  options: string[];
  correctAnswer: number;
  image?: string;
}

export interface ICategory {
  name: string;
  questions: IQuestion[];
  score: number;
  completed: boolean;
  userAnswers: number[];
}
