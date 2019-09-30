import React from 'react';

import './SearchBox.styles.css';

export const SearchBox = props => {
    const {onSearchChange, placeholder} = props;

    return(
        <input
            className='search'
            type='search'
            placeholder={placeholder}
            onChange={onSearchChange}
        />
    );
};