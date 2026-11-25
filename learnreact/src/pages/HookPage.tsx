import { useState } from "react";
import PageLayout from "../components/PageLayout";
import Map, { type Location } from "../features/map/Map";
import SearchBox from "../features/map/SearchBox";
import { ErrorBoundary,getErrorMessage } from "react-error-boundary";


function HookPage() {
  const [location, setLocation] = useState<Location>({
    lat: -6.9214015,
    lon: 107.6111087,
    name: "Bandung",
  });

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
        <SearchBox onLocationSelect={setLocation} />
        <Map location={location} />
      </ErrorBoundary>
        
    </PageLayout>
  )
}

export default HookPage
