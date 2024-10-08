import React from "react";
import "./style.css";

interface Props {
  onStart: () => void;
}

const Start: React.FC<Props> = ({ onStart }) => {
  return (
    <div className="start">
      <div className="start__quiz">
        <img src="../../src/assets/img/it-quiz-tatneft.png" alt="" />
      </div>
      <button className="start__btn" onClick={onStart}>Start</button>
    </div>
  );
};

export default Start;
