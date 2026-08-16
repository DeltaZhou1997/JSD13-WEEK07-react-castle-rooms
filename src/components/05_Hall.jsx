import Corridor from "./06_Corridor";

export default function Hall({ question, answer }) {
  return (
    <div className="mt-5 flex w-11/12 flex-col items-center bg-emerald-500 pt-10">
      <h1 className="text-xl text-white">Hall</h1>

              <p className="text-purple-300">
            Message for Secret Room: {" "}
            <span className="text-yellow-300">
              {answer ? `✅${answer}` : "⌛Waiting for a message..."}
            </span>
        </p>
        
         <p className="text-purple-300">
            Message for Secret Room: {" "}
            <span className="text-yellow-300">
              {answer ? `✅${answer}` : "⌛Waiting for a message..."}
            </span>
        </p>

      <Corridor question={question} answer={answer} />
    </div>
  );
}