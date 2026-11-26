// SearchBox.tsx
import { useState } from 'react';
import useGeocoding from './useGeocoding';
import SearchForm from './SearchForm';
import SearchResults, { type SearchResult } from './SearchResult';

type Location = {
    lat: number;
    lon: number;
    name: string;
};

type SearchBoxProps = {
    onLocationSelect: (location: Location) => void;
};

function SearchBox({ onLocationSelect }: SearchBoxProps) {
    const [results, setResults] = useState<SearchResult[]>([]);
    const { searchAddress, loading } = useGeocoding();

    const handleSearch = async (query: string) => {
        setResults(await searchAddress(query));
    };

    const handleSelect = (result: SearchResult) => {
        onLocationSelect({
            lat: parseFloat(result.lat),
            lon: parseFloat(result.lon),
            name: result.display_name,
        });
    };

    return (
        <div className="flex flex-col items-center gap-4 p-2">
            <SearchForm loading={loading} onSearch={handleSearch} />
            <SearchResults results={results} onSelect={handleSelect} />
        </div>
    );
}

export default SearchBox;