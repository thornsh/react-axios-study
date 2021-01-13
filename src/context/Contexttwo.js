import React, { PureComponent } from 'react'
import Secondcontext from '../context_utils/context'
import Contexttest from '../context_utils/contexttest';

import Contextthree from './Contextthree'

export default class Contexttwo extends PureComponent {
  constructor(){
    super();
    this.state = {
      counter:0
    }
  }
  render() {
    return (
      <div>
        <div>
          Contexttwo
        </div>
        <div>
          {this.state.counter}
        </div>
        <button onClick={e=>{this.changeCounter()}}>+1</button>
        {/* <Secondcontext.Provider value = {this.state.counter}>
          <Contextthree/>
        </Secondcontext.Provider> */}
        <Contexttest.Consumer>
          {
            (value)=>(
              <>
              <div>计数：{value}</div>
              <button onClick = {this.props.changeCounter}>++1</button>
              </>
            )
          }
        </Contexttest.Consumer>
        
      </div>
    )
  }
  changeCounter(){
    this.setState({
      counter:this.state.counter+1
    })
  }
}
