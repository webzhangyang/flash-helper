import Nerv from "nervjs";
import Taro from "@tarojs/taro-h5";
import { View, OpenData } from '@tarojs/components';
// import { connect } from '@tarojs/redux'
import './index.less';
import header from '../../assets/img/header.jpg';
// type State = {
//   time:string
// }
// @connect(({ counter }) => ({
//   counter
// }), () => ({
// }))
class Index extends Taro.Component {
  constructor(props) {
    super(props); //调用父类的构造函数，固定写法
    this.state = {
      time: '15:30'
    };
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
        <OpenData type="userAvatarUrl" default-avatar={header} className="index_header" />
        <View className="index_time">{this.state.time}</View>
        <View>Good afternoon, <OpenData type="userNickName" default-text="1234" className="index_userName" />.</View>
      </View>;
  }
  config = {
    navigationBarTitleText: '首页'
  };

  componentDidMount() {
    super.componentDidMount && super.componentDidMount();
  }

}
// #region 导出注意
//
// 经过上面的声明后需要将导出的 Taro.Component 子类修改为子类本身的 props 属性
// 这样在使用这个子类时 Ts 才不会提示缺少 JSX 类型参数错误
//
// #endregion
export default Index;