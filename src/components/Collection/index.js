import React from 'react';

const Collection = props => {
  const selectCollection = e => {
    e.stopPropagation();
    e.preventDefault();
    props.showCollections();
  };

  return (
    <li
      onClick={e => {
        selectCollection(e);
        props.addFavorite(props.collection, props.movie);
      }}
    >
      {props.collection.name}
    </li>
  );
};

export default Collection;
