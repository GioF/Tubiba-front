import React from 'react';

import './styles.css'; 

export default function Register(){


  return (
    <>
      <div>
        <form>
          <label htmlFor="username"></label>
          <input 
            id="username"
            type="text"/>

          <label htmlFor="email"></label>
          <input
           id="email"
           type="email"/>

          <label htmlFor="password"></label>
          <input
           id="password" 
           type="password"/>

          <div className="formOptions">
            
          </div>
        </form>
      </div>
    </>
  )

}