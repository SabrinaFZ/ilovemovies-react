import React, { useState } from 'react';

const CreateCollection = ({ createCollection }) => {
  const [openCreateCollection, setOpenCreateCollection] = useState(false);
  const [collectionName, setCollectionName] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    setCollectionName('');
    setOpenCreateCollection(false);
  };

  return (
    <nav className="my-collections_nav">
      <button
        className="my-collections_create"
        onClick={() => setOpenCreateCollection(!openCreateCollection)}
      >
        Add New Collection
      </button>
      {openCreateCollection && (
        <form
          id="my-collections_create-form"
          onSubmit={e => {
            createCollection(collectionName);
            handleSubmit(e);
          }}
        >
          <input
            type="text"
            placeholder="Name of the new collection"
            value={collectionName}
            className="my-collections_input"
            onChange={e => setCollectionName(e.target.value)}
          />
          <button type="submit" disabled={!collectionName}>
            <i className="fas fa-plus"></i>
          </button>
        </form>
      )}
    </nav>
  );
};

export default CreateCollection;
