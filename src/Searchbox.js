import React from 'react';

const Searchbox = ({searchChange}) => {
    return(
        <form>
            <input type='search' placeholder='Search robots' onChange={searchChange}/>
        </form>
    );
}

export default Searchbox;