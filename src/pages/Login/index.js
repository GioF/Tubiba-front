import React, { useState } from 'react';
import api from '../../services/api';

import { LoginContainer, LoginImageContainer } from './styles';

export default function Login({ history }){

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function handleLogin(event){
    event.preventDefault();

    if(email !== '' && password !== ''){

      const res = await api.post('/user/login', {email, password});
      const _id = res.data;
      console.log({email, password, res});

      localStorage.setItem('user', _id);

      history.push('/dashboard/statistics');

    }
  };

  return (
      <>
      <LoginImageContainer>
    
          <LoginContainer>
              <form onSubmit={handleLogin}>
                
                <label htmlFor="email">E-mail</label>
                <input
                  id="email"
                  type="email"
                  placeholder="placeholder@foda.com"
                  onChange={event => setEmail(event.target.value)}
                />

                <label htmlFor="senha">Senha</label>
                <input
                  id="senha"
                  type="password"
                  placeholder="daapatinhah123"
                  onChange={event => setPassword(event.target.value)}
                />
                <div className="formOptions">
                  <button onClick={() => history.push('/register')}>Registrar</button>
                  <button type="submit">Entrar</button>
                </div>
              </form>
          </LoginContainer>
      </LoginImageContainer>
      </>
  )

}