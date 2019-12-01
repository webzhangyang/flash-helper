import Taro from '@tarojs/taro'
const appKey = 'bbcc82213e64f2d34f6e2ef33a1c1dfb' //  聚合数据平台申请，总共500次。接口文档：juhe.cn/box/index/id/39

/*---
  # 详情文档见：https://www.juhe.cn/docs/api/id/39 ⚠️⚠️⚠️次数宝贵不要随意调用
  http://v.juhe.cn/weather/index 通过url格式化的城市名，得到该城市的天气
  http://v.juhe.cn/weather/geo 通过经纬度得到该城市的天气数据
---*/
const pathObj = {
  commonPath: 'http://v.juhe.cn/weather/',
  getPath(type: string): string {
    return this.commonPath + type
  }
}

// 通用的参数接口
interface Params {
  dtype?: string
  format?: number
  key?: string
}

/*
  根据城市名获取天气
	cityname	Y	string	城市名或城市ID，如："苏州"，需要utf8 urlencode
 	dtype	N	string	返回数据格式：json或xml,默认json
 	format	N	int	未来7天预报(future)两种返回格式，1或2，默认1
 	key	Y	string	在个人中心->我的数据,接口名称上方查看
*/
interface IndexParams extends Params {
  cityname: string
}
export async function getWeatherByCityName(params: IndexParams = { cityname: '深圳' }): Promise<object> {
  return await getWeather({
    path: 'index',
    data: {
      cityname: encodeURIComponent(params.cityname),
      ...params
    }
  })
}

/*
  根据城市名获取天气
	cityname	Y	string	城市名或城市ID，如："苏州"，需要utf8 urlencode
 	dtype	N	string	返回数据格式：json或xml,默认json
 	format	N	int	未来7天预报(future)两种返回格式，1或2，默认1
 	key	Y	string	在个人中心->我的数据,接口名称上方查看
*/
interface GPSParams extends Params {
  lon: string // 经度
  lat: string // 纬度
}
export async function getWeatherByGPS(params: GPSParams): Promise<object> {
  return await getWeather({
    path: 'geo',
    data: params
  })
}

/* 
  封装获取天气的ajax
*/
type PathOptions = {
  path: string
  data?: object
  header?: object
  key?: string
}
export async function getWeather(options: PathOptions = { path: 'index', header: { 'content-type': 'application/json' } }): Promise<object> {
  return await Taro.request({
    url: pathObj.getPath(options.path),
    data: {
      key: options.key || appKey,
      ...options.data
    },
    header: options.header
  }).then(res => {
    console.log('请求结果', res)
    return res.data
  })
}

