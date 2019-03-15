import React from "react";

import ShowCollections from "./ShowCollections";

import "./../styles/Favorite.css";

class Favorite extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            hideCollections: false
        }

        this.showCollections = this.showCollections.bind(this);
    }

    showCollections(e) {
        if(e){
            e.preventDefault();
        }
    
        this.setState({
            hideCollections: !this.state.hideCollections
        });
    }

    render(){
        return (
            <div className="movie-section_favorite">
                <button className="movie-section_button" onClick={this.showCollections} disabled={this.props.favorite}>
                    {this.props.favorite ? (
                        <i className="fas fa-star" />
                    ) : (
                            <i className="far fa-star"></i>
                        )}    
                </button>
                {this.state.hideCollections && <ShowCollections showCollections={this.showCollections} movie={this.props.movie}/>}
            </div>
        );
    }

}
    
export default Favorite;
    