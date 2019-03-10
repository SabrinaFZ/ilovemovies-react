import React from 'react';

import ListMovies from './components/ListMovies';

import CreateCollection from './components/CreateCollection';
import CollectionNavigation from './components/CollectionsNavigation';

import './MyCollections.css';

class MyCollections extends React.Component {
    constructor() {
        super();
        this.state = {
            selectedCollection: 0,
            collections: JSON.parse(localStorage.getItem('collections')) || []
        };

        this.selectCollection = this.selectCollection.bind(this);
        this.createCollection = this.createCollection.bind(this);
        this.deleteCollection = this.deleteCollection.bind(this);
        this.deleteMovieFromFavorite = this.deleteMovieFromFavorite.bind(this);
    }

    componentDidUpdate() {
        localStorage.setItem('collections', JSON.stringify(this.state.collections));
    }

    selectCollection(collectionPosition){
        this.setState({
            selectedCollection: collectionPosition
        });
    }

    createCollection(e, collectionName){
        e.preventDefault();
        let newCollection = {
            id: this.state.collections.length+1,
            name: collectionName,
            movies: []
        }

        this.setState(previousState => {
            return {
                collections: [
                    ...previousState.collections,
                    newCollection
                ]
            }
        });    
    }

    deleteCollection(e, collectionPosition){
        e.stopPropagation();
        let collectionsCopy = [...this.state.collections];
        collectionsCopy.splice(collectionPosition, 1);
        this.setState({
            collections: [
                ...collectionsCopy,
            ]
        });
    }

    deleteMovieFromFavorite(moviePosition) {
        this.setState(previousState => {
            let newCollection = [...previousState.collections];
            newCollection[this.state.selectedCollection].movies.splice(moviePosition, 1);
            return {
                collections: [...previousState.collections]
            }
        });
    }

    render(){
        const { collections } = this.state;
        const {match} = this.props;
        return(
            <main id="my-collections">
                <CreateCollection createCollection={this.createCollection}/>
                <CollectionNavigation collections={collections} selectCollection={this.selectCollection} deleteCollection={this.deleteCollection}/>
                <section className="my-collections_movies">
                    {collections && collections[this.state.selectedCollection] && collections[this.state.selectedCollection].movies.length > 0 
                        && <ListMovies movies={collections[this.state.selectedCollection].movies} {...match} deleteFavorite={this.deleteMovieFromFavorite}/>}
                </section>
            </main>
        )
    }
}

export default MyCollections;