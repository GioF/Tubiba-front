import React from 'react';

import TitleCard from '../TitleCard';
import DashboardCard from '../DashboardCard';
import { Chart } from '@bit/primefaces.primereact.chart';

import {Horizontally} from './styles';

export default function Statistics() {

  //temporary data; when api connection is done, manual json data won't be needed

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

  const medianPerformance = {
    datasets: [
      {
        data: [11, 16, 7, 3, 14],
        backgroundColor: ['#FF6384', '#4BC0C0', '#FFCE56', '#E7E9ED', '#36A2EB'],
        label: 'matérias a estudar'
      }
    ],
    labels: ['geometria plana', 'geometria espacial', 'circumferências', 'radiciação', 'multiplicativas']
  };

  const options = {
    legend: {
      display: false
    }
  };

  return (
    <>
    <TitleCard gridArea="tit">Dashboard - matemática</TitleCard>
        <DashboardCard title="Estatísticas gerais" gridArea="st">
          <Chart
            type='pie'
            data={presenceData}
            height="100%"
          />
        </DashboardCard>

        <DashboardCard title="Notas" gridArea="gr" >
          <Chart
            type='line'
            data={noteData}
            options={{legend: {position:'bottom'}}}
            height="100%"
          />
        </DashboardCard>

        <DashboardCard title="Comparativos" gridArea="ex">
          <Horizontally>
            <Chart
              type='radar'
              data={selfPerformance}  
              width="30%"
            />
            <Chart
              type='doughnut'
              data={medianPerformance}
              options={options}
              width="30%"
            />
          </Horizontally>
        </DashboardCard>
    </>
  );
}
