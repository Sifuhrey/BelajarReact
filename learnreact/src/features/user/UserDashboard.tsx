import UserGreeting from "./UserGreeting";
import UserNameEditor from "./UserNameEditor";
import UserProfile from "./UserProfile";

export default function UserDashboard() {
    return (
        <div className="flex w-full max-w-md flex-col gap-4 rounded-lg bg-blue-300  p-6 shadow">
            <UserNameEditor />
            <UserGreeting />
            <UserProfile />
        </div>
    );
}