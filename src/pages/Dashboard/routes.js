import React from 'react';

import { Switch, Route } from 'react-router-dom';

import Statistics from '../../components/Statistics';
import Notifications from '../../components/Notifications';
import SolvedExercise from '../../components/SolvedExercise';
import ExerciseList from '../../components/ExerciseList';
import Exercise from '../../components/Exercise';
import ExerciseForm from '../../components/ExerciseForm';
// import  from '../../components/'

export default function Routes({displayFunc}){
  return (
    <Switch> 
      <Route path="/dashboard/statistics"   render={(props) => <Statistics    displayFunc={displayFunc} />}/>
      <Route path="/dashboard" exact        render={(props) => <Notifications displayFunc={displayFunc} />}/>
      <Route path="/dashboard/exercises"    render={(props) => <SolvedExercise displayFunc={displayFunc} />}/>
      <Route path="/dashboard/teacher"      render={(props) => <ExerciseList displayFunc={displayFunc} />}/>
      <Route path="/dashboard/exercise"     render={(props) => <Exercise displayFunc={displayFunc} />}/>
      <Route path="/dashboard/exerciseform" render={(props) => <ExerciseForm displayFunc={displayFunc} />}/>
    </Switch>
  ) 
}