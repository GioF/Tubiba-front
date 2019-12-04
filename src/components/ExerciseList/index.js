import React, { useState, useEffect } from 'react';
import { MdAdd } from 'react-icons/md';

import api from '../../services/api';

import { Container, Listing, Title, Identification, Question, Status, Add } from './styles';
import DashboardCard from '../DashboardCard';
import Exercise from '../Exercise';
import ExerciseForm from '../ExerciseForm';

export default function ExerciseList(props) {


  const [type, setType] = useState();
  const [exercises, setExercises] = useState();

  useEffect(() => {
    async function getType(){
      const _id = localStorage.getItem('user');
      const res = await api.get('/user', {headers: {_id}});
      setType(res.data);
    }
    getType();
  }, []);

  useEffect(() => {
    async function getExercises(){
      const _id = localStorage.getItem('user');
      const res = await api.get('', {headers: {_id}});
      setExercises(res.data);
    }
    getExercises();
  },[]);

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

  const [formOverlay, setFormOverlay] = useState(true);
  const [exerciseOverlay, setExerciseOverlay] = useState(false);

  return (
    <DashboardCard 
      title={
        <>
        <p>Exercícios</p>
        {type==='Professor' ? <Add onClick={() => setFormOverlay(!formOverlay)}><MdAdd size="15"/></Add> : <></>}
        </>
      }
      gridArea={props.gridArea}
      >
        <Exercise shouldDisplay={exerciseOverlay} undo={setExerciseOverlay} data={data}/>
        <ExerciseForm shouldDisplay={formOverlay} undo={setFormOverlay} classId={props.classId}/>
        <Listing>
          <Container onClick={() => setExerciseOverlay(!exerciseOverlay)}>
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
