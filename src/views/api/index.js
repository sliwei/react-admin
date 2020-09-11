import React, { useState } from "react"
import { Button, Input, Space, Row, Col, Tree, message, Collapse } from "antd"
import axios from "axios"
import beautify from "json-beautify"
import { PageContainer } from "@ant-design/pro-layout"
import {
  NodeExpandOutlined
} from "@ant-design/icons"

const { TextArea } = Input
const { DirectoryTree } = Tree
const { Panel } = Collapse

const treeData = [
  {
    title: "教务EAS",
    key: "0-0",
    selectable: false,
    children: [
      {
        icon: <NodeExpandOutlined/>,
        key: "0-0-0", isLeaf: true,
        title: "学员列表",
        url: "/tapi/teacherLeave/statistics",
        method: "post",
        data: {
          "teacher_id": 410,
          "ctime": { "gte": 0, "lte": 1908242726 },
          "leave_date": { "gte": "2019-06-24T16:00:00.000Z", "lte": "2019-06-24T16:00:00.000Z" }
        },
        headers: {
          authorization: "a"
        },
        note: {
          "teacher_id": "老师ID",
          "ctime": { "gte": "申请开始时间", "lte": "申请结束时间" },
          "leave_date": { "gte": "上课开始时间", "lte": "上课结束时间" }
        },
        returnNote: {
          "leave": "总数",
          "affectLeave": "课时"
        }
      },
      {
        icon: <NodeExpandOutlined/>,
        key: "0-0-1", isLeaf: true,
        title: "学员详情",
        url: "/tapi/teacherLeave/statistics",
        method: "post",
        data: {
          "teacher_id": 410,
          "ctime": { "gte": 0, "lte": 1908242726 },
          "leave_date": { "gte": "2019-06-24T16:00:00.000Z", "lte": "2019-06-24T16:00:00.000Z" }
        },
        headers: {
          authorization: "a"
        },
        note: {
          "teacher_id": "老师ID",
          "ctime": { "gte": "申请开始时间", "lte": "申请结束时间" },
          "leave_date": { "gte": "上课开始时间", "lte": "上课结束时间" }
        },
        returnNote: {
          "leave": "总数",
          "affectLeave": "课时"
        }
      }
    ]
  },
  {
    title: "外呼",
    key: "0-1",
    selectable: false,
    children: [
      {
        icon: <NodeExpandOutlined/>,
        key: "0-1-0", isLeaf: true,
        title: "坐席列表",
        url: "/tapi/teacherLeave/statistics",
        method: "post",
        data: {
          "teacher_id": 410,
          "ctime": { "gte": 0, "lte": 1908242726 },
          "leave_date": { "gte": "2019-06-24T16:00:00.000Z", "lte": "2019-06-24T16:00:00.000Z" }
        },
        headers: {
          authorization: "a"
        },
        note: {
          "teacher_id": "老师ID",
          "ctime": { "gte": "申请开始时间", "lte": "申请结束时间" },
          "leave_date": { "gte": "上课开始时间", "lte": "上课结束时间" }
        },
        returnNote: {
          "leave": "总数",
          "affectLeave": "课时"
        }
      },
      {
        icon: <NodeExpandOutlined/>,
        key: "0-1-1", isLeaf: true,
        title: "坐席统计",
        url: "/tapi/teacherLeave/statistics",
        method: "post",
        data: {
          "teacher_id": 410,
          "ctime": { "gte": 0, "lte": 1908242726 },
          "leave_date": { "gte": "2019-06-24T16:00:00.000Z", "lte": "2019-06-24T16:00:00.000Z" }
        },
        headers: {
          authorization: "a"
        },
        note: {
          "teacher_id": "老师ID",
          "ctime": { "gte": "申请开始时间", "lte": "申请结束时间" },
          "leave_date": { "gte": "上课开始时间", "lte": "上课结束时间" }
        },
        returnNote: {
          "leave": "总数",
          "affectLeave": "课时"
        }
      }
    ]
  },
  {
    title: "老师TMS",
    key: "0-2",
    selectable: false,
    children: [
      {
        icon: <NodeExpandOutlined/>,
        key: "0-2-0", isLeaf: true,
        title: "老师请假统计",
        url: "/tapi/teacherLeave/statistics",
        method: "post",
        data: {
          "teacher_id": 410,
          "ctime": { "gte": 0, "lte": 1908242726 },
          "leave_date": { "gte": "2019-06-24T16:00:00.000Z", "lte": "2019-06-24T16:00:00.000Z" }
        },
        headers: {
          authorization: "a"
        },
        note: {
          "teacher_id": "老师ID",
          "ctime": { "gte": "申请开始时间", "lte": "申请结束时间" },
          "leave_date": { "gte": "上课开始时间", "lte": "上课结束时间" }
        },
        returnNote: {
          "leave": "总数",
          "affectLeave": "课时"
        }
      }
    ]
  },
  {
    title: "自主约课",
    key: "0-3",
    selectable: false,
    children: [
      {
        icon: <NodeExpandOutlined/>,
        key: "0-3-0", isLeaf: true,
        title: "获取处理人",
        url: "/tapi/applyClass/getHandle",
        method: "post",
        data: {
          all: 1,
          ids: []
        },
        headers: {
          authorization: "a"
        },
        note: {
          "all": "是否查询全部处理人",
          "ids": "处理人ID"
        },
        returnNote: {
          "leave": "总数",
          "affectLeave": "课时"
        }
      },
      {
        icon: <NodeExpandOutlined/>,
        key: "0-3-1", isLeaf: true,
        title: "自主约课统计",
        url: "/dgql",
        method: "post",
        data: {
          "query": `{
   UApplyClassCustomTotal(query: "{\\"bool\\":{\\"must\\":[]}}") {
    waitClass
    fixClass
    overdueClass
    cancelClass
  }
}`,
        },
        headers: {
          authorization: "a"
        },
        note: {
          "query": "graphql 语句",
        },
        returnNote: {
          "waitClass": "老师ID",
          "fixClass": "老师ID",
          "overdueClass": "老师ID",
          "cancelClass": "老师ID",
        }
      }
    ]
  },
  {
    title: "9月二期",
    key: "0-4",
    selectable: false,
    children: [
      {
        icon: <NodeExpandOutlined/>,
        key: "0-4-0", isLeaf: true,
        title: "全局搜索",
        url: "/tapi/applyClass/getHandle",
        method: "post",
        data: {
          all: 1,
          ids: []
        },
        headers: {
          authorization: "a"
        },
        note: {
          "all": "是否查询全部处理人",
          "ids": "处理人ID"
        },
        returnNote: {
          "leave": "总数",
          "affectLeave": "课时"
        }
      },
      {
        icon: <NodeExpandOutlined/>,
        key: "0-4-1", isLeaf: true,
        title: "消息列表",
        url: "/dgql",
        method: "post",
        data: {
          "query": `{
   UApplyClassCustomTotal(query: "{\\"bool\\":{\\"must\\":[]}}") {
    waitClass
    fixClass
    overdueClass
    cancelClass
  }
}`,
        },
        headers: {
          authorization: "a"
        },
        note: {
          "query": "graphql 语句",
        },
        returnNote: {
          "waitClass": "老师ID",
          "fixClass": "老师ID",
          "overdueClass": "老师ID",
          "cancelClass": "老师ID",
        }
      }
    ]
  },
]

const Index = () => {
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState({
    // url: "/api/teacherLeave/statistics",
    // method: "post"
    headers: `{
  authorization: "aaa"
}`
  })

  const send = () => {
    setLoading(true)
    try {
      axios({
        url: data.url,
        method: data.method || "get",
        data: data.data ? JSON.parse(data.data) : "",
        headers: data.headers ? JSON.parse(data.headers) : ""
      }).then(res => {
        message.success(res.data.status || '请求成功~')
        setData({
          ...data,
          res: beautify(res.data.payload || res.data.data, null, 2, 50),
          more: beautify(res, null, 2, 100)
        })
      }).catch(e => {
        message.error("请求异常~")
        setData({
          ...data,
          res: beautify(e, null, 2, 100)
        })
      }).finally(() => {
        // message.success("success~")
        setLoading(false)
      })
    } catch (e) {
      message.error(e)
      setLoading(false)
    }
  }

  const change = (e, type) => {
    setData({
      ...data,
      [type]: e.target.value
    })
  }

  const doBeautify = (type) => {
    try {
      setData({
        ...data,
        [type]: data[type] ? beautify(eval("(" + data[type] + ")"), null, 2, 100) : ""
      })
    } catch (e) {
      message.error("解析字符串为JSON失败")
    }
  }

  const onSelect = (keys, event) => {
    let newData = event.selectedNodes[0]
    setData({
      ...newData,
      res: "",
      // data: newData.data ? beautify(eval("(" + newData.data + ")"), null, 2, 100) : "",
      // note: newData.note ? beautify(eval("(" + newData.note + ")"), null, 2, 100) : "",
      // returnNote: newData.returnNote ? beautify(eval("(" + newData.returnNote + ")"), null, 2, 100) : ""
      data: beautify(newData.data, null, 2, 50),
      headers: beautify(newData.headers, null, 2, 50),
      note: beautify(newData.note, null, 2, 50),
      returnNote: beautify(newData.returnNote, null, 2, 50)
    })
  }

  return (
    <>
      <PageContainer
        // title={false}
        breadcrumb={false}
        className="content_style"
      >
        <Row style={{ padding: 16, background: "#fff" }}>
          <Col style={{ width: 180, marginRight: 16 }}>
            <DirectoryTree
              defaultExpandAll
              onSelect={onSelect}
              treeData={treeData}
            />
          </Col>
          <Col span={12}>
            <Row>
              <Col span={6}>
                <Input prefix="接口名：" value={data.title}/>
              </Col>
              <Col span={4}>
                <Input prefix="method：" value={data.method} onChange={e => change(e, "method")}/>
              </Col>
              <Col span={14}>
                <Input prefix="url：" value={data.url} onChange={e => change(e, "url")}/>
              </Col>
            </Row>
            <div>
              <Collapse>
                <Panel header="headers" key="1">
                  <TextArea rows={2} value={data.headers} onChange={e => change(e, "headers")}
                            onBlur={() => doBeautify("headers")}/>
                </Panel>
              </Collapse>
            </div>
            <div>
              <Collapse>
                <Panel header="参数说明" key="1">
                  <TextArea rows={6} value={data.note}/>
                </Panel>
              </Collapse>
            </div>
            <div>
              <TextArea value={data.data} rows={6} onChange={e => change(e, "data")} onBlur={() => doBeautify("data")}/>
            </div>
            <div>
              <Collapse>
                <Panel header="返回值说明" key="1">
                  <TextArea rows={10} value={data.returnNote}/>
                </Panel>
              </Collapse>
            </div>
            <div>
              <TextArea rows={10} value={data.res}/>
            </div>
            <div>
              <Button type={"primary"} style={{ width: "100%" }} onClick={send} loading={loading}>Execute</Button>
            </div>
            <div>
              <Collapse>
                <Panel header="返回的所有信息" key="1">
                  <TextArea rows={15} value={data.more}/>
                </Panel>
              </Collapse>
            </div>
          </Col>
        </Row>
      </PageContainer>
    </>
  )
}

export default Index