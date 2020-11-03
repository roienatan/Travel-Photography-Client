import React from 'react';
import { useSelector } from 'react-redux';
import DesktopView from './DesktopView';
import MobileView from './MobileView';
import { useLocation } from 'react-router-dom';
import Login from './Routes/Login';

export default function ResponsiveView() {
    const screenSize = useSelector(state => state.layoutReducer.screenSize);
    const location = useLocation();

    return (
        <React.Fragment>
            { location.pathname.includes('login') ? <Login /> : screenSize === 'LARGE' ? <DesktopView /> : <MobileView /> }
        </React.Fragment>
    )
}