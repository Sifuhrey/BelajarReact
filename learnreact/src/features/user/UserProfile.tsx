import { useUser } from "../context/UserContext";

function UserProfile() {
    const { userName } = useUser();
    return (
        <section className="rounded bg-blue-100 p-4 text-left">
            <h3 className="font-semibold">User profile</h3>
            <p>Name: {userName}</p>
        </section>
    );
}

export default UserProfile;