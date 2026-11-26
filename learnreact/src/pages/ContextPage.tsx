import PageLayout from "../components/PageLayout";
import { UserProvider} from "../features/context/UserContext";
import UserDashboard from "../features/user/UserDashboard";

function ContextPage() {
  return (
    <PageLayout>
      <article className="mx-4 flex max-w-2xl flex-col gap-4 rounded-lg bg-blue-400 p-6 text-center shadow-md">
        <div>
          <h2 className="text-2xl font-bold">Sharing data with Context</h2>
          <p className="mt-2">
            The Provider makes the user name available to components below it.
            Each component can read or update that shared value with useUser
          </p>
        </div>
        <UserProvider>
          <UserDashboard />
        </UserProvider>
      </article>
    </PageLayout>
  );
}

export default ContextPage;
