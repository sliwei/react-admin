import React, { useEffect } from "react"
import dva from "dva"
import createLoading from "dva-loading"
import moment from "moment"
import "moment/locale/zh-cn"
// import "antd/dist/antd.css"
import "antd/dist/antd.less"
// import "@ant-design/aliyun-theme/index.less"
import RootRouter from "./router"
import axios from "axios"
import {ConfigProvider} from "antd"
import zhCN from 'antd/es/locale/zh_CN';
import store from './store'

const App = () => {
  useEffect(() => {
    let indexLoading = document.querySelector('.indexLoading');
    indexLoading.style.opacity = 0;
    setTimeout(() => {
      indexLoading.style.display = 'none';
    }, 300);
  }, [])
  return (
    <ConfigProvider locale={zhCN}><RootRouter /></ConfigProvider>
  )
}

// 创建应用
const app = dva()
app.use(createLoading())
// 注册 Model
app.model(store)

// 注册视图
app.router(() => <App/>)
// 启动应用
app.start("#root")
