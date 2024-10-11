import React from "react";
import { ICategory } from "../../assets/types";
import "./style.css";

interface Props {
  category: ICategory;
  // onRestart: () => void;
  onBack: () => void;
  pointsPerQuestion: number;
}

const Results: React.FC<Props> = ({
  category,
  // onRestart,
  onBack,
  pointsPerQuestion,
}) => {
  const totalPoints = category.score * pointsPerQuestion;

  return (
    <div className="result">
      <img
        className="result-img"
        src="images/heart.svg"
        alt="result-img"
      />
      <h2 className="pattern h2lh mb-0">Твой результат</h2>
      <h2 className="h2lh">по категории</h2>
      <div className="result__all">
        <div className="result__category">{category.name}</div>
        <div className="result__score-points">
          <p className="result__score">
            {category.score}/{category.questions.length}
          </p>
          <p className="result__score-text">верно</p>
          <p className="result__points">Ты набрал(а) {totalPoints} баллов</p>
        </div>

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
      </div>
      <button className="btn-result" onClick={onBack}>
        Выбрать категорию
      </button>
    </div>
  );
};

export default Results;
