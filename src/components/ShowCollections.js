import React from 'react';
import Modal from 'react-modal';
import { Link } from 'react-router-dom';

import Collection from './Collection';
import AppContext from '../context/AppContext';

const customStyles = {
  content: {
    padding: '0',
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  }
};
class ShowCollections extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      openModal: false
    };

    this.closeModal = this.closeModal.bind(this);
  }

  componentDidMount() {
    this.setState({
      openModal: true
    });
  }

  closeModal(e) {
    e.stopPropagation();
    this.setState({
      openModal: false
    });
    this.props.showCollections();
  }

  render() {
    return (
      <AppContext.Consumer>
        {({ collections }) => (
          <div className="modal">
            <Modal
              isOpen={this.state.openModal}
              onRequestClose={this.closeModal}
              ariaHideApp={false}
              style={customStyles}
            >
              <header className="modal-header">
                <h2>Select a collection</h2>
              </header>
              <div className="modal-body">
                <ul>
                  {collections.map(collection => {
                    return (
                      <Collection
                        key={collection.id}
                        collection={collection}
                        {...this.props}
                      />
                    );
                  })}
                  <Link style={{ textDecoration: 'none' }} to="/my-collections">
                    <li>
                      <p>
                        <i className="fas fa-plus"></i> Create a new collection
                      </p>
                    </li>
                  </Link>
                </ul>
              </div>
            </Modal>
          </div>
        )}
      </AppContext.Consumer>
    );
  }
}

export default ShowCollections;
