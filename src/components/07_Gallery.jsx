import Nook from "./08_Nook";

export default function Gallery( ) {
  return (
    <div className="mt-5 flex w-11/12 flex-col items-center bg-indigo-500 pt-10">
      <h1 className="text-xl text-white">Gallery</h1>

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

      <Nook />
    </div>
  );
}