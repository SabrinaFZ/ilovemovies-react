import React from 'react';

import Collection from './Collection';
import AppContext from '../context/AppContext';

const ShowCollections = (props) => {

    return (
        <AppContext.Consumer>
            {({ collections }) => (
                <div>
                    {collections.map(collection => {
                        return (
                            <Collection
                                key={collection.id}
                                collection={collection}
                                {...props}
                            />

                        );
                    })}
                </div>
            )}
        </AppContext.Consumer>
    );
}
    
            
export default ShowCollections;