/*
 * @Description:
 * @Author: liusuolong001
 * @Date: 2024-07-08 13:35:18
 * @LastEditors: liusuolong001
 * @LastEditTime: 2024-07-09 05:18:46
 */
const express = require("express");
const multer = require("multer");

/* 
  创建一个server服务
*/
const server = express();

/*  
  中间件express中解析get params
  默认解析完放到request.params
*/
server.get("/search/:id/:name", (request, response) => {
  console.log("params", request.params);
  response.end("login success");
});

/* 
  开启服务
*/
server.listen("8000", () => {
  console.log("server success");
});
