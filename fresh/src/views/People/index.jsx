import React, {Component} from 'react';
import './index.less'

import HeaderBar from '@/Components/HeaderBar'
import * as pageAction from '@/action/people'
import {bindActionCreators} from 'redux'
import { connect } from 'react-redux'
import {set_age} from '../../action/people'
import FooterBar from '@/Components/FooterBar'
import Runs from './Runs'
class People extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    const {
      history
    } = this.props
    return (
      <div className="People-page">
        <HeaderBar onLeftClick={() => {history.go(-1)}}></HeaderBar>
        <Runs></Runs>
        <FooterBar></FooterBar>
      </div>
    )
  }
}

export default connect(
  (state) => {
    return {
      pageState: state.user
    }
  },
  (dispatch) => {
    return {
      pageActions: {
        set_age () {
          dispatch(pageAction.set_age(100))
        }
      }
    }
  }
)(People)