import React from 'react';

import { Container, Selector, Listing, Difficulty, Date, Title } from './styles';

export default function ExerciseList() {
  return (
    <Container>
      <header>
        <Selector>
          <p>Matéria</p>
        </Selector>
        <button>2</button> 
        
      </header>

      <Listing>
          <Title>
            Título
          </Title>
          <Date>
            Data
          </Date>
          <Difficulty>
            Dificuldade
          </Difficulty>
        <ul>
          <li>
            Teste
          </li>
          <li>
            teste
          </li>
          <li>
            teste
          </li>
          <li>
            teste
          </li>
          <li>
            teste
          </li>
          <li>
            teste
          </li>
          <li>
            teste
          </li>
        </ul>
      </Listing>

    </Container>
  );
}
