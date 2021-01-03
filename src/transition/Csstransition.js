import React, { PureComponent } from 'react'
import { CSSTransition } from 'react-transition-group'

import { Card, Avatar } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';

const { Meta } = Card;

export default class Csstransition extends PureComponent {
  constructor(){
    super();
    this.state = {
      isShow:true
    }
  }
  render() {
    const {isShow} = this.state;
    return (
      <div>
        abc
        <button onClick = {e => {this.setState({isShow: !isShow})}}>显示/隐藏</button>
        <CSSTransition in={isShow}
                       classNames = "card"
                       timeout={500}
                       >
          <Card
            style={{ width: 300 }}
            cover={
              <img
                alt="example"
                src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
              />
            }
            actions={[
              <SettingOutlined key="setting" />,
              <EditOutlined key="edit" />,
              <EllipsisOutlined key="ellipsis" />,
            ]}
          >
            <Meta
              avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
              title="Card title"
              description="This is the description"
            />
          </Card>
        </CSSTransition>
      </div>
    )
  }
}
