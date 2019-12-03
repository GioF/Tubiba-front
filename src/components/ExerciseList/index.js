import React, { useState } from 'react';

import { Container, Listing, Title, Identification, Question, Status } from './styles';
import DashboardCard from '../DashboardCard';
import Exercise from '../Exercise';

export default function ExerciseList(props) {

  const data = {
    title: 'Como sonegar impostos sem ser pego?',
    question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
    identification: "3a",
    status: '#0000ff',
    options: [
      'comprar bitcoin',
      'roubar bancos',
      'investir em time de lol',
      'proplayer de truco'
    ]
  };

  const [overlay, setOverlay] = useState('none');

  return (
    <DashboardCard 
      title={
        <p>Exercícios</p>
      }
      gridArea={props.gridArea}
      >
        <Exercise display={overlay} undo={setOverlay} data={data}/>
        <Listing>
          <Container onClick={() => setOverlay(!overlay)}>
            <Title>
              <h1>
                {data.title}
              </h1>
            </Title>

            <Identification>
              {data.identification}
            </Identification>

            <Question>
              <p>
                {data.question}
              </p>
            </Question>

            <Status status={data.status}/>
                
          </Container>  
          <Container>
            <Title>
              <h1>
                {data.title}
              </h1>
            </Title>

            <Identification>
              {data.identification}
            </Identification>

            <Question>
              <p>
                {data.question}
              </p>
            </Question>

            <Status status={data.status}/>
                
          </Container>  
          <Container>
            <Title>
              <h1>
                {data.title}
              </h1>
            </Title>

            <Identification>
              {data.identification}
            </Identification>

            <Question>
              <p>
                {data.question}
              </p>
            </Question>

            <Status status={data.status}/>
                
          </Container>  
        </Listing>
      </DashboardCard>
  );
}
