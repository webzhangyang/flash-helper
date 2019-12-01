import { ComponentClass } from 'react'
import Taro, { Component } from '@tarojs/taro'
import { View, Image, } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import { getWeatherMessage } from '../../../actions/counter'
import Tools from '../../../common/tool'

import './index.less'

type PageStateProps = {
  counter: {
    weatherImg: '',//天气图片
    weather: '', //天气
  }
}

type PageDispatchProps = {
  getWeatherMessage: () => void
}

type PageOwnProps = {}

type PageState = {}

type IProps = PageStateProps & PageDispatchProps & PageOwnProps

interface Weather {
  props: IProps;
}

@connect(({ counter }) => ({
  counter
}), (dispatch) => ({
  getWeatherMessage () {
    dispatch(getWeatherMessage())
  },
}))
class Weather extends Component {

  componentWillReceiveProps (nextProps) {
    // console.log(this.props.counter)
  }
  shouldComponentUpdate(nextProps,nextState){
    if(nextProps.counter !== this.props.counter){
        return true
    }else{
        return false
    }
   
  }
  componentDidMount () {
    this.props.getWeatherMessage()
  }
  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    let {weatherImg, weather} = this.props.counter;
    return (
        <View>
            <View className='weather-wrap'>
                <Image className="weatherImg" src={weatherImg} />
                <View>{weather}</View>
            </View>
        </View>
        
    )
  }
}

export default Weather as ComponentClass<PageOwnProps, PageState>
