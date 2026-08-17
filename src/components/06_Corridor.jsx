import Gallery from "./07_Gallery";
export default function Corridor({ question, answer, handleAnswer }) {

  return (
    <div className="mt-5 flex w-11/12 flex-col items-center bg-blue-500 pt-10">
      <h1 className="text-xl text-white">Corridor</h1>

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

      <Gallery question={question} answer={answer} handleAnswer={handleAnswer} />
    </div>
  );
}