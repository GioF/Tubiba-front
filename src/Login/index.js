import React from 'react';

import './styles.css';

export default function Login(){

    return (
        <>
        <div className="loginImageContainer">
      
            <div className="loginContainer">
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
                  <div className="loginOptions">
                    <button>Registrar</button>
                    <button type="submit">Entrar</button>
                  </div>
                </form>
            </div>
        </div>
        </>
    )

}