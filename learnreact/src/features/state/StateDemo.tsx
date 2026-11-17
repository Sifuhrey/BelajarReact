import { useState } from "react";
import NameInput from "./NameInput";

function StateComponent() {
  const [count, setCount] = useState(20);
  const [name, setName] = useState("");
  const [liked, setLiked] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  function decreaseAge() {
    setCount(count - 1);
  }
  function handleLike(e: React.ChangeEvent<HTMLInputElement>) {
    setLiked(e.target.checked);
  }
  function addAge() {
    setCount(count + 1);
  }

  return (
    <>
      <div
        className="h-16 w-96 bg-red-500 hover:bg-green-500 text-amber-50 p-4 rounded border flex items-center justify-center"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {isHovered
          ? "Kursor anda berada di kotak ini."
          : "Kursor anda tidak berada di kotak ini."}
      </div>
      <div className="flex flex-row gap-4">
        {" "}
        <button
          className="bg-gray-500 rounded px-4 py-2 text-white hover:bg-gray-600"
          onClick={addAge}
        >
          Tambah Usia
        </button>
        <button
          className="bg-gray-500 rounded px-4 py-2 text-white hover:bg-gray-600"
          onClick={decreaseAge}
        >
          Kurangi Usia
        </button>
      </div>

      <NameInput name={name} onNameChange={setName} />
      <label>
        <input type="checkbox" checked={liked} onChange={handleLike} /> I
        understand this
      </label>

      {name !== "" && (
        <>
          <p>
            Umur {name} adalah {count} tahun.
          </p>
          <p>
            The user {name} has {liked ? "understood" : "not understood"} this.
          </p>
        </>
      )}
    </>
  );
}
export default StateComponent;
