import Chamber from "./03_Chamber";
export default function Tower({question, answer, handleAnswer}) {
    console.log(question, answer)

    return (
        <div className="flex flex-col justify-center items-center pt-10 bg-orange-500 w=full">
            <h1 className="text-xl text-white">Tower</h1>
            <p className="text-purple-300">
                Message for Secret Room: {" "}
                <span className="text-yellow-300">
                    {question ? `✅${question}` : "⌛Waiting for a message..." }
                </span>
            </p>

            <p className="text-purple-300"> 
                Message for Secret Room: {" "}
                <span className="text-yellow-300">
                    {answer ? `✅${answer}` : "⌛Waiting for a message..."}
                </span>
            </p>
            <Chamber question={question} answer={answer} handleAnswer={handleAnswer} />
        </div>
    );
}