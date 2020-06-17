import React from 'react';

import ListMovies from '../../components/ListMovies';

import CreateCollection from '../../components/CreateCollection';
import CollectionNavigation from '../../components/CollectionsNavigation';

import './MyCollections.css';
import AppContext from '../../context/AppContext';

class MyCollections extends React.Component {
  constructor() {
    super();
    this.state = {
      selectedCollection: 0
    };

    this.selectCollection = this.selectCollection.bind(this);
  }

  selectCollection(collectionPosition) {
    this.setState({
      selectedCollection: collectionPosition
    });
  }

  render() {
    const { match } = this.props;
    return (
      <AppContext.Consumer>
        {({ collections }) => (
          <main id="my-collections">
            <CreateCollection />
            <CollectionNavigation
              selectCollection={this.selectCollection}
              selectedCollection={this.state.selectedCollection}
            />
            <section className="my-collections_movies">
              {collections &&
                collections[this.state.selectedCollection] &&
                collections[this.state.selectedCollection].movies.length >
                  0 && (
                  <ListMovies
                    movies={collections[this.state.selectedCollection].movies}
                    {...match}
                    selectedCollection={this.state.selectedCollection}
                  />
                )}
            </section>
          </main>
        )}
      </AppContext.Consumer>
    );
  }
}

export default MyCollections;
