import { useState } from "react";

const SearchBar = ({ onClick }) => {
    const [query, setQuery] = useState();

    return (
        <div>
            <input className="form-control"
                onChange={(event) => {
                    setQuery(event.target.value);
                }}
                placeholder="Search Product"
            />
            <button
                onClick={() => onClick(query)}
                className="btn btn-outline-secondary"
            >
                Search
            </button>
        </div>
    );
}

export default SearchBar;