import { useState } from "react";

function Name() {
  const [name, setName] = useState("");

  function changeName(e: React.ChangeEvent<HTMLInputElement>) {
    setName(e.target.value);
  }

  return (
    <>
      <input
        className="border border-gray-300  bg-white rounded px-4 py-2"
        type="text"
        placeholder="Masukkan nama"
        value={name}
        onChange={changeName}
      />
      <p>Nama: {name}</p>
    </>
  );
}
export default Name;
