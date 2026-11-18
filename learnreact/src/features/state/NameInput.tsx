type NameInputProps = {
  name: string;
  onNameChange: (name: string) => void;
};

function NameInput({ name, onNameChange }: NameInputProps) {
  
  return (
    <>
      <input
        className="border border-gray-300  bg-white rounded px-4 py-2"
        type="text"
        placeholder="Masukkan nama"
        value={name}
        onChange={(event) => onNameChange(event.target.value)}
      />
    </>
  );
}

export default NameInput;
