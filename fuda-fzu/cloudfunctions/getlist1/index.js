// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init({
    env:'cloud1-1gq2wa6591abf920'
  })

// 云函数入口函数
exports.main = async (event, context) => {
  return cloud.database().collection("enjoys").orderBy('time','desc').get({

    success(res){
    return res
},
    fail(err){
    return err
},
    })



}