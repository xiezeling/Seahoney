import React, {Component} from 'react';
import {NavLink} from 'react-router-dom'
import './index.less'

export default class FooterBar extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <footer className="footer-bar">
        <NavLink to="/home">首页</NavLink>
        <NavLink to="/work">关于一米鲜</NavLink>
        <NavLink to="/people">用户帮助</NavLink>
        <NavLink to="/service">服务范围</NavLink>
        <NavLink to="/user">我的</NavLink>
      </footer>
    )
  }
}
