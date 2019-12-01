import { ComponentClass } from 'react'
import Taro, { Component } from '@tarojs/taro'
import { View, Image, } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import { AtInputNumber } from 'taro-ui'
import { milkyTeaChange, getMilkyTeaList } from '../../actions/counter'

import './milkyTea.less'

type PageStateProps = {
  counter: {
    num: number,
    milkyTeaMenuList: []
  }
}

type PageDispatchProps = {
  milkyTeaChange: () => void,
  getMilkyTeaList: () => void
}

type PageOwnProps = {}

type PageState = {}

type IProps = PageStateProps & PageDispatchProps & PageOwnProps

interface MilkyTeaList {
  props: IProps;
}

@connect(({ counter }) => ({
  counter
}), (dispatch) => ({
    milkyTeaChange (value, item) {
    dispatch(milkyTeaChange(value, item))
  },
  getMilkyTeaList () {
    dispatch(getMilkyTeaList())
  },
}))
class MilkyTeaList extends Component {

  componentWillReceiveProps () {
    // console.log(this.props.counter)
  }
  shouldComponentUpdate(nextProps){
    if(nextProps.counter !== this.props.counter){
        return true
    }else{
        return false
    }
   
  }
  componentDidMount () {
    this.props.getMilkyTeaList()
  }
  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
        <View>
            {this.props.counter.milkyTeaMenuList.map((item:{milkyTeaImg,milkyTeaCharge,milkyTeaName,milkyTeaNum,milkyTeaPrice})=>{
                return (
                    <View className="at-row at-row__align--center">
                        <View className='at-col at-col-3 '>
                            <Image className="productImg" src={item.milkyTeaImg} />
                        </View>
                        <View className='at-col at-col-5 productInt at-col__offset-1'>
                            <View>{item.milkyTeaName}</View>
                            <View className="productCharge">{item.milkyTeaCharge}</View>
                            <View className="productPrice">{item.milkyTeaPrice}</View>
                        </View>
                        <View className='at-col at-col-3'>
                            <AtInputNumber
                                type='number'
                                min={0}
                                step={1}
                                value={item.milkyTeaNum}
                                onChange={this.props.milkyTeaChange.bind(this,item)/*传参必须多传一个this，不要问我为什么 我也不知道*/}
                            />
                        </View>
                    </View>
                )
            })}
        </View>
        
    )
  }
}

export default MilkyTeaList as ComponentClass<PageOwnProps, PageState>
