import React from 'react';
import './App.scss';
import { changeScreenSize } from './actions/index';
import { useSelector, useDispatch } from 'react-redux';
import ResponsiveView from './components/ResponsiveView';
import { ThemeContext } from './contexts/index';

function App() {
  const dispatch = useDispatch();

  const color = useSelector(state => state.layoutReducer.color);
  document.documentElement.style.setProperty('--color', color.textColor);
  const screenSize = window.matchMedia('(min-width: 770px)');
  screenSize.addListener(screenSize => {
    dispatch(changeScreenSize(screenSize.matches ? 'LARGE' : 'SMALL'));
  })

  return (
    <ThemeContext.Provider value={color}>
      <div className="app-wrapper" style={{ backgroundColor: color.mainBackgroundColor, color: color.textColor }}>
        <ResponsiveView />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
