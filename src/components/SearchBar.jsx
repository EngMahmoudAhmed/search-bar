import React from 'react';
import "./searchBar.css"

const SearchBar = () => {
    return (
        <div className='input-wrapper'>
            <i className='fas fa-search'></i>
            <input className='w-100 ' placeholder='type of search'/>
        </div>
    );
}

export default SearchBar;
