import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import '../../styles/Login.scss';
//import Logo from '../assets/icons/logo.icon';
import { login } from '../../actions/index';
import Loading from '../Loading';

export default function Login() {
  const history = useHistory();
  const dispatch = useDispatch();
  const authenticated = useSelector(state => state.authReducer.authenticated);
  const loading = useSelector(state => state.authReducer.loading);
  const error = useSelector(state => state.authReducer.error);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [disabled, setDisabled] = useState(true);

  if (authenticated) {
    history.push('./');
  }

  useEffect(() => {
    setDisabled(() => username === '' || password === '');
  }, [username, password])

  const handleLogin = event => {
    event.preventDefault();
    dispatch(login({ username: username, password: password }));
  };

  return (
    <div className='login-wrapper'>
      {error && <div className='login-error-wrapper'>
        <div className='error-text'>The username or password you entered is incorrect</div>
      </div>}
      <form className={loading ? 'form-decoration disabled' : 'form-decoration'} onSubmit={handleLogin}>
        <label>
          USERNAME
                        <input type='text' name='username' value={username} autoComplete='username' onChange={e => setUsername(e.target.value)} />
        </label>
        <label>
          PASSWORD
                        <input type='password' name='password' value={password} autoComplete='current-password' onChange={e => setPassword(e.target.value)} />
        </label>
        <input className={disabled ? 'login-btn disabled' : 'login-btn'} type='submit' value='Sign In' />
      </form>
      {loading && <Loading />}
    </div>
  )
}
