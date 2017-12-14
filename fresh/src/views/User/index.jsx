import React, {Component} from 'react';
import './index.less'
import FooterBar from '@/Components/FooterBar'
export default class User extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div className="login">
        <div className="login_on">
          <p><input type="phone" placeholder="手机号"/></p>
          <p><input type="password" placeholder="密码"/></p>
          <button>登录</button>
          <h5>注册新片场号</h5>
          <hr/>
        </div>
      </div>
    )
  }
}
