import React from 'react';

class Collection extends React.Component {
    constructor(props){
        super(props);
        this.selectCollection = this.selectCollection.bind(this);
    }

    selectCollection(e){
        e.stopPropagation();
        e.preventDefault();
        
        this.props.selectCollection(this.props.collection);
        this.props.showCollections();
    }
    render(){
        return (
            <div>
                <p onClick={this.selectCollection}>{this.props.collection.name}</p>
            </div>   
        )
    }
}

export default Collection;