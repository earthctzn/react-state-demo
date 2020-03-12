import React, { Component } from 'react'
import { connect } from 'react-redux'
import { 
    increaseCount, 
    decreaseCount 
} from './counterActions'

class counterInput extends Component {
    
    handleOnClick = (e) => {
        e.preventDefault()
        if(e.target.name === 'up') {
          this.props.increaseCount()  
        }else{
            this.props.decreaseCount()
        }
    }
    render(){
        return(
            <div>
                <h1>The up button has been clicked {this.props.count} times!</h1>
                <button 
                    name="up"
                    onClick={e => this.handleOnClick(e)}
                >Up</button>

                <button 
                    name="down"
                    onClick={e => this.handleOnClick(e)}
                >Down</button>
            </div>
        )
    }
}
const mapStateToProps = state => {
    return ({
        count: state.count
    })
}
export default connect(mapStateToProps, { increaseCount, decreaseCount })(counterInput);