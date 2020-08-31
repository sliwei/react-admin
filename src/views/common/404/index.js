import React from "react"
import { Button, Result } from "antd"

const Index = () => {
  return (
    <>
      <div
        style={{
          background: "white",
          padding: 16,
          margin: 16,
          boxShadow: "0 1px 4px rgba(0, 21, 41, 0.08)"
        }}
      >
        <Result
          status="404"
          title="未找到！"
          subTitle="你想访问的页面未找到"
          extra={<Button type="primary">回主页</Button>}
        />
      </div>
    </>
  )
}

export default Index