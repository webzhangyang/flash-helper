import jsonp from 'jsonp';
import  ajax from './ajax';
//请求天气参数
export  const reqWeather = (city)=>{
  return new Promise((resolve,reject)=>{
      jsonp(
          `http://api.map.baidu.com/telematics/v3/weather?location=${city}&output=json&ak=3p49MVra6urFRGOT9s8UBWr2`,
          (err,data)=>{
              if(!err,data){
                  // console.log(err,data);
                  const { dayPictureUrl, weather } = data.results[0].weather_data[0];
                  resolve({  weather,weatherImg: dayPictureUrl });
              }else{
                  //提示错误
                  reject('请求失败,网络不稳定!');
              }
          }
      )
  })
}

//获取地理位置 