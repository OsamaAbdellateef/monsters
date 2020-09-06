import React from 'react';
import './filter-box.style.css'

export const FilterBox = ({ placeholder, handleChange }) => (
    <input
        className="search"
        type="search"
        placeholder={placeholder}
        onChange={handleChange}
    />
)
