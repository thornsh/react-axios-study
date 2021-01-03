import React, { PureComponent } from 'react'
import axios from 'axios'

export default class App extends PureComponent {
  constructor(){
    super();

    this.state = {
      products: []
    }
  }
  async componentDidMount(){
    // axios({
    //   url:"http://httpbin.org/get",
    //   params:{
    //     name:"aaa",
    //     age:"11"
    //   }
    // }).then(res =>{
    //   console.log(res);
    // }).catch(err => {
    //   console.error(err);
    // })
    const result = await axios({
      url:"http://httpbin.org/post",
      data:{
        name:"bbb",
        age:"22"
      },
      method:"post"
    })
    console.log(result);
  }
  render() {
    return (
      <div>
        ccc
      </div>
    )
  }
}
