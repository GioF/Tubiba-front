import React from 'react';

import { Container, Titling, InputWrapper, Question, Answers } from './styles';

export default function ExerciseForm() {
  return (
    <Container>
      <form>
        <Titling>
          <InputWrapper>
            <label htmlFor="Title">Título:</label>
            <input 
              type="Text"
              placeholder="Um resumo rápido da questão"
            /> 
          </InputWrapper>

          <InputWrapper>
            <label htmlFor="Tags">Tags:</label>
            <input 
              type="Text"
              placeholder="Ex. Genética, Trigonometria, Cinemática, etc"
            />
          </InputWrapper>
        </Titling>

        <Question>
          <label htmlFor="Question">Texto:</label>
          <textarea
            id="Question"
          />
        </Question>

        <label htmlFor="answers">Respostas:</label>
        <Answers>
          <input id="question" type="radio" name="Placeholder" value="Placeholder"/>Adicionar opção...
        </Answers>

        <button type="submit">Enviar</button>
      </form>
    </Container>
  );
}
