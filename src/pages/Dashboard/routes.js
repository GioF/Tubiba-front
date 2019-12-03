import React from 'react';

import { Switch, Route } from 'react-router-dom';

import Statistics from '../../components/Statistics';
import Notifications from '../../components/Notifications';
import SolvedExercise from '../../components/SolvedExercise';
import ExerciseList from '../../components/ExerciseList';
import Exercise from '../../components/Exercise';
// import  from '../../components/'
// import  from '../../components/'
// import  from '../../components/'

export default function Routes(){
  return (
    <Switch>
      <Route path="/dashboard/statistics" component={Statistics}/>
      <Route path="/dashboard" exact      component={Notifications}/>
      <Route path="/dashboard/exercises"  component={SolvedExercise}/>
      <Route path="/dashboard/teacher"    component={ExerciseList}/>
      <Route path="/dashboard/exercise"   component={Exercise}/>
      <Route />
    </Switch>
  ) 
}