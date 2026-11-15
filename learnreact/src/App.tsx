import "./App.css";
import Card from "./Card.tsx";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(20);
  const [name, setName] = useState("A");
  const [liked, setLiked] = useState(false);
  function addAge() {
    setCount(count + 1);
  }
  function decreaseAge() {
    setCount(count - 1);
  }
  function changeName(e: React.ChangeEvent<HTMLInputElement>) {
    setName(e.target.value);
  }
  function handleLike(e: React.ChangeEvent<HTMLInputElement>) {
    setLiked(e.target.checked);
  }
  return (
    <main className="bg-yellow-300 h-lvh flex flex-col items-center justify-center gap-7">
      <h1>This is a simple React app</h1>

      <section className="bg-yellow-600 p-20 w-3/4 max-h-3/4 mt-10 rounded shadow-md flex flex-col items-center justify-center gap-5">
        <div className="flex flex-row items-center justify-center">
          <Card
            title="State"
            description="State is data a component owns and can update over time. When state changes, React renders the component again. Use state for things that change through interaction, such as a counter value or whether a menu is open."
          />
          <Card
            title="Props"
            description="Props are read-only values passed to a component. They are used to pass data from a parent component to a child component. Props are immutable, meaning they cannot be changed by the child component."
          />
        </div>
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
        <input
          className="border border-gray-300  bg-white rounded px-4 py-2"
          type="text"
          placeholder="Masukkan nama"
          value={name}
          onChange={changeName}
        />
        <label>
          <input type="checkbox" checked={liked} onChange={handleLike} />I
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
      </section>
    </main>
  );
}

// We export the App component as the default export from this file.
// This allows it to be imported and used in other files, primarily 'src/main.jsx'.
export default App;
