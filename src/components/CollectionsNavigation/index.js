import React from 'react';

const CollectionNavigation = props => {
  return (
    <aside className="my-collections_aside">
      <ul>
        {props.collections &&
          props.collections.length > 0 &&
          props.collections.map((collection, index) => {
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
                  onClick={e => props.deleteCollection(e, index)}
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
