import React, { useContext } from 'react';
import AppContext from '@/context';

const CollectionNavigation = props => {
  const { collections, deleteCollection } = useContext(AppContext);

  return (
    <aside className="my-collections_aside">
      <ul>
        {collections &&
          collections.length > 0 &&
          collections.map((collection, index) => {
            return (
              <li
                className={
                  index === props.selectedCollection
                    ? 'my-collections-nav--active '
                    : ''
                }
                key={collection.id}
                onClick={() => props.selectCollection(index)}
              >
                {' '}
                <span
                  className="my-collections_delete"
                  onClick={e => deleteCollection(e, index)}
                >
                  <i className="fas fa-trash-alt"></i>
                </span>
                {collection.name}
              </li>
            );
          })}
      </ul>
    </aside>
  );
};

export default CollectionNavigation;
