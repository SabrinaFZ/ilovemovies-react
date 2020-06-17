import React from 'react';

import ShowCollections from './ShowCollections';

import './../styles/Favorite.css';
import AppContext from '../context/AppContext';

class Favorite extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hideCollections: false
    };

    this.showCollections = this.showCollections.bind(this);
  }

  showCollections(e) {
    if (e) {
      e.preventDefault();
    }

    if (!this.props.favorite) {
      this.setState({
        hideCollections: !this.state.hideCollections
      });
    }
  }

  render() {
    return (
      <AppContext.Consumer>
        {({ deleteAllMoviesFavorite }) => (
          <div className="movie-section_favorite">
            <button
              className="movie-section_button"
              onClick={e => {
                this.showCollections(e);
                if (this.props.favorite) {
                  deleteAllMoviesFavorite(this.props.movie);
                }
              }}
            >
              {this.props.favorite ? (
                <i className="fas fa-star" />
              ) : (
                <i className="far fa-star"></i>
              )}
            </button>
            {this.state.hideCollections && !this.props.favorite && (
              <ShowCollections
                showCollections={this.showCollections}
                movie={this.props.movie}
              />
            )}
          </div>
        )}
      </AppContext.Consumer>
    );
  }
}

export default Favorite;
