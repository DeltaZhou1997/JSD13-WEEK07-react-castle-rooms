import Chamber from "./03_Chamber";
export default function Tower({question, answer, handleAnswer, rescuePhase, setRescuePhase, prisonerId}) {
    console.log(question, answer)

    return (
        <div className="mt-5 flex flex-col justify-center items-center pt-10 bg-orange-500 w-11/12"> 
        {/* w-11/12 คือ ความกว้างสัดส่วน 11 ใน 12 */}
            <h1 className="text-xl text-white">Tower</h1>
            {/* <p className="text-purple-300">
                Message for Secret Room: {" "}
                <span className="text-yellow-300">
                    {question ? `✅${question}` : "⌛Waiting for a message..." }
                </span>
            </p> */}

            {/* <p className="text-purple-300"> 
                Message for Secret Room: {" "}
                <span className="text-white">
                    {answer ? `✅${answer}` : "⌛Waiting for a message..."}
                </span>
            </p> */}
            <Chamber question={question} answer={answer} handleAnswer={handleAnswer} rescuePhase={rescuePhase} setRescuePhase={setRescuePhase} prisonerId={prisonerId}/>
        </div>
    );
}