
import PageLayout from "../components/PageLayout";
import Map from "../features/map/Map";

import { ErrorBoundary,getErrorMessage } from "react-error-boundary";
import SearchResult from "../features/map/SearchResult";
import { useMapStore } from "../features/map/mapStore";



function HookPage() {
  const location = useMapStore((state) => state.location);

  return (
    <PageLayout>
      <ErrorBoundary
        fallbackRender={({ error, resetErrorBoundary }) => (
          <div role="alert">
            <p>Something went wrong:</p>
            <pre>{getErrorMessage(error)}</pre>
            <button onClick={resetErrorBoundary}>Try again</button>
          </div>
        )}
        onError={(error, info) => {
          console.error("ErrorBoundary caught an error", error, info);
        }}
        >
        <SearchResult />
        <Map location={location} />
      </ErrorBoundary>
        
    </PageLayout>
  )
}

export default HookPage
