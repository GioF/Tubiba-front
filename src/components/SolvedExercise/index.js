import React from 'react';

import { Container, Correto, Parcial, Incorreto, Answer, Options } from './styles';

export default function SolvedExercise() {

  const props = {
    data: {
      question: "teste",
      student: "vinegar doppio",
      command: "is cioccolata dumb?",
      answer: "yes"
    }
  }

  return (
    <Container>
      <h1>
        {props.data.question}
      </h1>

      <h2>
        <bold>Aluno</bold> {props.data.student}
      </h2>

      <h3>
        {props.data.command}
      </h3>

      <label>Resposta:</label>
      <Answer>
        <p>
          {props.data.answer}
        </p>
      </Answer>

      <p><label>Correção:</label></p>
      
      <Options>
        <Correto>Correto</Correto>
        <Parcial>Parcial</Parcial>
        <Incorreto>Incorreto</Incorreto>
      </Options>
    </Container>
  );
}
