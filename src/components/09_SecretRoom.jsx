import Pokemon from "./Pokemon";

export default function SecretRoom ({question, answer, handleAnswer, rescuePhase, setRescuePhase, prisonerId}) {
    console.log("Current rescuePhase type:", typeof rescuePhase, "Value:", rescuePhase);

    return (
        <div className="flex flex-col justify-center items-center pt-10 rounded-xl bg-gray-700 w-[90%]">
            <h1 className="text-xl text-white">Secret Room</h1>

            {/* ================= ส่วนของเกม (ด้านในห้องลับ) ================= */}
            <div className="flex flex-col items-center w-full">
                
                {/* กล่องขังนักโทษ (แสดงตั้งแต่เริ่ม จนกว่าจะหนีสำเร็จใน Phase 7) */}
                {rescuePhase < 6 ? ( //เปลี่ยนเป็น < 6 เพื่อให้ออกจากกรงตอน Phase 6
                    <div className="border-2 border-pink-500 p-8 rounded-md mb-6 flex flex-col items-center bg-gray-600">
                        <p className="text-red-300 mb-2 font-bold">A prisoner is trapped here!</p>
                        <div className="bg-gray-800 p-4 rounded-full border-2 border-dashed border-gray-400 mb-2">
                           <Pokemon name={prisonerId.toString()} />
                        </div>
                    </div>
                ) : (
                    // Phase 7: หนีสำเร็จ
                    <div className="mb-6 flex flex-col items-center">
                        <p className="text-green-400 text-2xl font-bold animate-bounce text-center">
                            🎉 The prisoner has escaped! 🎉
                        </p>
                    </div>
                )}

                {/* Phase 4: ข้อความกระพริบ และปุ่มสีม่วงเรียกยาน */}
                {rescuePhase === 4 && (
                    <div className="flex flex-col items-center mb-6">
                        <p className="animate-pulse text-purple-300 mb-2 font-bold">
                            Your sense... a pod is ready!
                        </p>
                        <button 
                            onClick={() => setRescuePhase(5)} 
                            className="bg-purple-600 hover:bg-purple-700 px-6 py-2 rounded font-bold text-white border-2 border-purple-400 shadow-[0_0_10px_rgba(147,51,234,0.8)]"
                        >
                            Call the Pod!
                        </button>
                    </div>
                )}

                {/* Phase 5: ยานเข้ามาในห้องลับ (โชว์โปเกมอน) + ปุ่มสีฟ้า */}
                {rescuePhase === 5 && (
                    <div className="flex flex-col items-center mb-6 w-[90%]">
                        <div className="border-2 border-yellow-400 p-4 rounded-xl mb-4 bg-gray-800 text-center w-full">
                            <p className="text-yellow-400 mb-4 font-bold">The Escape Pod is here!</p>
                            <div className="flex gap-4 justify-center flex-wrap">
                                <Pokemon name="pikachu" />
                                <Pokemon name="bulbasaur" />
                                <Pokemon name="charmander" />
                                <Pokemon name="squirtle" />
                            </div>
                        </div>
                        <button 
                            onClick={() => setRescuePhase(6)} 
                            className="bg-blue-500 hover:bg-blue-600 px-6 py-2 rounded font-bold text-white border-2 border-blue-400 shadow-[0_0_10px_rgba(59,130,246,0.8)]"
                        >
                            Enter the Pod!
                        </button>
                    </div>
                )}

                {/* Phase 6: กำลังขึ้นยาน + ปุ่มสีเหลือง */}
                {rescuePhase === 6 && ( 
                    <div className="flex flex-col items-center mb-6">
                        <div className="border-2 border-pink-500 p-8 rounded-md mb-4 flex flex-col items-center bg-gray-600 opacity-50">
                           <p className="text-gray-300 font-bold">Entering the pod...</p>
                           <div className="flex gap-4 items-center flex-wrap justify-center">
                               <Pokemon name="pikachu" />
                                <Pokemon name="bulbasaur" />
                                <Pokemon name="charmander" />
                                <Pokemon name="squirtle" />
                                <Pokemon name={prisonerId.toString()} />
                           </div>
                        </div>
                        
                        <button 
                            onClick={() => setRescuePhase(7)} 
                            className="bg-yellow-500 hover:bg-yellow-600 text-black px-6 py-2 rounded font-bold border-2 border-yellow-300 shadow-[0_0_10px_rgba(234,179,8,0.8)]"
                        >
                            Transport Outside!
                        </button>
                    </div>
                )}

            </div>

            <p className="text-purple-300">
                Message from the outside: {" "}
                <span>
                    {question ? `✅${question}` : "⌛Waiting for a message..."}
                </span>
            </p>
            
            <textarea
             value={answer}
             onChange={handleAnswer}
             className="bg-white text-black rounded px-2 py-1"
             placeholder="Type your message here...."
             />
             
             <p className="text-green-300">
                Reply to the outside: {" "}
                <span className="text-yellow-300">
                       {answer ? `✅ ${answer}` : "⏳ Waiting for a reply...."}
                </span>
             </p>

        </div>
    );
}