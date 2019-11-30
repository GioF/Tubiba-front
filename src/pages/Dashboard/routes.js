import React from 'react';

import { Switch, Route } from 'react-router-dom';

import Statistics from '../../components/Statistics';
// import  from '../../components/'
// import  from '../../components/'
// import  from '../../components/'
// import  from '../../components/'

export default function Routes(){
  return (
    <Switch>
      <Route path="/dashboard/statistics" component={Statistics} />
      <Route />
      <Route />
    </Switch>
  ) 
}