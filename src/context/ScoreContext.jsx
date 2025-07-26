import { createContext, useContext, useState, useEffect } from "react";

const ScoreContext = createContext();

export const useScore = () => useContext(ScoreContext);

export const ScoreProvider = ({ children }) => {
  const [score, setScore] = useState(() => {
    const stored = localStorage.getItem("score");
    return stored ? JSON.parse(stored) : 0;
  });

  useEffect(() => {
    localStorage.setItem("score", JSON.stringify(score));
  }, [score]);

  const resetScore = () => setScore(0);

  return (
    <ScoreContext.Provider value={{ score, setScore, resetScore }}>
      {children}
    </ScoreContext.Provider>
  );
};
