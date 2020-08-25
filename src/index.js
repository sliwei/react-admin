import React from "react"
import dva from "dva"
import createLoading from "dva-loading"
import moment from "moment"
import "moment/locale/zh-cn"
// import "antd/dist/antd.css"
import "antd/dist/antd.less"
import RootRouter from "./router"
import axios from "axios"
import {ConfigProvider} from "antd"
import zhCN from 'antd/es/locale/zh_CN';
import store from './store'

// 创建应用
const app = dva()
app.use(createLoading())
// 注册 Model
app.model(store)

// 注册视图
app.router(() => <ConfigProvider locale={zhCN}><RootRouter /></ConfigProvider>)
// 启动应用
app.start("#root")
