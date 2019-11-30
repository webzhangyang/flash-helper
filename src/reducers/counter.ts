import { ADD, MINUS, CUSTO, MILKY_TEA_LIST, MILKY_TEA_NUM, MILKY_TEA_SHOP_CAR, MILKY_TEA_GOODS } from '../constants/counter'

const INITIAL_STATE = {
  num: 0,
  milkyTeaMenuList: [],
  milkyTeaGoodsNum: 0,
  milkyTeaTotal: 0,
  milkyTeaGoodsList: [],
  milkyTeaShowFloat: false
}

export default function counter (state = INITIAL_STATE, action) {
  switch (action.type) {
    case ADD:
      return {
        ...state,
        num: state.num + 1  
      }
     case MINUS:
       return {
         ...state,
         num: state.num - 1
       }
    case CUSTO:
      return {
        ...state,
        num: parseInt(action.value)
      }
    case MILKY_TEA_LIST:
      return {
        ...state,
        milkyTeaMenuList: action.data.list
      }
    case MILKY_TEA_NUM:
      let newState = JSON.parse(JSON.stringify(state)) //必须深度拷贝state，否则页面不更新而且会报错
      newState.milkyTeaMenuList[action.index].milkyTeaNum = action.milkyTeaNum
      newState.milkyTeaMenuList[action.index].milkyTeaTotal = newState.milkyTeaMenuList[action.index].price * action.milkyTeaNum
      let strarr = [], total = [];
      for (let i in  newState.milkyTeaMenuList) {
          strarr.push(newState.milkyTeaMenuList[i]['milkyTeaNum'])
          if(newState.milkyTeaMenuList[i]['milkyTeaTotal']){
            total.push(newState.milkyTeaMenuList[i]['milkyTeaTotal'])
          }
      };
      newState.milkyTeaGoodsNum = eval(strarr.join('+')) //奶茶总数
      newState.milkyTeaTotal = eval(total.join('+'))  //总钱数
      if(newState.milkyTeaGoodsList.length <= 0){
        newState.milkyTeaGoodsList.push(action.option)
      }else{
        newState.milkyTeaGoodsList = newState.milkyTeaGoodsList.filter((val) => {
            return val.milkyTeaType !== action.option.milkyTeaType
        })
        newState.milkyTeaGoodsList.push(action.option)
      }

      return newState
    case MILKY_TEA_SHOP_CAR:
        state.milkyTeaGoodsList = state.milkyTeaGoodsList.filter((val:{milkyTeaNum}) => {
          return val.milkyTeaNum != 0
        })
      return{
        ...state,
        milkyTeaShowFloat: !state.milkyTeaShowFloat
      }
    case MILKY_TEA_GOODS:
      state.milkyTeaGoodsList = state.milkyTeaGoodsList.filter((val:{milkyTeaType}) => {
          return val.milkyTeaType !== action.option.milkyTeaType
      })
      if(action.milkyTeaNum != 0){
        action.option.milkyTeaNum = action.milkyTeaNum
        state.milkyTeaGoodsList.push(action.option)
      }
      state.milkyTeaMenuList[action.option.milkyTeaMenuIndex].milkyTeaNum = action.milkyTeaNum
      state.milkyTeaMenuList[action.option.milkyTeaMenuIndex].milkyTeaTotal = action.milkyTeaNum * action.option.milkyTeaPrice
      let shopStrarr = [], shoptotal = [];
      for (let i in  state.milkyTeaMenuList) {
        shopStrarr.push(state.milkyTeaMenuList[i]['milkyTeaNum'])
        if(state.milkyTeaMenuList[i]['milkyTeaTotal']){
          shoptotal.push(state.milkyTeaMenuList[i]['milkyTeaTotal'])
        }
      };
      state.milkyTeaGoodsNum = eval(shopStrarr.join('+')) //奶茶总数
      state.milkyTeaTotal = eval(shoptotal.join('+'))  //总钱数
      if(state.milkyTeaGoodsList.length == 0){
        state.milkyTeaShowFloat = false
      }
      return{
        ...state
      }
     default:
       return state
  }
}

