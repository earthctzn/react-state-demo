import React from 'react';
import './App.css';
import CounterInput from './counterInput'
import Header from './Header'
import { Grid } from '@material-ui/core'

function App() {
  return (

    <Grid container direction='column'>
      
      <Grid container item>
        <Header />
      </Grid>

      <Grid container item>
        <Grid item xs={0} sm={2}/>
        <Grid item xs={12} sm={8}>
          This is where the CounterInput component will be displayed
        </Grid>
        <Grid item xs={0} sm={2}/>
      </Grid>

    </Grid>
  );
}

export default App;
