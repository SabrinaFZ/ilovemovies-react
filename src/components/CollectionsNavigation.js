import React from 'react';
import AppContext from '../context/AppContext';

const CollectionNavigation = props => {
    return (
        <AppContext.Consumer>
            {
                ({ collections, deleteCollection }) =>
                    <aside className="my-collections_aside">
                        <ul>
                            {
                                collections && collections.length > 0 && collections.map((collection, index) => {
                                    return <li key={collection.id} onClick={() => props.selectCollection(index)}> <span className="my-collections_delete" onClick={(e) => deleteCollection(e, index)}><i className="fas fa-trash-alt"></i></span>{collection.name}</li>
                                })
                            }
                        </ul>
                    </aside>
            }  
        </AppContext.Consumer>
    )  
}

export default CollectionNavigation;