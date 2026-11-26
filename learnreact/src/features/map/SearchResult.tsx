
export type SearchResult = {
    place_id: number;
    lat: string;
    lon: string;
    display_name: string;
};

type SearchResultsProps = {
    results: SearchResult[];
    onSelect: (result: SearchResult) => void;
};

function SearchResults({ results, onSelect }: SearchResultsProps) {
    return (
        <div className="flex w-full flex-col gap-2 rounded text-sm">
            {results.map((result) => (
                <button
                    key={result.place_id}
                    type="button"
                    onClick={() => onSelect(result)}
                    className="cursor-pointer rounded bg-blue-400 p-1 text-left hover:bg-blue-500 md:p-2"
                >
                    {result.display_name}
                </button>
            ))}
        </div>
    );
}

export default SearchResults;