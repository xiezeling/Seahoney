import React, {Component} from 'react';
import {NavLink} from 'react-router-dom'
import './index.less'

export default class HeaderBar extends Component {
  constructor (props) {
    super(props)
  }
  static defaultProps = {
    leftContent: '',
    rightContent: ''
  }
  render () {
    const {
      leftContent,
      rightContent,
      children,
      onLeftClick
    } = this.props
    return (
      <header className="header-bar">
        <div className="left">
          {leftContent == '' ? <a href='javascript:;' onClick={() => {onLeftClick()}}>返回</a> : leftContent}
        </div>
        <h2>{children}</h2>
        <div className="right" >
          登录
        </div>
      </header>
    )
  }
}
