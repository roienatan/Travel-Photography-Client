import React, { useState, useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { addImage } from '../actions/index';
import Loading from './Loading';
import '../styles/AddImage.scss';
import { ThemeContext } from '../contexts/index';
const queryString = require('query-string');

export default function AddImage() {
  const dispatch = useDispatch();
  const [uploadedImage, setUploadedImage] = useState();
  const [description, setDescription] = useState('');
  const addingImage = useSelector(state => state.imagesReducer.addingImage);
  const location = useLocation();
  const imageInput = React.createRef();
  const color = useContext(ThemeContext);

  const updateImage = e => {
    e.preventDefault();
    setUploadedImage(imageInput.current.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const parsedURL = queryString.parse(location.search);
    dispatch(addImage(uploadedImage, description, parsedURL.id));
    setUploadedImage();
    setDescription();
  };

  return (
    <div className='add-image-wrapper'>
      <div className={addingImage ? 'disabled' : ''}>
        <form className='add-image-form' onSubmit={handleSubmit}>
          <input id='addImage' className='select-image' type='file' ref={imageInput} onChange={updateImage} required />
          <label className='link' htmlFor='addImage'>{uploadedImage ? 'Change' : 'Select Image'}</label>
          {uploadedImage && <span className='selected-image-name'>{uploadedImage.name}</span>}
          <textarea
            value={description}
            className='add-description'
            rows="3"
            onChange={e => setDescription(e.target.value)}
            placeholder='Add a description'
            style={{ color: color.textColor }}
            required />
          <input
            className={uploadedImage && description !== '' ? 'upload-image link' : 'upload-image disabled'}
            type="submit"
            value="UPLOAD" />
        </form>
      </div>
      {addingImage && <Loading />}
    </div>
  )
}
