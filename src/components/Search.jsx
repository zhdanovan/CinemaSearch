import React, {useState} from 'react';

const Search = props => {
    const [searchValue, setSearchValue] = useState("");
    
     
const handleSearchInputChange = (e) => {
    setSearchValue(e.target.value);
}

const resetField = () => {
    setSearchValue("");
}

const searchFunction = (e) => {
    e.preventDefault();
    props.search(searchValue);
    resetField();
}

return (
    <form className="search">
        <input
        value={searchValue}
        onChange={handleSearchInputChange}
        type="text"
        />
        <input onClick={searchFunction} type="submit" value="Search" />
    </form>
);
}
export default Search;
