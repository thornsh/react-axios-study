import React, { PureComponent } from 'react'
import Contexttest from '../context_utils/contexttest'

export default class Contextthree extends PureComponent {
  render() {
    return (
      <div>
        Contextthree

        <Contexttest.Consumer>
          {
            (value)=>(
              <>
                <div>three的计数{value}</div>
                <button onClick = {this.props.changeCounter}>+++++1</button>
              </>
            )
          }
        </Contexttest.Consumer>
      </div>
    )
  }
}
