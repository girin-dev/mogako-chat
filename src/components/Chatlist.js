import React, {Component} from 'react';
import { withRouter } from 'react-router-dom';

class Chatlist extends Component {
  constructor(props){
    super(props);
    this.state={
      chatList:[
        {id:1,title:'채팅방1',memberNum:5,recentMsg:'최근메시지1최근메시지1최근메시지1최근메시지1최근메시지1최근메시지1최근메시지1',recentTime:'오후 3:15',isNear:true},
        {id:2,title:'채팅방2',memberNum:32,recentMsg:'최근메시지2',recentTime:'오후 4:15',isNear:true,},
        {id:3,title:'채팅방3',memberNum:1,recentMsg:'최근메시지3',recentTime:'오후 12:12',isNear:true,},
        {id:4,title:'비활성 채팅방1',memberNum:4,recentMsg:'최근메시지3',recentTime:'오후 6:11',isNear:false,},
        {id:5,title:'비활성 채팅방2',memberNum:9,recentMsg:'최근메시지3',recentTime:'오후 11:04',isNear:false,},
      ]
    }
  }

  render() {
    const chatlistActive=[...this.state.chatList].filter(item=>item.isNear===true)
    const chatlistDisable=[...this.state.chatList].filter(item=>item.isNear===false)
    const listItemActive=chatlistActive.map(item=>{
      return (
        <li className="chat-item active" key={item.id}
        onClick={_=>{this.props.history.push({
          pathname: "/chatroom",
          state: {chatId:item.id}})}
        }
        >
          <h2 className="chat-item-title">{item.title}</h2><span className="chat-item-people">{item.memberNum}</span>
          <div className="chat-item-message">{item.recentMsg}</div>
          <time className="chat-item-time">{item.recentTime}</time>
        </li>
      )
    })
    const listItemDisable=chatlistDisable.map(item=>{
      return (
        <li className="chat-item disable" key={item.id}>
          <h2 className="chat-item-title">{item.title}</h2><span className="chat-item-people">{item.memberNum}</span>
          <div className="chat-item-message">{item.recentMsg}</div>
          <time className="chat-item-time">{item.recentTime}</time>
        </li>
      )
    })

    return (
      <section id="chat" className="chat aside">
        <h1 className="hidden">채팅방리스트</h1>
        <ul id="chatList" className="chat-list">
          {listItemActive}
          {listItemDisable}
        </ul>
        <button id="chatHide" className="chat-hide"><span className="hidden">챗팅리스트 숨기기</span></button>
    </section>
    );
  }
}

export default withRouter(Chatlist);
