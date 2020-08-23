import React from "react"
import dva from "dva"
import createLoading from "dva-loading"
import zhCN from "antd/es/locale/zh_CN"
import moment from "moment"
import "moment/locale/zh-cn"
// import "antd/dist/antd.css"
import "antd/dist/antd.less"
import RootRouter from "./router"

// 创建应用
const app = dva()
app.use(createLoading())
// 注册 Model
app.model({
  namespace: "count",
  state: 0,
  reducers: {
    add(state) {
      return state + 1
    },
  },
  effects: {
    *addAfter1Second(action, { call, put }) {
      const res = yield (() =>
        new Promise(reslove => {
          setTimeout(() => {
            reslove(1)
          }, 2000)
        }))()
      yield put({ type: "add" })
      return res
    },
  },
})

// 注册视图
app.router(() => <RootRouter />)
// 启动应用
app.start("#root")
