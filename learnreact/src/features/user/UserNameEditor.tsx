import {useUser} from "../context/UserContext";

function UserNameEditor() {
  const { userName, setUserName } = useUser();

  return (
    <label className="flex flex-col gap-2 text-left">
      <span className="font-semibold">Edit user name</span>
      <input
        className="rounded border border-blue-300 bg-white px-3 py-2"
        value={userName}
        onChange={(event) => setUserName(event.target.value)}
        aria-label="Edit user name"
      />
    </label>
  );
}

export default UserNameEditor;