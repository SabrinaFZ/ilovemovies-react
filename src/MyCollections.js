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
            collections: [
                {
                    id: '1',
                    name: 'collectioerwerwerwenA',
                    movies: [
                        {
                            id: '1',
                            title: 'Capitan America'
                        },
                        {
                            id: '2',
                            title: 'Capitan America 2'
                        },
                        {
                            id: '3',
                            title: 'Capitan America 3'
                        }
                    ]
                },
                {
                    id: '2',
                    name: 'collectionB',
                    movies: []
                }
            ]
        };

        this.selectCollection = this.selectCollection.bind(this);
        this.createCollection = this.createCollection.bind(this);
        this.deleteCollection = this.deleteCollection.bind(this);
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

    render(){
        const {collections}  = this.state;
        return(
            <main id="my-collections">
                <CreateCollection createCollection={this.createCollection}/>
                <CollectionNavigation collections={collections} selectCollection={this.selectCollection} deleteCollection={this.deleteCollection}/>
                <section className="my-collections_movies">
                    {collections[this.state.selectedCollection] && collections[this.state.selectedCollection].movies.length > 0 
                        &&  <ListMovies movies={collections[this.state.selectedCollection].movies} />}
                </section>
            </main>
        )
    }
}

export default MyCollections;