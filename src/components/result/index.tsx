import React from "react";
import { ICategory } from "../../assets/types";
import "./style.css";

interface Props {
  category: ICategory;
  onRestart: () => void;
  onBack: () => void;
  pointsPerQuestion: number;
}

const Results: React.FC<Props> = ({
  category,
  onRestart,
  onBack,
  pointsPerQuestion,
}) => {
  const totalPoints = category.score * pointsPerQuestion;

  return (
    <div>
      <h2>Результаты квиза по категории "{category.name}"</h2>
      <p>
        Ваш результат: {category.score} из {category.questions.length}
      </p>
      <p>Ты набрал(а) {totalPoints} баллов</p>
      {/* <h3>Ваши ответы:</h3>
      {category.questions.map((question, index) => (
        <div key={index}>
          <p>
            <strong>Вопрос {index + 1}:</strong> {question.question}
          </p>
          {question.image && (
            <img
              src={question.image}
              alt="Вопрос"
              style={{ maxWidth: "300px" }}
            />
          )}
          <p>Ваш ответ: {question.options[category.userAnswers[index]]}</p>
          <p>Правильный ответ: {question.options[question.correctAnswer]}</p>
          <p
            style={{
              color:
                category.userAnswers[index] === question.correctAnswer
                  ? "green"
                  : "red",
            }}
          >
            {category.userAnswers[index] === question.correctAnswer
              ? "Правильно"
              : "Неправильно"}
          </p>
          <hr />
        </div>
      ))}
      <button onClick={onRestart}>Начать заново</button> */}
      <button onClick={onBack} style={{ marginLeft: "10px" }}>
        Выбрать категорию
      </button>
    </div>
  );
};

export default Results;
