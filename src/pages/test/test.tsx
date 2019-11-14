import { ComponentClass } from 'react'
import Taro, { Component, Config } from '@tarojs/taro'
import { View, Button, Text } from '@tarojs/components'


type PageOwnProps = {}

type PageState = {}


class Test extends Component {

    config: Config = {
    navigationBarTitleText: 'test'
  }

  componentWillReceiveProps (nextProps) {
    console.log(this.props, nextProps)
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  printHello ():void {
      console.warn('hello world!')
  } 

  alertHello ():void {
      alert('hello world!')
  }

  render () {
    return (
      <View className='index'>
        <Button onClick={this.printHello}>print hello world</Button>
        <Button onClick={this.alertHello}>alert hello world</Button>
        <View><Text>Hello, World</Text></View>
      </View>
    )
  }
}

export default Test as ComponentClass<PageOwnProps, PageState>
