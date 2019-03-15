import React from 'react';
import AppContext from '../context/AppContext';

const Collection = (props) => {    
    
    return (
        <AppContext.Consumer>
            {
                ({ addFavorite }) =>
                    <div>
                        <p onClick={(e) => {
                            selectCollection(e, props);
                            addFavorite(props.collection, props.movie)
                        }}>{props.collection.name}</p>
                    </div>
            }
        </AppContext.Consumer>

    )
}

const selectCollection = (e, props) =>{
    e.stopPropagation();
    e.preventDefault();

    props.showCollections();
}
    
    export default Collection;