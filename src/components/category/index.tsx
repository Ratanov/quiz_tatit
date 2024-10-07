import React from "react";
import { ICategory } from "../../assets/types";
import "./style.css";

interface Props {
  categories: ICategory[];
  onSelect: (category: ICategory) => void;
  onViewResults: (category: ICategory) => void;
}

const Category: React.FC<Props> = ({ categories, onSelect, onViewResults }) => {
  return (
    <>
      <h2>Категории:</h2>
      <div className="category">
        {categories.map((category) => (
          <div key={category.name} className="category__elem">
            <h3>{category.name}</h3>
            {category.completed ? (
              <>
                <button onClick={() => onViewResults(category)}>
                  Результаты
                </button>
                <p>
                  {category.score} / {category.questions.length} правильных
                  ответов
                </p>
              </>
            ) : (
              <button onClick={() => onSelect(category)}>Начать квиз</button>
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default Category;
