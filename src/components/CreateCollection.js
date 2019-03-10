import React from 'react';

class CreateCollection extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            openCreateCollection: false,
            collectionName: '',
        }
        this.setCollectionName = this.setCollectionName.bind(this);
        this.openCreateCollectionForm = this.openCreateCollectionForm.bind(this);
        this.createCollection = this.createCollection.bind(this);
    }

    createCollection(e){
        this.props.createCollection(e, this.state.collectionName);
        this.setState({
            collectionName: '',
            openCreateCollection: false
        });
    }

    setCollectionName(e) {
        this.setState({
            collectionName: e.target.value
        });
    }

    openCreateCollectionForm() {
        this.setState({
            openCreateCollection: !this.state.openCreateCollection
        })
    }

    render(){
        const { collectionName, openCreateCollection } = this.state;
        return(
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
        )
    }
}

export default CreateCollection;