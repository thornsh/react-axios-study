import React, { PureComponent } from 'react'

import FirstContext from '../context_utils/context'

export class Context01 extends PureComponent {
  constructor(){
    super();
    this.state = {
      active:false
    }
  }
  render() {
    return (
      <div>
        <FirstContext.Provider value = "dark">
          <Context02 active = {this.state.active}/>
        </FirstContext.Provider>
        
      </div>
    )
  }
}


export class Context02 extends PureComponent {
  render() {
    return (
      <div>
        <Context03 active = {this.props.active}/>
      </div>
    )
  }
}

export class Context03 extends PureComponent {
  static contextType = FirstContext;
  
  render() {
    return (
      <div>
        <button theme={this.context} className={this.props.active ? "active" : "noactive"}>按钮</button>

        <FirstContext.Consumer>
          {
            (value)=><button theme={value}>按钮二</button>
          }
        </FirstContext.Consumer>
      </div>
    )
  }
}

