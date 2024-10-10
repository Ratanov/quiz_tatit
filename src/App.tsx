import { useState } from "react";
import CategorySelection from "./components/category";
import Quiz from "./components/quiz";
import Results from "./components/result";
import Start from "./components/start";
import Finish from "./components/finish";
import { categories as initialCategories } from "./assets/data/questions";
import { ICategory } from "./assets/types";

const POINTS_PER_QUESTION = 5;

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
  const [gameStarted, setGameStarted] = useState(false);
  const [gameFinished, setGameFinished] = useState(false);
  const [completedCategories, setCompletedCategories] = useState(0);
  const [totalPoints, setTotalPoints] = useState(0);

  const handleStart = () => {
    setGameStarted(true);
  };

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
    console.log("categories", categories);
  };

  const handleAnswer = (answerIndex: number) => {
    if (selectedCategory) {
      const isCorrect =
        selectedCategory.questions[currentQuestion].correctAnswer ===
        answerIndex;
      const updatedCategory = {
        ...selectedCategory,
        userAnswers: [...selectedCategory.userAnswers, answerIndex],
        score: isCorrect ? selectedCategory.score + 1 : selectedCategory.score,
        completed: currentQuestion === selectedCategory.questions.length - 1,
      };

      setCategories((prevCategories) =>
        prevCategories.map((cat) =>
          cat.name === selectedCategory.name ? updatedCategory : cat
        )
      );

      setSelectedCategory(updatedCategory);

      if (isCorrect) {
        setTotalPoints(totalPoints + POINTS_PER_QUESTION);
      }

      if (currentQuestion < selectedCategory.questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
      } else {
        setQuizCompleted(true);
        setCompletedCategories(completedCategories + 1);
        if (completedCategories + 1 >= 2) {
          setGameFinished(true);
        }
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

  const handleRestart = () => {
    setCategories(
      initialCategories.map((cat) => ({
        ...cat,
        score: 0,
        completed: false,
        userAnswers: [],
      }))
    );
    setSelectedCategory(null);
    setCurrentQuestion(0);
    setQuizCompleted(false);
    setViewingResults(null);
    setGameStarted(false);
    setGameFinished(false);
    setCompletedCategories(0);
    setTotalPoints(0);
  };

  return (
    <div className="app">
      <div className="pattern-img">
        <img src="../../src/assets/img/it-quiz-pattern.png" alt="logo" />
      </div>
      <div className="tatneft-logo">
        <img src="../../src/assets/img/tatneft-logo.png" alt="logo" />
      </div>
      {!gameStarted ? (
        <Start onStart={handleStart} />
      ) : gameFinished ? (
        <Finish onRestart={handleRestart} totalPoints={totalPoints} />
      ) : !selectedCategory && !viewingResults ? (
        <CategorySelection
          categories={categories}
          onSelect={handleCategorySelect}
          onViewResults={handleViewResults}
          pointsPerQuestion={POINTS_PER_QUESTION}
        />
      ) : viewingResults ? (
        <Results
          category={viewingResults}
          // onRestart={() => handleCategorySelect(viewingResults)}
          onBack={handleBackToCategories}
          pointsPerQuestion={POINTS_PER_QUESTION}
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
          // onRestart={() => handleCategorySelect(selectedCategory!)}
          onBack={handleBackToCategories}
          pointsPerQuestion={POINTS_PER_QUESTION}
        />
      )}
    </div>
  );
}

export default App;
