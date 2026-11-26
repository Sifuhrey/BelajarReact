// SearchForm.tsx
import { useState, type FormEvent } from 'react';

type SearchFormProps = {
    loading: boolean;
    onSearch: (query: string) => void;
};

function SearchForm({ loading, onSearch }: SearchFormProps) {
    const [query, setQuery] = useState('');

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (query.trim()) onSearch(query);
    };

    return (
        <form onSubmit={handleSubmit} className="flex items-center gap-2">
            <label htmlFor="location-search">Search Location:</label>
            <input
                id="location-search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search location"
                className="rounded border bg-white p-2"
            />
            <button type="submit" className="rounded border border-black bg-gray-300 p-2">
                {loading ? 'Searching...' : 'Search'}
            </button>
        </form>
    );
}

export default SearchForm;