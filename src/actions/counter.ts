<<<<<<< HEAD
=======

>>>>>>> f444cbec0dfa4798aa02941924816e567b0b8143
import {
  ADD,
  MINUS,
  CUSTO,
  MILKY_TEA_LIST,
  MILKY_TEA_NUM,
  MILKY_TEA_SHOP_CAR,
  MILKY_TEA_GOODS
} from '../constants/counter'

export const add = () => {
  return {
    type: ADD
  }
}
export const minus = () => {
  return {
    type: MINUS
  }
}
export const handleChange = (value) => {
  return {
    type: CUSTO,
    value: value
  }
}
// 异步的action
export function asyncAdd () {
  return dispatch => {
    setTimeout(() => {
      dispatch(add())
    }, 2000)
  }
}
//把奶茶列表传给redux
export const milkyTeaList = (data) => {
  return {
    type: MILKY_TEA_LIST,
    data
  }
}
//获取奶茶列表
export const getMilkyTeaList = ()=>{
  return (dispatch) => {
    // axios.get('https://www.easy-mock.com/mock/5dd0db8aa881483f4735b64a/milkyTeaList').then((res)=>{
    //   const action = milkyTeaList(res.data.data)
    //   dispatch(action)
    // })
    let res = {
      "data": {
        list: [{
            milkyTeaName: '原味1',
            milkyTeaCharge: '配料：珍珠、椰果',
            milkyTeaPrice: '￥10.0',
            milkyTeaImg: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1573918522119&di=66d0ead319c6b8707d2f7efe9c9dc107&imgtype=0&src=http%3A%2F%2Fku.90sjimg.com%2Felement_origin_min_pic%2F17%2F10%2F28%2Ff0c82ee3c8fe17ec374ebda1d4aa824e.jpg%2521%2Ffwfh%2F804x804%2Fquality%2F90%2Funsharp%2Ftrue%2Fcompress%2Ftrue',
            price: 10,
            milkyTeaNum: 0,
            milkyTeaType: 'NO1',
            index: 0
          },
          {
            milkyTeaName: '原味2',
            milkyTeaCharge: '配料：珍珠、椰果',
            milkyTeaPrice: '￥11.0',
            milkyTeaImg: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1573918522119&di=66d0ead319c6b8707d2f7efe9c9dc107&imgtype=0&src=http%3A%2F%2Fku.90sjimg.com%2Felement_origin_min_pic%2F17%2F10%2F28%2Ff0c82ee3c8fe17ec374ebda1d4aa824e.jpg%2521%2Ffwfh%2F804x804%2Fquality%2F90%2Funsharp%2Ftrue%2Fcompress%2Ftrue',
            price: 11,
            milkyTeaNum: 0,
            milkyTeaType: 'NO2',
            index: 1
          },
          {
            milkyTeaName: '原味3',
            milkyTeaCharge: '配料：珍珠、椰果',
            milkyTeaPrice: '￥12.0',
            milkyTeaImg: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1573918522119&di=66d0ead319c6b8707d2f7efe9c9dc107&imgtype=0&src=http%3A%2F%2Fku.90sjimg.com%2Felement_origin_min_pic%2F17%2F10%2F28%2Ff0c82ee3c8fe17ec374ebda1d4aa824e.jpg%2521%2Ffwfh%2F804x804%2Fquality%2F90%2Funsharp%2Ftrue%2Fcompress%2Ftrue',
            price: 12,
            milkyTeaNum: 0,
            milkyTeaType: 'NO3',
            index: 2
          },
          {
            milkyTeaName: '原味4',
            milkyTeaCharge: '配料：珍珠、椰果',
            milkyTeaPrice: '￥13.0',
            milkyTeaImg: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1573918522119&di=66d0ead319c6b8707d2f7efe9c9dc107&imgtype=0&src=http%3A%2F%2Fku.90sjimg.com%2Felement_origin_min_pic%2F17%2F10%2F28%2Ff0c82ee3c8fe17ec374ebda1d4aa824e.jpg%2521%2Ffwfh%2F804x804%2Fquality%2F90%2Funsharp%2Ftrue%2Fcompress%2Ftrue',
            price: 13,
            milkyTeaNum: 0,
            milkyTeaType: 'NO4',
            index: 3
          },
          {
            milkyTeaName: '原味5',
            milkyTeaCharge: '配料：珍珠、椰果',
            milkyTeaPrice: '￥14.0',
            milkyTeaImg: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1573918522119&di=66d0ead319c6b8707d2f7efe9c9dc107&imgtype=0&src=http%3A%2F%2Fku.90sjimg.com%2Felement_origin_min_pic%2F17%2F10%2F28%2Ff0c82ee3c8fe17ec374ebda1d4aa824e.jpg%2521%2Ffwfh%2F804x804%2Fquality%2F90%2Funsharp%2Ftrue%2Fcompress%2Ftrue',
            price: 14,
            milkyTeaNum: 0,
            milkyTeaType: 'NO5',
            index: 4
          }
        ]
      }
    }
    const action = milkyTeaList(res.data)
    dispatch(action)
  }
  
}
//选择的奶茶数
export const milkyTeaChange = (item, value) => {
  let option = {
    milkyTeaType: item.milkyTeaType,
    milkyTeaMenuIndex: item.index,
    milkyTeaNum: value,
    milkyTeaName: item.milkyTeaName,
    milkyTeaPrice: item.price
  }
  return {
    type: MILKY_TEA_NUM,
    option,
    index: item.index,
    milkyTeaNum: value
  }
}

export const milkyTeaShopCarAction = () => {
  return{
    type: MILKY_TEA_SHOP_CAR
  }
}

export const milkyTeaGoodsChangeAction = (item,value) => {
  console.log('item-->',item,value)
  return{
    type: MILKY_TEA_GOODS,
    option: item,
    milkyTeaNum: value
  }
}