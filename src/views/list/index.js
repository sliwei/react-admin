import React from "react"
import ProLayout, { PageContainer, DefaultFooter } from "@ant-design/pro-layout"
import { Result, Button } from "antd"
import { hot } from "react-hot-loader/root"
import { connect } from "dva"
import Hello from "../../components/Hello"
import { Link } from "react-router-dom"
const Index = props => {
  return (
    <PageContainer
      breadcrumb={false}
      // content={content}
      // tabList={[
      //   {
      //     tab: "基本信息",
      //     key: "base",
      //   },
      //   {
      //     tab: "详细信息",
      //     key: "info",
      //   },
      // ]}
      extra={[
        <Button key="3">操作</Button>,
        <Button key="2">操作</Button>,
        <Button key="1" type="primary">
          主操作
        </Button>,
      ]}
      // footer={[
      //   <Button key="3">重置</Button>,
      //   <Button key="2" type="primary">
      //     提交
      //   </Button>,
      // ]}
      className="content_style"
    >
      <div
        style={{
          // height: "100%",
          background: "#fff",
          padding: 16,
        }}
      >
        <Link to="/">首页</Link>

        <Result
          status="404"
          title="Hello World"
          subTitle="Sorry, you are not authorized to access this page."
          extra={<Button type="primary">Back Home</Button>}
        />

        <h1>Hello React! {props.state.count}</h1>
        <div>{"sssssss"}</div>
      </div>
    </PageContainer>
  )
}

export default connect(state => ({
  state: state,
}))(hot(Index))
