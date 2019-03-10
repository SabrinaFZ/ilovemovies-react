import React from 'react';

import Collection from './Collection';


class ShowCollections extends React.Component {
    render(){
        const {collections} = this.props;
        return(
            <div>
                {
                    collections.map( (collection) => {
                        return <Collection key={collection.id} collection={collection} {...this.props}/>
                    })
                }
            </div>
        )
    }
}

export default ShowCollections;