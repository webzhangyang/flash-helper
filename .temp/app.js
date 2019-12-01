import '@tarojs/async-await';
import Taro, { Component } from "@tarojs/taro-h5";
import { Provider } from "@tarojs/redux-h5";

import configStore from "./store/index";
import 'taro-ui/dist/style/index.scss'; // 全局引入一次即可taro-ui
import './app.less';
// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }
import Nerv from 'nervjs';
import { View, Tabbar, TabbarContainer, TabbarPanel } from '@tarojs/components';
import { Router, createHistory, mountApis } from '@tarojs/router';
Taro.initPxTransform({
  "designWidth": 750,
  "deviceRatio": {
    "640": 1.17,
    "750": 1,
    "828": 0.905
  }
});

const _taroHistory = createHistory({
  mode: "hash",
  basename: "/",
  customRoutes: {},
  firstPagePath: "/pages/index/index"
});

mountApis({
  "basename": "/",
  "customRoutes": {}
}, _taroHistory);
const store = configStore();
class App extends Component {
  state = {
    __tabs: {
      color: "#bfbfbf",
      selectedColor: "#2c2c2c",
      backgroundColor: "#FBFBFB",
      borderStyle: "white",
      list: [{
        pagePath: "/pages/index/index",
        text: "首页",
        iconPath: require("./assets/img/home_gray.png"),
        selectedIconPath: require("./assets/img/home.png")
      }, {
        pagePath: "/pages/tool/tool",
        text: "工具",
        iconPath: require("./assets/img/tool_gray.png"),
        selectedIconPath: require("./assets/img/tool.png")
      }],
      mode: "hash",
      basename: "/",
      customRoutes: {}
    }
  };

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
  componentDidMount() {}
  componentDidShow() {}
  componentDidHide() {}
  componentDidCatchError() {}
  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render() {
    return <Provider store={store}>
          
        <TabbarContainer>
          
        <TabbarPanel>
          
                <Router mode={"hash"} history={_taroHistory} routes={[{
            path: '/pages/index/index',
            componentLoader: () => import( /* webpackChunkName: "index_index" */'./pages/index/index'),
            isIndex: true
          }, {
            path: '/pages/tool/tool',
            componentLoader: () => import( /* webpackChunkName: "tool_tool" */'./pages/tool/tool'),
            isIndex: false
          }, {
            path: '/pages/test/test',
            componentLoader: () => import( /* webpackChunkName: "test_test" */'./pages/test/test'),
            isIndex: false
          }, {
            path: '/pages/milkyTea/milkyTea',
            componentLoader: () => import( /* webpackChunkName: "milkyTea_milkyTea" */'./pages/milkyTea/milkyTea'),
            isIndex: false
          }]} customRoutes={{}} />
                
        </TabbarPanel>
        <Tabbar conf={this.state.__tabs} homePage="pages/index/index" />
        </TabbarContainer>
        </Provider>;
  }
  config = {
    pages: ["/pages/index/index", "/pages/tool/tool", "/pages/test/test", "/pages/milkyTea/milkyTea"],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black'
    },
    tabBar: { color: "#bfbfbf", selectedColor: "#2c2c2c", backgroundColor: "#FBFBFB", borderStyle: "white", list: [{ pagePath: "/pages/index/index", text: "首页", iconPath: require("./assets/img/home_gray.png"), selectedIconPath: require("./assets/img/home.png") }, { pagePath: "/pages/tool/tool", text: "工具", iconPath: require("./assets/img/tool_gray.png"), selectedIconPath: require("./assets/img/tool.png") }], mode: "hash",
      basename: "/",
      customRoutes: {}
    }
  };

  componentWillUnmount() {
    this.componentDidHide();
  }

  componentWillMount() {
    Taro.initTabBarApis(this, Taro);
  }

}
Nerv.render(<App />, document.getElementById('app'));