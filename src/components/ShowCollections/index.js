import React, { useState, useContext } from 'react';
import Modal from 'react-modal';
import { Link } from 'react-router-dom';
import Collection from '@/components/Collection';
import AppContext from '@/context';
import './ShowCollections.scss';

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

const ShowCollections = props => {
  const [openModal, setOpenModal] = useState(true);
  const { collections } = useContext(AppContext);

  const closeModal = e => {
    e.stopPropagation();
    setOpenModal(false);
    props.showCollections();
  };

  return (
    <div className="show-collections">
      <Modal
        isOpen={openModal}
        onRequestClose={closeModal}
        ariaHideApp={false}
        style={customStyles}
      >
        <header className="show-collections_header">
          <h2>Select a collection</h2>
        </header>
        <div className="show-collections_body">
          <ul>
            {collections.map(collection => {
              return (
                <Collection
                  key={collection.id}
                  collection={collection}
                  {...props}
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
  );
};

export default ShowCollections;
