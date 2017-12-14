import React, { Component } from 'react'
import Art_1 from '../../../../static/images/art_1.jpg'
import Art_2 from '../../../../static/images/art_2.jpg'
import Art_3 from '../../../../static/images/art_3.jpg'
import Art_4 from '../../../../static/images/art_4.jpg'
import tab1 from '../../../../static/images/tab1.jpg'
import tab2 from '../../../../static/images/tab2.jpg'
import tab3 from '../../../../static/images/tab3.jpg'
import tab5 from '../../../../static/images/tab5.jpg'
import tab6 from '../../../../static/images/tab6.jpg'
import tab_dec_1_c from '../../../../static/images/tab_dec_1_c.jpg'
import tab_dec_2 from '../../../../static/images/tab_dec_2.jpg'
import tab_dec_3_c from '../../../../static/images/tab_dec_3_c.jpg'
import tab_dec_5 from '../../../../static/images/tab_dec_5.jpg'
import tab_dec_6 from '../../../../static/images/tab_dec_6.jpg'
import './index.less'

export default class Titles extends Component {
  constructor (props) {
    super(props)
    this.clickLi = this.clickLi.bind(this)
  }
  clickLi () {
    var lis = document.querySelectorAll('ul li')
    for (var i = 0; i < lis.length; i++) {
      lis[i].onclick = function () {
        this.classList.toggle('active')
      }
    }
  }
  render () {
    return (
      <div className="Tiltles">
        <div className="title">
          <p>走遍世界寻找新鲜</p>
          <p>只为美好触手可及</p>
        </div>
        <div className="friut">
          <dl>
            <dt><img src={Art_1} /></dt>
            <dd><span>品质</span></dd>
          </dl>
          <dl>
            <dt><img src={Art_2} /></dt>
            <dd><span>快乐</span></dd>
          </dl>
          <dl>
            <dt><img src={Art_3} /></dt>
            <dd><span>分享</span></dd>
          </dl>
        </div>
        <div className="title">
          <p>我们不仅售卖新鲜</p>
          <p>更发觉鲜为人知的美好</p>
        </div>
        <div className="imgs">
          <a href="javascript:;">
            <img src={Art_4} />
          </a>
        </div>
        <div className="title">
          <p>不浪费每一颗鲜果</p>
          <p>不辜负每一份期待</p>
        </div>
        <div className="ban">
          <div>
            <div className="left">
              <a href="javascript:;"><img src={tab1} /></a>
            </div>
            <div className="right">
              <a href="javascript:;"><img src={tab_dec_1_c} /></a>
            </div>
          </div>
          {/* <div>
            <div className="left">
              <a href="javascript:;"><img src={tab2} /></a>
            </div>
            <div className="right">
              <a href="javascript:;"><img src={tab_dec_2} /></a>
            </div>
          </div>
          <div>
            <div className="left">
              <a href="javascript:;"><img src={tab3} /></a>
            </div>
            <div className="right">
              <a href="javascript:;"><img src={tab_dec_3_c} /></a>
            </div>
          </div> */}
          <div className="ban_bottom">
            <ul onClick={this.clickLi}>
              <li>用户下单</li>
              <li>凌晨采购</li>
              <li>产地直发</li>
              <li>集中生产</li>
              <li>自选收货</li>
            </ul>
          </div>        
        </div>
        <div className="address">
          <p>Copyright 2015 1 mxian.com|All Right Reserved</p>
          <p>京ICP备14056491号-1联系我们</p>
        </div>
      </div>
    )
  }
}