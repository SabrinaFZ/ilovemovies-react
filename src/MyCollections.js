import React from 'react';

import ListMovies from './components/ListMovies';

import './MyCollections.css';

class MyCollections extends React.Component {
    constructor() {
        super();
        this.state = {
            openCreateCollection: false,
            selectedCollection: 0,
            collectionName: '',
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

        this.setCollectionName = this.setCollectionName.bind(this);
        this.createCollection = this.createCollection.bind(this);
        this.openCreateCollectionForm = this.openCreateCollectionForm.bind(this);
    }

    selectCollection(collectionPosition){
        this.setState({
            selectedCollection: collectionPosition
        })
    }

    setCollectionName(e){
        this.setState({
            collectionName: e.target.value
        });
    }

    createCollection(e){
        e.preventDefault();
        let newCollection = {
            id: this.state.collections.length+1,
            name: this.state.collectionName,
            movies: []
        }
        this.setState(previousState => {
            return {
                collectionName: '',
                collections: [
                    ...previousState.collections,
                    newCollection
                ]
            }
        });
    }

    openCreateCollectionForm(){
        this.setState({
            openCreateCollection: !this.state.openCreateCollection
        })
    }

    render(){
        const {collections, collectionName, openCreateCollection}  = this.state;
        return(
            <main id="my-collections">
                <nav className="my-collections_nav">
                    <button className="my-collections_create" onClick={this.openCreateCollectionForm}>New collection</button>
                    {
                        openCreateCollection && 
                        <form id="my-collections_create-form" onSubmit={this.createCollection}>
                            <input type="text" placeholder="name of collection" value={collectionName} className="my-collections_input" onChange={this.setCollectionName} />
                            <button type="submit" disabled={!collectionName}><i className="fas fa-plus"></i></button>
                        </form>
                    }
                </nav>
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