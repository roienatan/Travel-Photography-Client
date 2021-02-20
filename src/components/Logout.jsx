import React from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logout } from '../actions/index';
import '../styles/Logout.scss';

export default function Logout() {
  const history = useHistory();
  const dispatch = useDispatch();

  const handleLogout = () => {
    sessionStorage.clear();
    dispatch(logout());
    history.push('./login');
  };

  return (
    <div className='link logout-wrapper' onClick={handleLogout}>Logout</div>
  )
}
