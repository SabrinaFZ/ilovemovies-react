import React from 'react';

import './../styles/Favorite.css'

class Favorite extends React.Component {
    render(){
        return (
            <div className="movie-section_favorite">
                <p><i className="far fa-star"></i></p>
                {/* <div>
                    <p>Collection A</p>
                    <p>Collection B</p>
                </div> */}
            </div>

        )
    }
}

export default Favorite;