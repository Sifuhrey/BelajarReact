import { useUser } from "../context/UserContext";

function UserGreeting() {
  const { userName } = useUser();

  return <p className="text-lg">Hello, {userName}!</p>;
}

export default UserGreeting;