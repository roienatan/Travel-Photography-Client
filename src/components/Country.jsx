import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getImages } from '../actions/index';
import AddImage from './AddImage';
import Image from './Image';
import Loading from './Loading';
import { isAdmin } from '../utils';
import '../styles/Country.scss';
const queryString = require('query-string');

export default function Country() {
  const location = useLocation();
  const dispatch = useDispatch();
  const imagesData = useSelector(state => state.imagesReducer.images);
  const loading = useSelector(state => state.imagesReducer.loading);

  useEffect(() => {
    const parsedURL = queryString.parse(location.search);
    dispatch(getImages(parsedURL.id));
  }, [location.search, dispatch])

  const images = imagesData.map(image => {
    return <Image key={image.id} imageData={image} />
  });

  return (
    <div className='country-wrapper'>
      {isAdmin() && <AddImage />}
      {!loading && images.length === 0 && <span className='no-results'>No Results</span>}
      {!loading && images}
      {loading && <Loading />}
    </div>
  )
}
