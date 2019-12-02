import React from 'react';
import { useState } from 'react';

import { Container, Answer, Options, Overlay, Fill, Justificatory, Grading} from './styles';

export default function SolvedExercise(props) {

  const [displayJustificatory, setDisplayJustificatory] = useState(false);
  const [gradingBackground, setGradingBackground] = useState('');

  const colors = [
    '#54FA8C',
    '#FFC36A',
    '#FE5C5C'
  ]

  
  function changeJustificatory(){
    setDisplayJustificatory(!displayJustificatory);
  };

  function handleGrading(background){
    changeJustificatory();
    setGradingBackground(colors[background]);
  }

  return (
    <Overlay>
      <Container>
        <h1>
          {props.data.question ? props.data.question : "teste"}
        </h1>

        <h2>
          <bold>Aluno</bold> {props.data.student ? props.data.student : "vinegar doppio"}
        </h2>

        <h3>
          {props.data.command ? props.data.command : "is cioccolata dumb?"}
        </h3>

        <label>Resposta:</label>
        <Answer>
          <p>
            {props.data.answer ? props.data.answer : "yes"}
          </p>
        </Answer>

        <Fill>
          <p><label>Correção:</label></p>
        
          <Options>
            <Justificatory  display={displayJustificatory ? 'visible' : 'hidden'} background={gradingBackground}/>
            <Grading        display={displayJustificatory ? 'hidden' : 'visible'} onClick="" btncolor={colors[0]}>Correto</Grading>
            <Grading        display={displayJustificatory ? 'hidden' : 'visible'} onClick={() => handleGrading(1)}  btncolor={colors[1]}>Parcial</Grading>
            <Grading        display={displayJustificatory ? 'hidden' : 'visible'} onClick={() => handleGrading(2)} btncolor={colors[2]}>Incorreto</Grading>
          </Options>
        </Fill>
      </Container>
    </Overlay>
  );
}
