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
          status="403"
          title="无权限！"
          subTitle="你无权访问此页面"
          extra={<Button type="primary">回主页</Button>}
        />
      </div>
    </>
  )
}

export default Index