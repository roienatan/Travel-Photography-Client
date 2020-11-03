import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addCountry } from '../actions/index';
import Loading from './Loading';
import '../styles/AddCountry.scss';

export default function AddCountry() {
    const dispatch = useDispatch();
    const addingCountry = useSelector(state => state.countriesReducer.addingCountry);
    const [newCountry, setNewCountry] = useState('');
    const handleAddCountry = () => {
        dispatch(addCountry(newCountry));
        setNewCountry('');
    }
    return (
        <div className='add-country-wrapper'>
            <div className={addingCountry ? 'add-country disabled' : 'add-country'}>
                <input type='text' placeholder='Add country...' value={newCountry} onChange={e => setNewCountry(e.target.value)} />
                <button className={newCountry === '' ? 'add-button disabled' : 'add-button'} onClick={handleAddCountry}>ADD</button>
            </div>
            {addingCountry && <Loading />}
        </div>
    )
}