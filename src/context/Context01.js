import React, { PureComponent } from 'react'

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
        <Context02 active = {this.state.active}/>
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
  render() {
    return (
      <div>
        <button className={this.props.active ? "active" : "noactive"}>按钮</button>
      </div>
    )
  }
}


