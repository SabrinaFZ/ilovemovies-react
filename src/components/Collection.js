import React from 'react';

class Collection extends React.Component {
    constructor(props){
        super(props);
        this.selectCollection = this.selectCollection.bind(this);
    }

    selectCollection(){
        this.props.selectCollection(this.props.collection);
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