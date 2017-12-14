import React, {Component} from 'react';
import axios from 'axios'
import './index.less'
import FooterBar from '@/Components/FooterBar'
import HeaderBar from '@/Components/HeaderBar'
import Banners from './components/Banners'
import Titles from './components/Titles'
export default class Home extends Component {
  constructor (props) {
    super(props)
  }
  render () {
    const {
      history
    } = this.props
    return (
      <div className="home-page">
        <HeaderBar onLeftClick={() => {history.go(-1)}}></HeaderBar>
        <Banners></Banners>
        <Titles></Titles>
        <FooterBar></FooterBar>
      </div>
    )
  }
}