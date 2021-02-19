import React, { useState, useEffect, useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';
import { getCountries, toggleMenu } from '../actions/index';
import { isAdmin, isSelected } from '../utils';
import { ThemeContext } from '../contexts/index';
import Loading from './Loading';
import AddCountry from './AddCountry';
import '../styles/Countries.scss';

export default function Countries() {
  const dispatch = useDispatch();
  const color = useContext(ThemeContext);
  const loading = useSelector(state => state.countriesReducer.loading);
  const countriesData = useSelector(state => state.countriesReducer.countries);
  const screenSize = useSelector(state => state.layoutReducer.screenSize);
  const history = useHistory();
  const location = useLocation();
  const [search, setSearch] = useState('');

  useEffect(() => {
    dispatch(getCountries());
  }, [dispatch])

  const handleClick = id => {
    history.push({ pathname: '/countries', search: `?id=${id}` });
    if (screenSize === 'SMALL') {
      dispatch(toggleMenu(false));
    }
  };

  let countries = [];
  for (const [index, country] of countriesData.entries()) {
    if (country.name.toLowerCase().includes(search.toLowerCase())) {
      countries.push(<div
        key={index}
        className={isSelected(location, country._id) ? 'link country-link selected' : 'link country-link'}
        onClick={() => handleClick(country._id)}>{country.name}</div>);
    }
  }

  return (
    <div className='countries-wrapper'>
      <div className={loading ? 'countries disabled' : 'countries'}>
        {isAdmin() && <AddCountry />}
        <input type='text' className='search-input' placeholder='Search...' onChange={e => setSearch(e.target.value)} style={{ backgroundColor: color.secondary }} />
        <div className='countries-list'>
          {countries}
        </div>
        {!loading && countries.length === 0 && <span className='no-results'>No Results</span>}
      </div>
      {loading && <Loading />}
    </div>
  )
}
