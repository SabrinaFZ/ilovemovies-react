import React, { useContext } from 'react';
import AppContext from '@/context';

const Collection = props => {
  const { addFavorite } = useContext(AppContext);

  const selectCollection = e => {
    e.stopPropagation();
    e.preventDefault();
    props.showCollections();
  };

  return (
    <li
      onClick={e => {
        selectCollection(e);
        addFavorite(props.collection, props.movie);
      }}
    >
      {props.collection.name}
    </li>
  );
};

export default Collection;
