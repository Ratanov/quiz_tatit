import React from "react";
import { ICategory } from "../../assets/types";
import "./style.css";

interface Props {
  categories: ICategory[];
  onSelect: (category: ICategory) => void;
  onViewResults: (category: ICategory) => void;
  pointsPerQuestion: number;
}

const Category: React.FC<Props> = ({
  categories,
  onSelect,
  onViewResults,
  pointsPerQuestion,
}) => {
  return (
    <div className="category">
      <h2 className="pattern">Выберите категорию</h2>
      <div className="category__items">
        {categories.map((category) => (
          <div key={category.name} className="category__item">
            {category.completed ? (
              <>
                <button
                  className="btn-category btn-category-complete"
                  disabled
                  onClick={() => onViewResults(category)}
                >
                  <p>
                    {category.score}/{category.questions.length} верно
                  </p>
                  <p>{category.score * pointsPerQuestion} баллов</p>
                </button>
              </>
            ) : (
              <button
                className="btn-category"
                onClick={() => onSelect(category)}
              >
                <span>{category.name}</span>
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
