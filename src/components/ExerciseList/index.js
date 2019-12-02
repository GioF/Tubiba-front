import React from 'react';

import { Container, Listing, Title, Identification, Question, Status } from './styles';
import DashboardCard from '../DashboardCard';

export default function ExerciseList(props) {

  const data = {
    title: 'Como sonegar impostos sem ser pego?',
    question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
    identification: "3a",
    status: '#0000ff'
  };

  return (
    <DashboardCard 
      title={
        <p>Exercícios</p>
      }
      gridArea={props.gridArea}
      >
        <Listing>
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
