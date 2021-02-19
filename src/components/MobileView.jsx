import React from 'react';
import TopBarMobile from './TopBarMobile';
import Routes from './Routes';
import { useSelector } from 'react-redux';
import Menu from './Menu'
import '../styles/MobileView.scss';

export default function MobileView() {
  const showMenu = useSelector(state => state.layoutReducer.showMenu);

  return (
    <div className='mobile-view-wrapper'>
      <TopBarMobile />
      <div className='mobile-content-wrapper'>
        <Routes />
        {showMenu && <Menu />}
      </div>
    </div>
  )
}
