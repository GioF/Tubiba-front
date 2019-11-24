import React from 'react';

import { LoginContainer, LoginImageContainer } from './styles';

export default function Login(){

    return (
        <>
        <LoginImageContainer>
      
            <LoginContainer>
                <form>
                  
                  <label htmlFor="email">E-mail</label>
                  <input
                    id="email"
                    type="email"
                    placeholder="placeholder@foda.com"
                  />

                  <label htmlFor="senha">Senha</label>
                  <input
                    id="senha"
                    type="password"
                    placeholder="daapatinhah123"
                  />
                  <div className="formOptions">
                    <button>Registrar</button>
                    <button type="submit">Entrar</button>
                  </div>
                </form>
            </LoginContainer>
        </LoginImageContainer>
        </>
    )

}