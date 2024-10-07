import React, { useState } from "react";
import { IQuestion } from "../../assets/types";
import "./style.css";

interface Props {
  category: string;
  question: IQuestion;
  onAnswer: (answerIndex: number) => void;
  currentQuestion: number;
  totalQuestions: number;
}

const Quiz: React.FC<Props> = ({
  category,
  question,
  onAnswer,
  currentQuestion,
  totalQuestions,
}) => {
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);

  const handleSubmit = () => {
    if (selectedAnswer !== null) {
      onAnswer(selectedAnswer);
      setSelectedAnswer(null);
    }
  };

  return (
    <div className="quiz">
      <h2>{category}</h2>
      <p>
        Вопрос {currentQuestion} из {totalQuestions}
      </p>
      <div className="quiz__question">
        <h3>{question.question}</h3>
        {question.image && (
          <div className="quiz__image">
            <img
              src={question.image}
              alt="Вопрос"
            />
          </div>
        )}
      </div>
      <div className="quiz__answers">
        {question.options.map((option, index) => (
          <div key={index} className="quiz__answer">
            <input
              type="radio"
              id={`option-${index}`}
              name="answer"
              value={index}
              checked={selectedAnswer === index}
              onChange={() => setSelectedAnswer(index)}
            />
            <label htmlFor={`option-${index}`}>{option}</label>
          </div>
        ))}
      </div>
      <div className="quiz__submit">
        <button onClick={handleSubmit} disabled={selectedAnswer === null}>
          Ответить
        </button>
      </div>
    </div>
  );
};

export default Quiz;
