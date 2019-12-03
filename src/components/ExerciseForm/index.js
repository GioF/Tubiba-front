import React, { useState } from 'react';

import { Container, Titling, InputWrapper, Question, Answers } from './styles';

export default function ExerciseForm() {

  const [title, setTitle] = useState('');
  const [tags, setTags] = useState([]);
  const [question, setQuestion] = useState('');

  const [options, setOptions] = useState([]);
  const [currentOption, setCurrentOption] = useState('');

  function concatTags(event){
    setTags(event.target.value.split(', '));
  }

  function validateEnter(event){
    if (event.keyCode === 13 && options.length < 4) setOptions([...options, currentOption]);
  };


  function handleSubmit(event){
    event.preventDefault();
  }

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <Titling>
          <InputWrapper>
            <label htmlFor="Title">Título:</label>
            <input 
              type="Text"
              placeholder="Um resumo rápido da questão"
              value={title}
              onChange={event => setTitle(event.target.value)}
            /> 
          </InputWrapper>

          <InputWrapper>
            <label>Matérias:</label>
            <input 
              type="Text"
              placeholder="Ex. Genética, Trigonometria, Cinemática, etc"
              onChange={concatTags}
            />
          </InputWrapper>
        </Titling>

        <Question>
          <label htmlFor="Question">Texto:</label>
          <textarea
            id="Question"
            value={question}
            onChange={event => setQuestion(event.target.value)}
          />
        </Question>
        
        <label htmlFor="answers">Respostas:</label>
        <Answers>
          {options.map((question, i) => <li key={i}><input type="radio" name="Questions" value={i}/>{question}</li>)}
          {options.length < 4 ? (<><input type="radio" name="Questions" value="TODO"/>
          <input  type="text" 
                  value={currentOption} 
                  placeholder="Inserir resposta..." 
                  onChange={event => setCurrentOption(event.target.value)}
                  onKeyDown={validateEnter}
          /></>) : ('')}
        </Answers>

        <button type="submit">Enviar</button>
      </form>
    </Container>
  );

  }