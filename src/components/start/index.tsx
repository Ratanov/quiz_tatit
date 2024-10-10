import React from "react";
import "./style.css";

interface Props {
  onStart: () => void;
}

const Start: React.FC<Props> = ({ onStart }) => {
  return (
    <div className="start">
      <div className="start__top">
        <img src="../../src/assets/img/it-quiz-tatneft.png" alt="" />
      </div>
      <div className="start__bottom">
        <span className="start__text">
          Выбери 2 категории, набери 80+ баллов<br /> и получи подарок из самого сердца Татарстана
        </span>
        <button className="btn-start" onClick={onStart}>
          Start
        </button>
      </div>
    </div>
  );
};

export default Start;
