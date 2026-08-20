import Room from "./04_Room";
export default function Chamber({ question, answer, handleAnswer, rescuePhase, setRescuePhase, prisonerId}) {

  return (
    <div className="mt-5 flex w-11/12 flex-col items-center bg-yellow-400 pt-10">
      <h1 className="text-xl text-white">Chamber</h1>
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

      <Room question={question} answer={answer} handleAnswer={handleAnswer} rescuePhase={rescuePhase} setRescuePhase={setRescuePhase} prisonerId={prisonerId}/>
    </div>
  );
}