import { ComponentClass} from 'react'
import Taro, { Component } from '@tarojs/taro'
import { View,} from '@tarojs/components'
import { connect } from '@tarojs/redux'
import { AtInputNumber, AtFloatLayout, AtBadge, AtIcon } from 'taro-ui'
import { milkyTeaGoodsChangeAction, milkyTeaShopCarAction } from '../../actions/counter'

import './milkyTea.less'

type PageStateProps = {
  counter: {
    num: number,
    milkyTeaGoodsNum: number,
    milkyTeaTotal: number,
    milkyTeaGoodsList: [],
    milkyTeaShowFloat: boolean
  }
}

type PageDispatchProps = {
  milkyTeaGoodsChangeAction: () => void
  milkyTeaShopCarAction: () => void
}

type PageOwnProps = {}

type PageState = {}

type IProps = PageStateProps & PageDispatchProps & PageOwnProps

interface MilkyTeaPrice {
  props: IProps;
}

@connect(({ counter }) => ({
  counter
}), (dispatch) => ({
  milkyTeaGoodsChangeAction (item,value) {
    dispatch(milkyTeaGoodsChangeAction(item,value))
  },
  milkyTeaShopCarAction () {
    dispatch(milkyTeaShopCarAction())
  }
  
}))
class MilkyTeaPrice extends Component {


  componentWillReceiveProps (nextProps) {
    // console.log(this.props, nextProps)
  }
  shouldComponentUpdate(nextProps,nextState){
    if(nextProps.counter !== this.props.counter){
        return true
    }else{
        return false
    }
   
  }
  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
        <View>
            <AtFloatLayout isOpened={this.props.counter.milkyTeaShowFloat} onClose={this.props.milkyTeaShopCarAction} >
              {this.props.counter.milkyTeaGoodsList.map((item,index) => {
                return (
                  <View className="at-row">
              <View className='at-col at-col-3 '>{item.milkyTeaName}</View>
                    <View className='at-col at-col-3 floatPrice'>￥{item.milkyTeaPrice * item.milkyTeaNum}.0元</View>
                    <View className="at-col at-col-3 at-col__offset-3" >
                      <AtInputNumber
                          type='number'
                          min={0}
                          step={1}
                          value={item.milkyTeaNum}
                          onChange={this.props.milkyTeaGoodsChangeAction.bind(this,item)}
                      />
                      </View>
                  </View>
                )
              })}
              
            </AtFloatLayout>
            <View className="flexBottom">
                <View className={this.props.counter.milkyTeaGoodsNum ? "ShopIcon ShopIcon2" : "ShopIcon"} onClick={this.props.counter.milkyTeaGoodsNum ? this.props.milkyTeaShopCarAction : () => {}}>
                    <AtBadge value={this.props.counter.milkyTeaGoodsNum} maxValue={99}>
                        <AtIcon value='shopping-cart' size='30' color='#FFF'></AtIcon>
                    </AtBadge>
                </View>
                <View className="shopPrice">
                    {this.props.counter.milkyTeaTotal ? `共：${this.props.counter.milkyTeaTotal}元` : '未选择任何商品'}
                </View>
                <View className={this.props.counter.milkyTeaTotal > 15 ? "shopResults shopResults2" : "shopResults"}>
                    {this.props.counter.milkyTeaTotal > 15 ? '去结算' : '￥15元起送'}
                </View>
            </View>
        </View>
    )
  }
}

export default MilkyTeaPrice as ComponentClass<PageOwnProps, PageState>
