/**
 * 工具文件
 */  

const Tools = {
  // 日期转化成字符串
  dateToStr(date, dateType, divide){
    if(Object.prototype.toString.call(date) !== "[object Date]"){
        return date;
    }
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();
    let hour = date.getHours();
    let min = date.getMinutes();
    let second = date.getSeconds();
    let temp = null;
    switch(dateType){
      case undefined:
        break;
      case "date":
        temp = [year, month, day];
        break;
      case "time":
          temp = [hour, min, second];
          break;  
      case "dateTime":
        temp = [year, month, day, hour, min ,second];
        break;
      default:
        break;  
    }
    return temp && temp.map(v => v.toString()[1] ? v : "0" + v).join(divide || "_");
  }
}
export default Tools;