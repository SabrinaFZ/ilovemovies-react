import React, { useState, useContext } from 'react';
import ListMovies from '@/components/ListMovies';
import CreateCollection from '@/components/CreateCollection';
import CollectionNavigation from '@/components/CollectionsNavigation';
import AppContext from '@/context';
import './MyCollections.css';

const MyCollections = ({ match }) => {
  const [selectedCollection, setSelectedCollection] = useState(0);
  const { collections } = useContext(AppContext);

  return (
    <main id="my-collections">
      <CreateCollection />
      <CollectionNavigation
        selectCollection={setSelectedCollection}
        selectedCollection={selectedCollection}
      />
      <section className="my-collections_movies">
        {collections &&
          collections[selectedCollection] &&
          collections[selectedCollection].movies.length > 0 && (
            <ListMovies
              movies={collections[selectedCollection].movies}
              selectedCollection={selectedCollection}
              {...match}
            />
          )}
      </section>
    </main>
  );
};

export default MyCollections;
