import Hall from "./05_Hall";
export default function Room({ question, answer, handleAnswer }) {

  return (
    <div className="mt-5 flex w-11/12 flex-col items-center bg-green-500 pt-10">
      <h1 className="text-xl text-white">Room</h1>

              {/* <p className="text-purple-300">
            Message for Secret Room: {" "}
            <span className="text-yellow-300">
              {question ? `✅${question}` : "⌛Waiting for a message..." }
            </span>
        </p> */}
        
        {/* <p className="text-purple-300">
            Message for Secret Room: {" "}
            <span className="text-yellow-300">
              {answer ? `✅${answer}` : "⌛Waiting for a message..."}
            </span>
        </p> */}

      <Hall question={question} answer={answer} handleAnswer={handleAnswer} />
    </div>
  );
}