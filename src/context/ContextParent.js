import React, { PureComponent } from 'react'
import Contexttest from '../context_utils/contexttest'
import Contextthree from './Contextthree'
import Contexttwo from './Contexttwo'

export default class ContextParent extends PureComponent {
  constructor(){
    super();
    this.state = {
      counter:0
    }
  }
  render() {
    return (
      <div>
        <Contexttest.Provider value = {this.state.counter}>
          <Contexttwo changeCounter = {this.changeCounter.bind(this)}/>
          <Contextthree changeCounter = {this.changeCounter.bind(this)}/>
        </Contexttest.Provider>
        
      </div>
    )
  }
  changeCounter(){
    this.setState({
      counter:this.state.counter + 1
    })
  }
}
