import {
  IdcardOutlined,
  NodeExpandOutlined,
  DashboardOutlined,
  SettingOutlined,
  AuditOutlined,
  ShoppingCartOutlined,
  MoneyCollectOutlined,
  TeamOutlined
} from "@ant-design/icons"
import React from "react"

export default [
  {
    path: "/",
    name: "工作台",
    icon: <DashboardOutlined/>,
    component: 'views/dashboard'
  },
  {
    path: "/api",
    name: "接口",
    icon: <NodeExpandOutlined />,
    component: 'views/api'
  },
  {
    path: "/403",
    component: 'views/common/403'
  },
  {
    path: "/404",
    component: 'views/common/404'
  },
  {
    path: "/500",
    component: 'views/common/500'
  },
  {
    path: "/user",
    name: "会员",
    icon: <IdcardOutlined/>,
    children: [
      {
        path: "/user/index",
        name: "会员列表",
        component: 'views/user/index'
      },
      {
        path: "/user/conf",
        name: "会员配置",
        component: 'views/user/conf'
      }
    ]
  },
  {
    path: "/goods",
    name: "商品",
    icon: <ShoppingCartOutlined/>,
    children: [
      {
        path: "/goods/index",
        name: "商品列表",
        component: 'views/goods/index'
      },
      {
        path: "/goods/type",
        name: "商品分类",
        component: 'views/goods/type'
      },
      {
        path: "/goods/chart",
        name: "出入库统计",
        component: 'views/goods/chart'
      }
    ]
  },
  {
    path: "/order",
    name: "工单",
    icon: <AuditOutlined/>,
    children: [
      {
        path: "/order/index",
        name: "工单列表",
        component: 'views/order/index'
      },
      {
        path: "/order/conf",
        name: "工单配置",
        component: 'views/order/conf'
      }
    ]
  },
  {
    path: "/finance",
    name: "财务",
    icon: <MoneyCollectOutlined/>,
    children: [
      {
        path: "/finance/index",
        name: "财务列表",
        component: 'views/finance/index'
      },
      {
        path: "/finance/chart",
        name: "流水统计",
        component: 'views/finance/chart'
      }
    ]
  },
  {
    path: "/staff",
    name: "员工",
    icon: <TeamOutlined/>,
    children: [
      {
        path: "/staff/department",
        name: "组织架构",
        component: 'views/staff/department'
      },
      {
        path: "/staff/role",
        name: "角色",
        component: 'views/staff/role'
      },
      {
        path: "/staff/index",
        name: "员工",
        component: 'views/staff/index'
      },
      {
        path: "/staff/authority",
        name: "权限",
        component: 'views/staff/authority'
      }
    ]
  },
  {
    path: "/setting",
    name: "系统设置",
    icon: <SettingOutlined/>,
    children: [
      {
        path: "/setting/conf",
        name: "个人设置",
        component: 'views/setting/conf'
      },
      {
        path: "/setting/dict",
        name: "字典配置",
        component: 'views/setting/dict'
      }
    ]
  }
]
