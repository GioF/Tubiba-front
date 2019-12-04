import React from 'react';

import { Switch, Route } from 'react-router-dom';

import Statistics from '../../components/Statistics';
import Notifications from '../../components/Notifications';
import SolvedExercise from '../../components/SolvedExercise';
import ExerciseList from '../../components/ExerciseList';
import Exercise from '../../components/Exercise';
import ExerciseForm from '../../components/ExerciseForm';
// import  from '../../components/'

export default function Routes({displayGrid}){
  return (
    <Switch > 
      <Route path="/dashboard/all"   render={(props) => <Statistics      {...props} displayGrid={displayGrid} />}/>
      <Route path="/dashboard" exact        render={(props) => <Notifications   {...props} displayGrid={displayGrid} />}/>
      <Route path="/dashboard/exercises"    render={(props) => <SolvedExercise  {...props} displayGrid={displayGrid} />}/>
      <Route path="/dashboard/teacher"      render={(props) => <ExerciseList    {...props} displayGrid={displayGrid} />}/>
      <Route path="/dashboard/exercise"     render={(props) => <Exercise        {...props} displayGrid={displayGrid} />}/>
      <Route path="/dashboard/exerciseform" render={(props) => <ExerciseForm    {...props} displayGrid={displayGrid} />}/>
    </Switch>
  ) 
}