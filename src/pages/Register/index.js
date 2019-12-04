import React, { useState } from 'react';
import api from '../../services/api';

import { Centered, RadioContainer } from './styles'; 

export default function Register({ history }){

  const [username,  setUsername] = useState('');
  const [email,        setEmail] = useState('');
  const [password,  setPassword] = useState('');
  const [type,          setType] = useState('');

  async function handleSubmit(event){
    event.preventDefault();

    const res = await api.post('/user', {username, email, password, type});

    const { _id } = res.data;

    localStorage.setItem('user', _id);

    history.push('/dashboard');
  }

  return (
    <>
      <Centered>
        <form onSubmit={handleSubmit}>
          <label htmlFor="username">Usuário</label>
          <input 
            id="username"
            type="text"
            placeholder="NasusMotoVlogs"
            onChange={event => setUsername(event.target.value)}
          />

          <label htmlFor="email">E-Mail</label>
          <input
           id="email"
           type="email"
           placeholder="placeholder@foda.com"
           onChange={event => setEmail(event.target.value)}
          />

          <label htmlFor="password">Senha</label>
          <input
           id="password" 
           type="password"
           placeholder="daapatinhah123"
           onChange={event => setPassword(event.target.value)}
          />

          <div className="formOptions">
            <RadioContainer>
              <input type="radio" name="placeholder" value="Professor"  checked={type === 'Professor'}  onChange={event => setType(event.target.value)}/>Prof.  
              <input type="radio" name="placeholder" value="Aluno"      checked={type === 'Aluno'}      onChange={event => setType(event.target.value)}/>Aluno
            </RadioContainer>
            <button type="submit">Registrar</button>
          </div>
          
        </form>
      </Centered>
    </>
  )

}