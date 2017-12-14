import axios from 'axios'
import React, {Component} from 'react';
import './index.less'
import HeaderBar from '@/Components/HeaderBar'
import FooterBar from '@/Components/FooterBar'
import Freshs from './Freshs'
export default class Home extends Component {
  constructor (props) {
    super(props)
  }
  render () {
    const {
      history
    } = this.props
    return (
      <div className="work-page">
        <HeaderBar onLeftClick={() => {history.go(-1)}}></HeaderBar>
        <Freshs></Freshs>
        <FooterBar></FooterBar>
      </div>
    )
  }
}