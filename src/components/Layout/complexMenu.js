import { SmileOutlined, HeartOutlined } from "@ant-design/icons"
import React from "react"

export default [
  {
    path: "/list",
    name: "首页",
    icon: <SmileOutlined />,
    locale: "menu.home",
    children: [
      {
        path: "/list/index",
        name: "概述",
        icon: <SmileOutlined />,
        hideInMenu: true,
        locale: "menu.home.overview",
      },
      {
        path: "/home/search",
        name: "搜索",
        icon: <SmileOutlined />,
        hideInMenu: true,
        locale: "menu.home.search",
      },
    ],
  },
  {
    path: "/data_hui",
    name: "汇总数据",
    icon: <SmileOutlined />,
    locale: "menu.data_hui",
    children: [
      {
        collapsed: true,
        menuName: "域买家维度交易",
        name: "域买家维度交易",
        icon: <SmileOutlined />,
        children: [
          {
            id: 2,
            name: "_交易_买家_月表",
            icon: <SmileOutlined />,
            path: "/data_hui2",
          },
          {
            name: "_航旅交易_买家_日表",
            icon: <SmileOutlined />,
            path:
              "/data_hui?tableName=adm_rk_cr_tb_trv_byr_ds&tableSchema=alifin_odps_birisk",
          },
        ],
      },
      {
        name: "域买家维度交易2",
        icon: <SmileOutlined />,
        path: "/",
        children: [
          {
            name: "_交易_买家_月表",
            icon: <SmileOutlined />,
            path: "/data_hui3",
          },
          {
            name: "_航旅交易_买家_日表",
            icon: <SmileOutlined />,
            key:
              "tableName=adm_rk_cr_tb_trv_byr_ds&tableSchema=alifin_odps_birisk",
            path: "/data_hui4",
          },
        ],
      },
    ],
  },
  {
    path: "/data_ming",
    name: "明细数据",
    icon: <SmileOutlined />,
    locale: "menu.data_ming",
    children: [
      {
        path: "/other/outLoadMenu",
        name: "菜单导出",
        icon: <SmileOutlined />,
        locale: "menu.other.outLoadMenu",
        hideInMenu: true,
      },
      {
        path: "/other/homeEdit",
        name: "概述导出",
        icon: <SmileOutlined />,
        locale: "menu.other.outHomeEdit",
      },
    ],
  },
  {
    path: "/other",
    name: "其他",
    icon: <SmileOutlined />,
    locale: "menu.other",
    children: [
      {
        path: "/other/upLoad",
        name: "odps同步导入",
        icon: <SmileOutlined />,
        locale: "menu.other.upLoad",
      },
      {
        path: "/other/upLoadMenu",
        name: "菜单导入",
        icon: <SmileOutlined />,
        locale: "menu.other.upLoadMenu",
      },
      {
        path: "/other/homeEdit",
        name: "概述编辑",
        icon: <SmileOutlined />,
        locale: "menu.other.homeEdit",
        hideInMenu: true,
      },
    ],
  },
]
