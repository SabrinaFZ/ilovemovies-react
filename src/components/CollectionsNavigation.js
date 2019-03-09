import React from 'react';

const CollectionNavigation = props => {
    const { collections } = props;
    return (
        <aside className="my-collections_aside">
            <ul>
                {
                    collections.length > 0 && collections.map((collection, index) => {
                        return <li key={collection.id} onClick={() => props.selectCollection(index)}>{collection.name}</li>
                    })
                }
            </ul>
        </aside>
    )  
}

export default CollectionNavigation;