import React, { useState } from 'react';

import api from '../../services/api';

import { Container, Overlay} from './styles';

export default function ClassForm(props) {

  const [descriptor,  setDescriptor] = useState('');
  const [subject,        setSubject] = useState('');
  const [number,          setNumber] = useState('');
  

  async function handleSubmit(event){
    event.preventDefault();
    props.undo(false);

    if(descriptor !== '' && subject !== '' && number !== ''){
      const _id = localStorage.getItem('user');
      console.log(_id);
      await api.post('/classes', {descriptor, subject, number}, { headers: { _id } });

      setDescriptor('');
      setSubject('');
      setNumber('');
    }
  }

  return (
    <Overlay shouldDisplay={props.display}>
      <Container>
        <form onSubmit={handleSubmit}>
        <input 
          type="text"
          value={descriptor}
          onChange={event => setDescriptor(event.target.value)}
          placeholder="Uma breve descrição da sala"
        />
        <input 
          type="text"
          value={subject}
          onChange={event => setSubject(event.target.value)}
          placeholder="Qual matéria é ensinada nesta sala?"
        />
        <input 
          type="text"
          value={number}
          onChange={event => setNumber(event.target.value)}
          placeholder="Um identificador pessoal Ex. 321A"
        />       
          <button onClick={handleSubmit}>Enviar</button>
          </form>
      </Container>
    </Overlay>
  );
}
