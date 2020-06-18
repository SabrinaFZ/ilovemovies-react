import React, { useState } from 'react';

import ListMovies from '@/components/ListMovies';
import CreateCollection from '@/components/CreateCollection';
import CollectionNavigation from '@/components/CollectionsNavigation';

import AppContext from '@/context';

import './MyCollections.css';

const MyCollections = ({ match }) => {
  const [selectedCollection, setSelectedCollection] = useState(0);
  return (
    <AppContext.Consumer>
      {({ collections, deleteCollection, createCollection }) => (
        <main id="my-collections">
          <CreateCollection createCollection={createCollection} />
          <CollectionNavigation
            selectCollection={setSelectedCollection}
            selectedCollection={selectedCollection}
            collections={collections}
            deleteCollection={deleteCollection}
          />
          <section className="my-collections_movies">
            {collections &&
              collections[selectedCollection] &&
              collections[selectedCollection].movies.length > 0 && (
                <ListMovies
                  movies={collections[selectedCollection].movies}
                  {...match}
                  selectedCollection={selectedCollection}
                />
              )}
          </section>
        </main>
      )}
    </AppContext.Consumer>
  );
};

export default MyCollections;
