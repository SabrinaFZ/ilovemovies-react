import React from 'react';

import ListMovies from './components/ListMovies';

import CreateCollection from './components/CreateCollection'

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

        this.createCollection = this.createCollection.bind(this);
    }

    selectCollection(collectionPosition){
        this.setState({
            selectedCollection: collectionPosition
        })
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

    render(){
        const {collections}  = this.state;
        return(
            <main id="my-collections">
                <CreateCollection createCollection={this.createCollection}/>
                <aside className="my-collections_aside">
                    <ul>
                        {
                            collections.length > 0 && collections.map((collection, index) =>{
                                return <li key={collection.id} onClick={this.selectCollection.bind(this, index)}>{collection.name}</li>
                            })
                        }
                    </ul>
                </aside>
                <section className="my-collections_movies">
                    {this.state.collections[this.state.selectedCollection].movies.length > 0 
                        &&  <ListMovies movies={this.state.collections[this.state.selectedCollection].movies} />}
                </section>
            </main>
        )
    }
}

export default MyCollections;