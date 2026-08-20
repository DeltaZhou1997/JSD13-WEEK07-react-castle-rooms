import Tower from "./02_Tower";
export default function Castle({question, answer, handleAnswer, rescuePhase, setRescuePhase, prisonerId}) {
    console.log(question, answer, handleAnswer)
    
    return (
        <div className="mt-5 flex flex-col justify-center items-center pt-10 bg-red-500 w-full">
            <h1 className="text-xl text-white">Castle</h1>
            {/* <p className = "text-purple-300">
                Message for Secret Room: {" "}
                <span className = "text-yellow-300">
                    {question ? `✅${question}` : "⌛Waiting for a message..."}
                </span>
            </p> */}

            {/* <p className = "text-purple-300">
                 Message for Secret Room: {" "}
                 <span className="text-yellow-300">
                     {answer ? `✅${answer}` : "⌛Waiting for a message..."}
                 </span>
            </p> */}

            <Tower question={question} answer={answer} handleAnswer={handleAnswer} rescuePhase={rescuePhase} setRescuePhase={setRescuePhase} prisonerId={prisonerId}/>
        </div>
    );
}