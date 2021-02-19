import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { ThemeContext } from '../contexts/index';
import { useDispatch, useSelector } from 'react-redux';
import { toggleMenu } from '../actions/index';
import Countries from './Countries';
import Logout from './Logout';
import '../styles/Menu.scss';

export default function Menu() {
  const [showCountries, setShowCountries] = useState(false);
  const history = useHistory();
  const dispatch = useDispatch();
  const authenticated = useSelector(state => state.authReducer.authenticated);
  const color = useContext(ThemeContext);

  const handleClick = pathname => {
    history.push(pathname);
    dispatch(toggleMenu(false));
  };

  return (
    <div className='menu-wrapper' style={{ backgroundColor: color.contentBackgroundColor }}>
      <div className='menu-link' onClick={() => handleClick('./')}>HOME</div>
      <div className='menu-link' onClick={() => setShowCountries(true)}>COUNTRIES</div>
      <div className='menu-link' onClick={() => handleClick('./about')}>ABOUT</div>
      {authenticated && <Logout />}
      <div className={showCountries ? 'menu-countries-wrapper show' : 'menu-countries-wrapper'} style={{ backgroundColor: color.contentBackgroundColor }}>
        <div className='close' onClick={() => setShowCountries(false)}>&times;</div>
        <Countries />
      </div>
    </div>
  )
}
