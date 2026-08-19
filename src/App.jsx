import { useState, useEffect } from "react";
import Castle from "./components/01_Castle";
import Pokemon from "./components/Pokemon"; // นำเข้า Component โปเกมอนที่เพิ่งสร้าง

export default function App() {
  const [question, setQuestion] =useState ("");
  const [answer, setAnswer] =useState ("");
  const [rescuePhase, setRescuePhase] = useState(0); 
  const [progress, setProgress] = useState(0);
  
  const handleQuestion = (e) => {
    console.log (e);
    setQuestion (e.target.value);
  };

  const handleAnswer = (e) => {
    setAnswer(e.target.value);
  }

  useEffect(() => {
    if (answer.toLowerCase().includes("help") && rescuePhase === 0) {
      setRescuePhase(1); // เปลี่ยนด่านเพื่อโชว์ปุ่มสีฟ้า
    }
  }, [answer, rescuePhase]);

  // จำลองการโหลดเปอร์เซ็นต์สร้างยาน (เมื่ออยู่ Phase 3)
  useEffect(() => {
    if (rescuePhase === 3) {
      const interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            setRescuePhase(4); // โหลดเสร็จขยับไป Phase 4
            return 100;
          }
          return prev + 10;
        });
      }, 300);
    }
  }, [rescuePhase]);

  return (

    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-800 text-white pb-80 py-10 gap-y-4">

      {/* ================= ส่วนของเกม (ด้านนอกปราสาท) ================= */}
      <div className="flex flex-col items-center mb-10 min-h-40">
        
        {/* Phase 0 และ 1: โชว์ปิกาจูตัวเดียว */}
        {rescuePhase <= 1 && <Pokemon name="pikachu" />}

        {/* Phase 2 และ 3: โชว์เพื่อนๆ */}
        {rescuePhase >= 2 && rescuePhase <= 3 && (
          <div className="flex gap-4">
            <Pokemon name="pikachu" />
            <Pokemon name="bulbasaur" />
            <Pokemon name="charmander" />
            <Pokemon name="squirtle" />
          </div>
        )}

        {/* Phase 4 ขึ้นไป: โชว์เพื่อนๆ ในยาน */}
        {rescuePhase >= 4 && rescuePhase < 7 && (
          <div className="border-2 border-yellow-400 p-4 rounded-xl flex gap-4 mt-4 bg-gray-900">
            <Pokemon name="pikachu" />
            <Pokemon name="bulbasaur" />
            <Pokemon name="charmander" />
            <Pokemon name="squirtle" />
          </div>
        )}

        {/* ปุ่มสีฟ้า Phase 1 */}
        {rescuePhase === 1 && (
          <button 
            onClick={() => setRescuePhase(2)} 
            className="mt-4 bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded font-bold border-2 border-blue-400 shadow-[0_0_10px_rgba(59,130,246,0.8)]"
          >
            Call for Reinforcements!!
          </button>
        )}

        {/* ปุ่มสีเขียว Phase 2 */}
        {rescuePhase === 2 && (
          <button 
            onClick={() => setRescuePhase(3)} 
            className="mt-4 bg-green-500 hover:bg-green-600 px-4 py-2 rounded font-bold border-2 border-green-400 shadow-[0_0_10px_rgba(34,197,94,0.8)]"
          >
            Build Escape Pod!
          </button>
        )}

        {/* หลอดโหลด Phase 3 */}
        {rescuePhase === 3 && (
          <div className="mt-4 flex flex-col items-center border-2 border-yellow-400 p-4 rounded-xl bg-gray-900">
            <p className="text-yellow-400 font-bold mb-2">Building Escape Pod...</p>
            {/* Custom Progress Bar แทนของเดิมให้สวยขึ้น */}
            <div className="w-48 h-4 bg-gray-700 rounded-full overflow-hidden border border-gray-600">
               <div className="h-full bg-yellow-400 transition-all duration-300" style={{ width: `${progress}%` }}></div>
            </div>
            <p className="mt-2 font-bold text-white">{progress}%</p>
          </div>
        )}
      </div>
      {/* ========================================================== */}

      <p className="text-purple-300">
        Message for Secret Room: {" "}
        <span className="text-yellow-300">
          {question ?  `✅${question}`: "⌛Waiting for a message..."}
        </span>
      </p>
      
      <textarea 
      value={question} 
      onChange={handleQuestion}
      className="bg-white text-black rounded px-2 py-1"
      placeholder="Type your message here..."
       />
      
      <p className="text-green-300">
        Reply from Secret Room :{" "}
        <span className="text-yellow-300">
          {answer ? `✅ ${answer}` : "⏳ Waiting for a reply...."}
        </span>
      </p>

      <Castle question={question} answer={answer} handleAnswer={handleAnswer}/>
    </div>
  );
}
