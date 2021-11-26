// 云函数入口文件
const cloud = require('../getlist1/node_modules/wx-server-sdk')

cloud.init({
    env:'cloud1-1gq2wa6591abf920'
  })

// 云函数入口函数
exports.main = async (event, context) => {
  return cloud.database().collection("actions").orderBy('time','desc').get({

    success(res){
    return res
},
    fail(err){
    return err
},
    })



}