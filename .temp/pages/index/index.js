import Nerv from "nervjs";
import * as tslib_1 from "tslib";
import { Component } from "@tarojs/taro-h5";
import { View, Button, Text } from '@tarojs/components';
import { connect } from "@tarojs/redux-h5";
import { AtButton } from 'taro-ui';
import { add, minus, asyncAdd } from '../../actions/counter';
import './index.less';
let Index = class Index extends Component {
  constructor() {
    super(...arguments);
    /**
    * 指定config的类型声明为: Taro.Config
    *
    * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
    * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
    * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
    */
  }
  componentWillReceiveProps(nextProps) {
    console.log(this.props, nextProps);
  }
  componentWillUnmount() {}
  componentDidShow() {}
  componentDidHide() {}
  render() {
    return <View className="index">
        <Button className="add_btn" onClick={this.props.add}>+</Button>
        <Button className="dec_btn" onClick={this.props.dec}>-</Button>
        <Button className="dec_btn" onClick={this.props.asyncAdd}>async</Button>
        <AtButton type="primary">按钮文案</AtButton>
        <View><Text>{this.props.counter.num}</Text></View>
        <View><Text>Hello, World</Text></View>
      </View>;
  }
  config = {
    navigationBarTitleText: '首页'
  };

  componentDidMount() {
    super.componentDidMount && super.componentDidMount();
  }

};
Index = tslib_1.__decorate([connect(({ counter }) => ({
  counter
}), dispatch => ({
  add() {
    dispatch(add());
  },
  dec() {
    dispatch(minus());
  },
  asyncAdd() {
    dispatch(asyncAdd());
  }
}))], Index);
// #region 导出注意
//
// 经过上面的声明后需要将导出的 Taro.Component 子类修改为子类本身的 props 属性
// 这样在使用这个子类时 Ts 才不会提示缺少 JSX 类型参数错误
//
// #endregion
export default Index;