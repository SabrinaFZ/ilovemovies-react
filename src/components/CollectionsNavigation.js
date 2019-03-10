import React from 'react';

const CollectionNavigation = props => {
    const { collections } = props;
    return (
        <aside className="my-collections_aside">
            <ul>
                {
                    collections && collections.length > 0 && collections.map((collection, index) => {
                        return <li key={collection.id} onClick={() => props.selectCollection(index)}> <span className="my-collections_delete" onClick={(e) => props.deleteCollection(e, index)}><i className="fas fa-trash-alt"></i></span>{collection.name}</li>                       
                    })
                }
            </ul>
        </aside>
    )  
}

export default CollectionNavigation;