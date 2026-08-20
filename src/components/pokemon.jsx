import { useState, useEffect } from "react";

export default function Pokemon({ name }) {
  const [imageUrl, setImageUrl] = useState("");

  const [displayName, setDisplayName] = useState(name);

  useEffect (( ) => {
    if (!name) return;
    // ยิง API ไปดึงข้อมูลตามชื่อโปเกมอนที่ส่งมา
    fetch(`https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`)
      .then((response) => response.json())
      .then((data) => {
        // ใช้รูป front_default ซึ่งเป็นรูปด้านหน้าปกติ
        setImageUrl(data.sprites.front_default);

        setDisplayName(data.name);
      })
      .catch((error) => console.error("Error fetching Pokemon:", error));
  }, [name]);

  return (
    <div className="flex flex-col items-center">
      {imageUrl ? (
        <img src={imageUrl} alt={name} className="w-16 h-16 animate-bounce" />
      ) : (
        <div className="w-16 h-16 flex items-center justify-center text-xs text-gray-400">
          Loading...
        </div>
      )}
      <p className="text-sm capitalize">{displayName}</p>
    </div>
  );
}