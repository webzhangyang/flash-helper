import { ComponentClass } from 'react'
import Taro, { Component, Config } from '@tarojs/taro'
import { View} from '@tarojs/components'
import { connect } from '@tarojs/redux'
import { AtSearchBar } from 'taro-ui'
import { handleChange } from '../../actions/counter'
import MilkyTeaList from './MilkyTeaList'
import MilkyTeaPrice from './MilkyTeaPrice'

import './milkyTea.less'

type PageStateProps = {
  counter: {
    num: number
  }
}

type PageDispatchProps = {
  handleChange: () => void
}

type PageOwnProps = {}

type PageState = {}

type IProps = PageStateProps & PageDispatchProps & PageOwnProps

interface milkyTea {
  props: IProps;
}

@connect(({ counter }) => ({
  counter
}), (dispatch) => ({
  handleChange (value) {
    dispatch(handleChange(value))
  },
}))
class milkyTea extends Component {
    config: Config = {
    navigationBarTitleText: '奶茶菜单'
  }

  componentWillReceiveProps () {
    // console.log(this.props, nextProps)
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='menu'>
        <AtSearchBar  value="" onChange={()=>{}} />
        <MilkyTeaList></MilkyTeaList>
        <MilkyTeaPrice></MilkyTeaPrice>
      </View>
    )
  }
}

export default milkyTea as ComponentClass<PageOwnProps, PageState>
