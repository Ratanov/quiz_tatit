import React from "react";
import "./style.css";

interface Props {
  onRestart: () => void;
  totalPoints: number;
}

const Finish: React.FC<Props> = ({ onRestart, totalPoints }) => {
  return (
    <div className="finish">
      <img
        className="result-img"
        src="images/heart.svg"
        alt="result-img"
      />
      <h2 className="pattern h2lh mb-0">Твой финальный</h2>
      <h2 className="h2lh">результат</h2>
      <p className="finish__points">
        {totalPoints}
        <br />
        баллов
      </p>
      <button className="btn-result" onClick={onRestart}>
        Начать заново
      </button>
    </div>
  );
};

export default Finish;
