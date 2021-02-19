import React from 'react';
import '../styles/Image.scss';
import { API } from '../services/api';

export default function Image(props) {
  return (
    <div className='image-wrapper'>
      <img
        className='image'
        src={API.GET_IMAGE + props.imageData.id}
        alt={props.imageData.description} />
      <span className='image-description'>{props.imageData.description}</span>
    </div>
  )
}
