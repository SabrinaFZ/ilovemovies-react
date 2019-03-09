import React from "react";

import ShowCollections from "./ShowCollections";

import "./../styles/Favorite.css";

class Favorite extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            hideCollections: false,
        }

        this.showCollections = this.showCollections.bind(this);
    }

    showCollections() {
        this.setState({
            hideCollections: !this.state.hideCollections
        });
    }

    render(){
        return (
            <div className="movie-section_favorite">
                <p onClick={this.showCollections}>
                    <i className="far fa-star" />
                </p>
                {this.state.hideCollections && <ShowCollections {...this.props} />}
            </div>
        );
    }

}
    
export default Favorite;
    