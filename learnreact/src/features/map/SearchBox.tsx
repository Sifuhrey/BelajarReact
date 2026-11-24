import { useState } from 'react';
import useGeocoding from './useGeocoding';

type Location = {
    lat: number;
    lon: number;
    name: string;
};

type SearchResult = {
    place_id: number;
    lat: string;
    lon: string;
    display_name: string;
};

type SearchBoxProps = {
    onLocationSelect: (location: Location) => void;
};

function SearchBox({ onLocationSelect }: SearchBoxProps) {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState<SearchResult[]>([]);
    const { searchAddress, loading } = useGeocoding();

    const handleSearch = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!query.trim()) return;

        const data = await searchAddress(query);
        setResults(data);
    };

    const selectLocation = (result: SearchResult) => {
        onLocationSelect({
            lat: parseFloat(result.lat),
            lon: parseFloat(result.lon),
            name: result.display_name,
        });
    };

    return (
        <div className= "flex flex-col items-center gap-4 p-4">
            <form onSubmit={handleSearch} className="flex gap-2">
                <input
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search location"
                    className="border p-2 rounded bg-white"
                />
                <button type="submit" className="bg-gray-300 border-black p-2 rounded">
                    {loading ? 'Searching...' : 'Search'}
                </button>
            </form>

            <div className="flex flex-col gap-2 w-full max-w-md bg-blue-200 p-4 rounded shadow">
                {results.map((result) => (
                    <div key={result.place_id} onClick={() => selectLocation(result)} className="cursor-pointer hover:bg-blue-300 p-4 rounded">
                        {result.display_name}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default SearchBox;