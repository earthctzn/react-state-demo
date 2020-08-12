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
        <Grid item xs={false} sm={4}/>
        <Grid item xs={12} sm={4}>
          <CounterInput />
        </Grid>
        <Grid item xs={false} sm={4}/>
      </Grid>

    </Grid>
  )
}

export default App;
