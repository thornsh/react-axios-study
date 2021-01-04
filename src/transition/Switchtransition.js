import React, { PureComponent } from 'react'

import { CSSTransition, SwitchTransition } from 'react-transition-group'

import './Switchtransition.css'

export default class Switchtransition extends PureComponent {
  constructor(){
    super();

    this.state = {
      isOn:true
    }
  }
  render() {
    const {isOn} = this.state;
    return (
      <div>
        Switchtransition
        <SwitchTransition mode="in-out">{/*默认out-in*/}
          <CSSTransition key={isOn ? "on" : "off"}
                         classNames="btn"
                         timeout={300}
          >
            <button onClick = {e=>this.setState({isOn:!isOn})}>
              {isOn ? "on" : "off"}
            </button>
          </CSSTransition>
        </SwitchTransition>
      </div>
    )
  }
}
