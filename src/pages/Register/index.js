import React from 'react';

import { Centered, RadioContainer } from './styles'; 

export default function Register(){


  return (
    <>
      <Centered>
        <form>
          <label htmlFor="username">Usuário</label>
          <input 
            id="username"
            type="text"
            placeholder="NasusMotoVlogs"
          />

          <label htmlFor="email">E-Mail</label>
          <input
           id="email"
           type="email"
           placeholder="placeholder@foda.com"
          />

          <label htmlFor="password">Senha</label>
          <input
           id="password" 
           type="password"
           placeholder="daapatinhah123"
          />

          <div className="formOptions">
            <RadioContainer>
              <input id="professor" type="radio" name="placeholder" value="Professor"/>Prof.  
              <input type="radio" name="placeholder" value="Aluno"/>Aluno
            </RadioContainer>
            <button type="submit">Registrar</button>
          </div>
          
        </form>
      </Centered>
    </>
  )

}