import React from 'react';
import Sidebar from './Sidebar';
import Routes from './Routes';
import DarkMode from './DarkMode';
import Logout from './Logout';
import { useSelector } from 'react-redux';
import '../styles/DesktopView.scss';

export default function DesktopView() {
    const authenticated = useSelector(state => state.authReducer.authenticated);
    return (
        <div className='desktop-view-wrapper'>
            {authenticated && <Logout />}
            <DarkMode />
            <div className='desktop-content-wrapper'>
                <Sidebar />
                <Routes />
            </div>
        </div>
    )
}
