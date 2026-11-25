import { useState } from "react";

function useGeocoding() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const searchAddress = async (query: string) => {
        setLoading(true);
        setError(null);
        try{
            const response = await fetch(
                `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(query)}&format=json&limit=5`,
                {
                    headers: {
                        'User-Agent': 'YourAppName/1.0'
                    }
                }
            );
            if (!response.ok) {
                throw new Error(`Error: ${response.status}`);
            }
            const data = await response.json();
            console.log(data);
            setLoading(false);
            return data;
        }
        catch (error) {
            setLoading(false);
            setError(error instanceof Error ? error.message : String(error));
            return [];
        }
    }
    return { searchAddress, loading, error };
}

export default useGeocoding
