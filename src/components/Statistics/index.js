import React, { useState, useEffect} from 'react';
import api from '../../services/api';

import TitleCard from '../TitleCard';
import DashboardCard from '../DashboardCard';
import { Chart } from '@bit/primefaces.primereact.chart';

import {Horizontally} from './styles';
import ExerciseList from '../ExerciseList';

export default function Statistics(props) {

  const [classroom, setClassroom] = useState(null);

  useEffect(() => {
    async function getClassroom(){
      const res = await api.get(`/classes/${props.match.params.id}`);
      setClassroom(res.data);
    }
    getClassroom();
  }, [props]);

  //temporary data; when api connection is done, manual json data won't be needed

  props.displayGrid(true);

  const presenceData = {
    labels: ['Presente', 'Abstenção justificada', 'Falta'],
    datasets: [
    {
      data: [300, 50, 300],
      backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56']
    }
  ]
  };

  const noteData = {
    labels: ['Setembro', 'Outubro', 'Novembro', 'Dezembro'],
    datasets: [
      {
        label: 'Exercícios',
        data: [2, 2, 0, 1],
        fill: false,
        borderColor: '#4bc0c0'
      },
      { 
        label: 'Atividades avaliativas',
        data: [1, 2, 7, 4],
        fill: false,
        borderColor: '#565656'
      }
    ]
  };

  const selfPerformance = {
    labels: ['geometria plana', 'geometria espacial', 'circumferências', 'radiciação', 'multiplicativas'],
    datasets: [{
      label: 'seu desempenho',
      backgroundColor: '#01D088',
      pointBackgroundColor: '#01D088',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: '#01D088',
      data: [7, 5, 4, 5, 7]
    }]
  };

  return (
    <>
        <TitleCard gridArea="tit1">Dashboard - {classroom ? classroom.subject : 'nah'}</TitleCard>
        <DashboardCard title="Estatísticas gerais" gridArea="st">
          <Chart
            type='pie'
            data={presenceData}
            height="100%"
          />
        </DashboardCard>

        <ExerciseList gridArea="gr" classroomState={classroom} classId={props.match.params.id}/>

        <DashboardCard title="Comparativos" gridArea="ex">
          <Horizontally>
            <Chart
              type='radar'
              data={selfPerformance} 
            />
            <Chart
            type='line'
            data={noteData}
            options={{legend: {position:'bottom'}}}
            style={{margintop: 'auto'}}
            />
          </Horizontally>
        </DashboardCard>
    </>
  );
}
