import React, { Component } from "react"
import { hot } from "react-hot-loader/root"
import { connect } from "dva"
import {
  Button,
  Avatar,
  Badge,
  Space,
  Breadcrumb,
  Menu,
  Dropdown,
  Tabs,
  Popover,
  List,
  Result,
  Descriptions,
} from "antd"
import ProLayout, { PageContainer, DefaultFooter } from "@ant-design/pro-layout"
import complexMenu from "./complexMenu"
import {
  UserOutlined,
  BellOutlined,
  SearchOutlined,
  QuestionCircleOutlined,
  SettingOutlined,
  LoginOutlined,
} from "@ant-design/icons"
import { red } from "@ant-design/colors"
import "./App.less"
import AppRouter from "../../router/appRouter"
const { TabPane } = Tabs

const space = {
  height: "100%",
  display: "flex",
  alignItems: "center",
  margin: "0 12px",
  cursor: "pointer",
}

const menu = (
  <Menu>
    <Menu.Item icon={<UserOutlined />}>个人中心</Menu.Item>
    <Menu.Item icon={<SettingOutlined />}>个人设置</Menu.Item>
    <Menu.Divider />
    <Menu.Item icon={<LoginOutlined />}>退出登录</Menu.Item>
  </Menu>
)
const data = [
  {
    title: "新订单1",
  },
  {
    title: "新订单2",
  },
  {
    title: "新订单3",
  },
  {
    title: "新订单4",
  },
]

const content = (
  <Descriptions size="small" column={2}>
    <Descriptions.Item label="创建人">张三</Descriptions.Item>
    <Descriptions.Item label="联系方式">
      <a>421421</a>
    </Descriptions.Item>
    <Descriptions.Item label="创建时间">2017-01-10</Descriptions.Item>
    <Descriptions.Item label="更新时间">2017-10-10</Descriptions.Item>
    <Descriptions.Item label="备注">
      中国浙江省杭州市西湖区古翠路
    </Descriptions.Item>
  </Descriptions>
)
const App = props => {
  console.log(props)

  const callback = e => {
    console.log(e)
  }

  return (
    <>
      <div
        style={{
          height: "100vh",
          overflow: "auto",
        }}
      >
        <ProLayout
          location={{
            pathname: "/articles/new",
          }}
          route={{
            routes: complexMenu,
          }}
          menuDataRender={e => e}
          disableContentMargin
          layout="top"
          rightContentRender={() => (
            <div
              style={{ height: "100%", display: "flex", alignItems: "center" }}
            >
              <div style={space}>
                <SearchOutlined style={{ fontSize: 20 }} />
              </div>
              <div style={space}>
                <QuestionCircleOutlined style={{ fontSize: 20 }} />
              </div>
              <Popover
                placement="bottomRight"
                arrowPointAtCenter
                trigger="click"
                content={() => (
                  <Tabs
                    className="app_tabs"
                    style={{ width: 300 }}
                    defaultActiveKey="1"
                    onChange={callback}
                    centered
                  >
                    <TabPane
                      tab={
                        <>
                          通知(<span style={{ color: red.primary }}>4</span>)
                        </>
                      }
                      key="1"
                    >
                      <List
                        itemLayout="horizontal"
                        dataSource={data}
                        renderItem={item => (
                          <List.Item>
                            <List.Item.Meta
                              avatar={
                                <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                              }
                              title={
                                <a href="https://ant.design">{item.title}</a>
                              }
                              description="这是一条消息这是一条消息这是一条消息这是一条消息这是一条消息"
                            />
                          </List.Item>
                        )}
                      />
                    </TabPane>
                    <TabPane
                      tab={
                        <>
                          消息(<span style={{ color: red.primary }}>14</span>)
                        </>
                      }
                      key="2"
                    >
                      <List
                        itemLayout="horizontal"
                        dataSource={data}
                        renderItem={item => (
                          <List.Item>
                            <List.Item.Meta
                              avatar={
                                <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                              }
                              title={
                                <a href="https://ant.design">{item.title}</a>
                              }
                              description="这是一条消息"
                            />
                          </List.Item>
                        )}
                      />
                    </TabPane>
                    <TabPane
                      tab={
                        <>
                          代办(<span style={{ color: red.primary }}>14</span>)
                        </>
                      }
                      key="3"
                    >
                      <List
                        itemLayout="horizontal"
                        dataSource={data}
                        renderItem={item => (
                          <List.Item>
                            <List.Item.Meta
                              avatar={
                                <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                              }
                              title={
                                <a href="https://ant.design">{item.title}</a>
                              }
                              description="这是一条消息"
                            />
                          </List.Item>
                        )}
                      />
                    </TabPane>
                  </Tabs>
                )}
              >
                <div style={space}>
                  <Badge dot>
                    <BellOutlined style={{ fontSize: 20 }} />
                  </Badge>
                </div>
              </Popover>
              <Dropdown overlay={menu}>
                <div style={space}>
                  <Avatar size="small" />
                  <span style={{ marginLeft: 5, color: "#FFF" }}>Admin</span>
                </div>
              </Dropdown>
            </div>
          )}
        >
          <ProLayout
            location={{
              pathname: "/home/overview",
            }}
            style={{
              maxHeight: "calc(100vh - 48px)",
            }}
            route={{
              routes: complexMenu,
            }}
            menuDataRender={e => e}
            disableContentMargin
            contentStyle={{
              minHeight: "auto",
            }}
            navTheme="light"
            menuHeaderRender={false}
            // headerRender={false} // 隐藏头
            headerContentRender={() => (
              // 显示头
              <Breadcrumb
                style={{
                  height: "100%",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Breadcrumb.Item>User</Breadcrumb.Item>
                <Breadcrumb.Item>Bill</Breadcrumb.Item>
              </Breadcrumb>
            )}
            siderWidth={180}
            footerRender={() => (
              <DefaultFooter
                className="app_footer"
                style={{
                  margin: "10px 0",
                }}
                links={null}
                copyright="antd Admin"
              />
            )}
          >
            <AppRouter />
          </ProLayout>
        </ProLayout>
      </div>
    </>
  )
}

export default connect(state => ({
  state: state,
}))(hot(App))
