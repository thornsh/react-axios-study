import React, { PureComponent } from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import './Transitiongroup.css'

export default class Transitiongroup extends PureComponent {
  constructor(){
    super();

    this.state = {
      name:["aaa","bbb","ccc"]
    }
  }

  render() {
    return (
      <TransitionGroup>
        Transitiongroup

        {
          this.state.name.map((item,index)=>{
            return (
              <CSSTransition key={index}
                             timeout={500}
                             classNames="item"
              >
                <div>
                  {item}
                </div>
              </CSSTransition>
            )
          })
        }
        <button onClick = {e=>this.addName()}>+name</button>
      </TransitionGroup>
    )
  }

  addName(){
    this.setState({
      name:[...this.state.name,"qqq"]
    })
  }
}
