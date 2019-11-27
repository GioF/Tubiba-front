import React from 'react';

import { Selector, Counter, Listing, Difficulty, Date, Title } from './styles';
import DashboardCard from '../DashboardCard';

export default function ExerciseList() {
  return (
    <DashboardCard 
      title={
        <>
        <Selector>
          <p>Matéria</p>
        </Selector>
        <Counter>2</Counter> 
        </>
      }>
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
      </DashboardCard>
  );
}
