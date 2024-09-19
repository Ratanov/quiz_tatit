import { useState } from "react";
import CategorySelection from "./components/category";
import Quiz from "./components/quiz";
import Results from "./components/result";
import { categories as initialCategories } from "./data/questions";
import { ICategory } from "./types";

function App() {
  const [categories, setCategories] = useState<ICategory[]>(
    initialCategories.map((cat) => ({
      ...cat,
      score: 0,
      completed: false,
      userAnswers: [],
    }))
  );
  const [selectedCategory, setSelectedCategory] = useState<ICategory | null>(
    null
  );
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [viewingResults, setViewingResults] = useState<ICategory | null>(null);

  const handleCategorySelect = (category: ICategory) => {
    // Очищаем userAnswers только для выбранной категории
    const updatedCategories = categories.map((cat) =>
      cat.name === category.name
        ? { ...cat, userAnswers: [], score: 0, completed: false }
        : cat
    );
    setCategories(updatedCategories);

    // Обновляем selectedCategory с очищенными данными
    const updatedCategory = updatedCategories.find(
      (cat) => cat.name === category.name
    )!;
    setSelectedCategory(updatedCategory);

    setCurrentQuestion(0);
    setQuizCompleted(false);
    setViewingResults(null);
    console.log('categories', categories)
  };

  const handleAnswer = (answerIndex: number) => {
    if (selectedCategory) {
      const updatedCategory = {
        ...selectedCategory,
        userAnswers: [...selectedCategory.userAnswers, answerIndex],
        score:
          selectedCategory.questions[currentQuestion].correctAnswer ===
          answerIndex
            ? selectedCategory.score + 1
            : selectedCategory.score,
        completed: currentQuestion === selectedCategory.questions.length - 1,
      };

      setCategories((prevCategories) =>
        prevCategories.map((cat) =>
          cat.name === selectedCategory.name ? updatedCategory : cat
        )
      );

      setSelectedCategory(updatedCategory);

      if (currentQuestion < selectedCategory.questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
      } else {
        setQuizCompleted(true);
      }
    }
  };

  const handleViewResults = (category: ICategory) => {
    setViewingResults(category);
  };

  const handleBackToCategories = () => {
    setSelectedCategory(null);
    setViewingResults(null);
    setQuizCompleted(false);
  };

  return (
    <div className="app">
      <h1>Квиз</h1>
      {!selectedCategory && !viewingResults ? (
        <CategorySelection
          categories={categories}
          onSelect={handleCategorySelect}
          onViewResults={handleViewResults}
        />
      ) : viewingResults ? (
        <Results
          category={viewingResults}
          onRestart={() => handleCategorySelect(viewingResults)}
          onBack={handleBackToCategories}
        />
      ) : !quizCompleted ? (
        <Quiz
          category={selectedCategory!.name}
          question={selectedCategory!.questions[currentQuestion]}
          onAnswer={handleAnswer}
          currentQuestion={currentQuestion + 1}
          totalQuestions={selectedCategory!.questions.length}
        />
      ) : (
        <Results
          category={selectedCategory!}
          onRestart={() => handleCategorySelect(selectedCategory!)}
          onBack={handleBackToCategories}
        />
      )}
    </div>
  );
}

export default App;
