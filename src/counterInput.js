import React from 'react'
import { connect } from 'react-redux'
import { increaseCount, decreaseCount } from './counterActions'
import { Button } from '@material-ui/core'
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
    textStyles: {
        textAlign: "center"
    },
    buttonStyles: {
        justifyContent: "center"
    }
});

function CounterInput(props){
    
    const handleOnClick = (e) => {
        e.preventDefault()
        if(e.target.innerText === 'UP') {
          props.increaseCount()  
        }else{
            props.decreaseCount()
        }
    }
    const classes = useStyles(props)
    return(
        <Card>
            <CardHeader className={classes.textStyles} title="Up Click Count"/>
            <CardContent className={classes.textStyles} component='h1'>
                {props.count}
            </CardContent>
            
            <CardActions className={classes.buttonStyles}>
                <Button 
                    name="up"
                    color='primary'
                    variant='outlined'                
                    onClick={e => handleOnClick(e)}
                >Up</Button>
                <Button                
                    name="down"
                    color='primary'
                    variant='outlined'
                    onClick={e => handleOnClick(e)}
                >Down</Button>
            </CardActions>
        </Card>
    )   
}

const mapStateToProps = state => {
    return ({
        count: state.count
    })
}
export default connect(mapStateToProps, { 
    increaseCount, 
    decreaseCount 
})(CounterInput);





// function CounterInput(props){
    
//     const handleOnClick = (e) => {
//          e.preventDefault()
//          if(e.target.innerText === 'UP') {
//            props.increaseCount()  
//          }else{
//              props.decreaseCount()
//          }
//      }
 
//      const classes = useStyles(props)  
//      return(
//          <Card>
//              <CardHeader className={classes.textStyles} title="Up click counter" />
     
//              <Card className={classes.textStyles}>
//                  <Typography variant="h3" component='h3' >
//                      {props.count}
//                  </Typography>
//              </Card>
         
//              <CardActions className={classes.buttonStyles}>
//                  <Button 
//                      name="up"
//                      color='primary'
//                      variant='outlined'
//                      onClick={e => handleOnClick(e)}
//                  >Up</Button>
//                  <Button                
//                      name="down"
//                      color='primary'
//                      variant="outlined"
//                      onClick={e => handleOnClick(e)}
//                  >Down</Button>
//              </CardActions>
 
//          </Card>
//      )   
//  }