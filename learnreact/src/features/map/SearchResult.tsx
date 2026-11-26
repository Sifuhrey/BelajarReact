import { useMapStore } from "./mapStore";

export type SearchResult = {
    place_id: number;
    lat: string;
    lon: string;
    display_name: string;
};

function SearchResult() {
    const results = useMapStore((state) => state.results);
    const setLocation = useMapStore((state) => state.setLocation);

    const handleSelect = (result: SearchResult) => {
        setLocation({
            lat: parseFloat(result.lat),
            lon: parseFloat(result.lon),
            name: result.display_name,
        });
    };

    return (
        <div className="flex w-full flex-col gap-2 m-2 rounded text-sm">
            {results.map((result) => (
                <button
                    key={result.place_id}
                    type="button"
                    onClick={() => handleSelect(result)}
                    className="cursor-pointer rounded bg-blue-400 p-1 mx-10 text-left hover:bg-blue-500 md:p-2"
                >
                    {result.display_name}
                </button>
            ))}
        </div>
    );
}

export default SearchResult;