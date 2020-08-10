import React from 'react';
import './App.css';
import CounterInput from './counterInput'
import { Grid } from '@material-ui/core'

function App() {
  return (
    <Grid container direction='column'>
      <Grid  item container>
        This is where the appBar content will be displayed
      </Grid>
      <Grid item container>
        <Grid item xs={0} sm={2}/>
        <Grid  item xs={12} sm={8}>
          This is where the CounterInput component will be displayed
        </Grid>
        <Grid item xs={0} sm={2}/>
      </Grid>

    </Grid>
  );
}

export default App;
