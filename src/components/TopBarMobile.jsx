import React, { useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleMenu } from '../actions/index';
import HamburgerIcon from '../assets/icons/hamburger.icon';
import { ThemeContext } from '../contexts/index';
import DarkMode from './DarkMode';
import Logo from '../assets/icons/logo.icon';
import '../styles/TopBarMobile.scss';

export default function TopBarMobile() {
    const dispatch = useDispatch();
    const color = useContext(ThemeContext);
    const showMenu = useSelector(state => state.layoutReducer.showMenu);

    return (
        <div className='top-bar-mobile-wrapper'>
            <div className='link' onClick={() => dispatch(toggleMenu(!showMenu))} style={{ marginLeft: '20px' }} >
                <HamburgerIcon fill={showMenu ? color.highlightedColor : color.textColor} />
            </div>
            <Logo fill={color.textColor} width='50px'/>
            <DarkMode />
        </div>
    )
}