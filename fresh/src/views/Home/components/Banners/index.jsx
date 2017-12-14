import React, { Component } from 'react'
import './index.less'
import logoImgs from '../../../../static/images/v2.0.png'
export default class Banners extends Component {
  constructor (props) {
    super(props)
    this.download = this.download.bind(this)
  }
  download () {
    window.location.href = '/Download'
  }
  render () {
    return (
      <div className="banners">
        <img src={logoImgs} />
        <p><a href="javascript:;" onClick={this.download}>iPhone版下载</a></p>
        <p><a href="javascript:;" onClick={this.download}>Android版下载</a></p>
      </div>
    )
  }
}