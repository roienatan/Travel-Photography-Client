import React, { useContext } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import Countries from './Countries';
import { isSelected } from '../utils';
import { ThemeContext } from '../contexts/index';
import Logo from '../assets/icons/logo.icon';
import '../styles/Sidebar.scss';

export default function SideBar() {
    const history = useHistory();
    const location = useLocation();
    const color = useContext(ThemeContext);
    const mailTo = () => {
        window.location.href = 'mailto:roie.natan@gmail.com';
    }
    return (
        <div className='sidebar-wrapper'>
            <div className='links'>
                <div className='logo-wrapper'>
                    <Logo fill={color.textColor} width='50px' />
                    <div className='logo-title'>ROIE NATAN<br /><b>TRAVEL PHOTOGRAPHER</b></div>
                </div>
                <div
                    className={location.pathname === '/' ? 'link sidebar-link selected' : 'link sidebar-link'}
                    onClick={() => history.push('./')}>HOME</div>
                <div
                    className={isSelected(location, 'about') ? 'link sidebar-link selected' : 'link sidebar-link'}
                    onClick={() => history.push('./about')}>ABOUT</div>
                <div className='sidebar-link'>COUNTRIES</div>
                <Countries />
            </div>
            <div className='contact'>
                <div className='link' onClick={mailTo}>roie.natan@gmail.com</div>
            </div>
        </div>
    )
}