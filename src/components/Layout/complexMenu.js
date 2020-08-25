import { SmileOutlined, HeartOutlined } from "@ant-design/icons"
import React from "react"

export default [
  {
    path: "/",
    name: "Welcome",
    icon: <SmileOutlined />,
    locale: "menu.home",
    children: [
      {
        path: "/",
        name: "概述",
        icon: <SmileOutlined />,
        hideInMenu: true,
        locale: "menu.home.overview",
      },
    ],
  },
  {
    path: "/list",
    name: "列表",
    icon: <SmileOutlined />,
    locale: "menu.other",
    children: [
      {
        path: "/list/index",
        name: "PRO Table",
        icon: <SmileOutlined />,
        locale: "menu.other.upLoad",
      },
      {
        path: "/list/echarts",
        name: "图表",
        icon: <SmileOutlined />,
        locale: "menu.other.upLoadMenu",
      },
      {
        path: "/list/content",
        name: "内容",
        icon: <SmileOutlined />,
        locale: "menu.other.homeEdit",
        // hideInMenu: true,
      },
    ],
  },
]
