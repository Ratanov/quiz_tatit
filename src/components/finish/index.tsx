import React from "react";
import "./style.css";

interface Props {
  onRestart: () => void;
  totalPoints: number;
}

const Finish: React.FC<Props> = ({ onRestart, totalPoints }) => {
  return (
    <div className="finish">
      <h2>Поздравляем! Вы завершили квиз.</h2>
      <p>Общее количество набранных баллов: {totalPoints}</p>
      <button onClick={onRestart}>Начать заново</button>
    </div>
  );
};

export default Finish;
