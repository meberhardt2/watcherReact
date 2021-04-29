import React, { useState, createContext } from "react";

// Create Context object
export const SearchResultsContext = createContext();

// Create a provider for components to consume and subscribe to changes
export const SearchResultsContextProvider = props => {
    const [searchResults, setSearchResults] = useState([]);

    //const [searchResults, setSearchResults] = useState([1]);

    return (
        <SearchResultsContext.Provider value={[searchResults, setSearchResults]}>
            {props.children}
        </SearchResultsContext.Provider>
    );
};
