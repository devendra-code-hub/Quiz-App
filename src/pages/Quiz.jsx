// export default function Quiz() {
//   return (
//     <div className="h-screen flex justify-center items-center">
//       <h1 className="text-2xl font-semibold">Quiz Page (Coming Soon)</h1>
//     </div>
//   );
// }

// import { useState } from "react";
// import questions from "../data/questions";
// import { useNavigate } from "react-router-dom";

// export default function Quiz() {
//   const [currentQ, setCurrentQ] = useState(0);
//   const [selected, setSelected] = useState(null);
//   const [score, setScore] = useState(0);
//   const navigate = useNavigate();

//   const handleOptionClick = (option) => {
//     setSelected(option);
//   };

//   const handleNext = () => {
//     if (selected === questions[currentQ].answer) {
//       setScore(score + 1);
//     }

//     if (currentQ < questions.length - 1) {
//       setCurrentQ(currentQ + 1);
//       setSelected(null);
//     } else {
//       navigate("/result", { state: { score, total: questions.length } });
//     }
//   };

//   const q = questions[currentQ];

//   return (
//     <div className="flex flex-col items-center justify-center h-screen px-4">
//       <h2 className="text-2xl font-semibold mb-4">{q.question}</h2>
//       <div className="flex flex-col gap-3 w-full max-w-md">
//         {q.options.map((option, idx) => (
//           <button
//             key={idx}
//             onClick={() => handleOptionClick(option)}
//             className={`border px-4 py-2 rounded-xl ${
//               selected === option ? "bg-blue-600 text-white" : "bg-white"
//             } hover:bg-blue-100`}
//           >
//             {option}
//           </button>
//         ))}
//       </div>
//       <button
//         onClick={handleNext}
//         className="mt-6 bg-green-600 text-white px-6 py-2 rounded-xl hover:bg-green-700 transition"
//         disabled={selected === null}
//       >
//         {currentQ === questions.length - 1 ? "Finish Quiz" : "Next"}
//       </button>
//     </div>
//   );
//}
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import questions from "../data/questions";
import { motion, AnimatePresence } from "framer-motion";
//import { useScore } from "@/context/ScoreContext";

export default function Quiz() {
  const [currentQ, setCurrentQ] = useState(0);
  const [selected, setSelected] = useState(null);
  const [score, setScore] = useState(0);
  const [timer, setTimer] = useState(15);
  const navigate = useNavigate();

  const q = questions[currentQ];

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prev) => {
        if (prev === 1) {
          handleNext(); // Auto move if time runs out
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [currentQ]);

  const handleOptionClick = (option) => {
    setSelected(option);
  };

  const handleNext = () => {
    if (selected === q.answer) {
      setScore(score + 1);
    }

    if (currentQ < questions.length - 1) {
      setCurrentQ(currentQ + 1);
      setSelected(null);
      setTimer(15);
    } else {
      navigate("/result", { state: { score, total: questions.length } });
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen px-4 text-center">
      <motion.div
        key={currentQ}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-xl"
      >
        <div className="mb-4 text-lg font-medium text-gray-700">
          Time left: <span className="text-red-500">{timer}s</span>
        </div>
        <h2 className="text-2xl font-semibold mb-4">{q.question}</h2>
        <div className="flex flex-col gap-3">
          {q.options.map((option, idx) => (
            <button
              key={idx}
              onClick={() => handleOptionClick(option)}
              className={`border px-4 py-2 rounded-xl transition ${
                selected === option
                  ? "bg-blue-600 text-white"
                  : "bg-white hover:bg-blue-100"
              }`}
            >
              {option}
            </button>
          ))}
        </div>
        <button
          onClick={handleNext}
          className="mt-6 bg-green-600 text-white px-6 py-2 rounded-xl hover:bg-green-700 transition"
          disabled={selected === null}
        >
          {currentQ === questions.length - 1 ? "Finish Quiz" : "Next"}
        </button>
      </motion.div>
    </div>
  );
}

// const Quiz = () => {
//   const { score, setScore } = useScore();

//   const handleAnswer = (isCorrect) => {
//     if (isCorrect) setScore((prev) => prev + 1);
//   };

//   // Call handleAnswer(true/false) on answer click

//   return <div>Score: {score}</div>;
// };

