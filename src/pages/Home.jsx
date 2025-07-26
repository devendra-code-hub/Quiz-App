// import { Link } from 'react-router-dom';

// export default function Home() {
//   return (
//     <div className="h-screen flex flex-col justify-center items-center gap-6">
//       <h1 className="text-4xl font-bold">Quiz App</h1>
//       <Link to="/quiz">
//         <button className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition">
//           Start Quiz
//         </button>
//       </Link>
//     </div>
//   );
// }

import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-6 text-center">
      <h1 className="text-4xl font-bold text-blue-700">Welcome to the Quiz App 🎯</h1>
      <Link to="/quiz">
        <button className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition">
          Start Quiz
        </button>
      </Link>
    </div>
  );
}
