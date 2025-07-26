// export default function Result() {
//   return (
//     <div className="h-screen flex justify-center items-center">
//       <h1 className="text-2xl font-semibold">Result Page (Coming Soon)</h1>
//     </div>
//   );
// }

import { useLocation, useNavigate } from "react-router-dom";

export default function Result() {
  const { state } = useLocation();
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center h-screen gap-6">
      <h1 className="text-3xl font-bold">Quiz Completed 🎉</h1>
      <p className="text-xl">
        You scored {state?.score ?? 0} out of {state?.total ?? 0}
      </p>
      <button
        onClick={() => navigate("/")}
        className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition"
      >
        Restart Quiz
      </button>
    </div>
  );
}
