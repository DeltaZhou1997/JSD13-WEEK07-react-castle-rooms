import Chamber from "./03_Chamber";
export default function Tower({question, answer, handleAnswer}) {
    console.log(question, answer)

    return (
        <div className="mt-5 flex flex-col justify-center items-center pt-10 bg-orange-500 w-11/12">
            <h1 className="text-xl text-yellow-300">Tower</h1>
            <p className="text-purple-300">
                Message for Secret Room: {" "}
                <span className="text-yellow-300">
                    {question ? `✅${question}` : "⌛Waiting for a message..." }
                </span>
            </p>

            <p className="text-purple-300"> 
                Message for Secret Room: {" "}
                <span className="text-white">
                    {answer ? `✅${answer}` : "⌛Waiting for a message..."}
                </span>
            </p>
            <Chamber question={question} answer={answer} handleAnswer={handleAnswer} />
        </div>
    );
}