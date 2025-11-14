import { useState } from 'react';

export default function SearchBar({ onSearch }) {
    const [text, setText] = useState("");

    const handleChange = (e) => {
        setText(e.target.value);
        onSearch(e.target.value);
    };

    return (
        <div>
            <label htmlFor="search">Buscar Normas:</label>
            <input
            id="search"
            type="text"
            placeholder="Buscar por nombre o categoría..."
            value={text}
            onChange={handleChange}
            />
        </div>
    );
}