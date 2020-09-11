import React, { useEffect, useState } from "react"
import { Button, Input, Row, Col, Tree, message, Collapse, Spin } from "antd"
import axios from "axios"
import beautify from "json-beautify"
import { NodeExpandOutlined } from "@ant-design/icons"
import CodeMirror from "@uiw/react-codemirror"
import "codemirror/addon/display/autorefresh"
import "codemirror/addon/comment/comment"
import "codemirror/addon/edit/matchbrackets"
import "codemirror/keymap/sublime"
import "codemirror/lib/codemirror.css"
import "codemirror/theme/monokai.css"
// import keycode from 'keycode'

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
        icon: <NodeExpandOutlined />,
        key: "0-0-0", isLeaf: true,
        title: "学员列表",
        url: "/tapi/teacherLeave/statistics",
        method: "post",
        data: {
          "aaa1": 111
        },
        headers: {
          authorization: "111"
        },
        note: {
          "aaa2": "222"
        },
        returnNote: {
          "aaa3": "333"
        }
      },
      {
        icon: <NodeExpandOutlined />,
        key: "0-0-1", isLeaf: true,
        title: "学员列表",
        url: "/tapi/teacherLeave/statistics2",
        method: "post",
        data: {
          "aaa2": 222
        },
        headers: {
          authorization: "222"
        },
        note: {
          "aaa3": "333"
        },
        returnNote: {
          "aaa4": "444"
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
        icon: <NodeExpandOutlined />,
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
        icon: <NodeExpandOutlined />,
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
        icon: <NodeExpandOutlined />,
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
        icon: <NodeExpandOutlined />,
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
        icon: <NodeExpandOutlined />,
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
}`
        },
        headers: {
          authorization: "a"
        },
        note: {
          "query": "graphql 语句"
        },
        returnNote: {
          "waitClass": "老师ID",
          "fixClass": "老师ID",
          "overdueClass": "老师ID",
          "cancelClass": "老师ID"
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
        icon: <NodeExpandOutlined />,
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
        icon: <NodeExpandOutlined />,
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
}`
        },
        headers: {
          authorization: "a"
        },
        note: {
          "query": "graphql 语句"
        },
        returnNote: {
          "waitClass": "老师ID",
          "fixClass": "老师ID",
          "overdueClass": "老师ID",
          "cancelClass": "老师ID"
        }
      }
    ]
  }
]

const options = {
  theme: "monokai",
  tabSize: 2,
  keyMap: "sublime",
  mode: "json"
}

const Index = () => {
  const [send, setSend] = useState(0)
  const [loading, setLoading] = useState(false)
  const [changeLoading, setChangeLoading] = useState(false)
  const [data, setData] = useState({
    // url: "/api/teacherLeave/statistics",
    // method: "post"
    headers: `{
  authorization: "aaa"
}`
  })

  useEffect(() => {
    if (send > 0) {
      if (!data.url) {
        message.error("没有url~")
      } else {
        try {
          setLoading(true)
          axios({
            url: data.url,
            method: data.method || "get",
            data: data.data ? JSON.parse(data.data) : "",
            headers: data.headers ? JSON.parse(data.headers) : ""
          }).then(res => {
            message.success(res.data.status || "请求成功~")
            setData({
              ...data,
              res: beautify(res.data.payload || res.data.data, null, 2, 80),
              more: beautify(res, null, 2, 80)
            })
          }).catch(e => {
            message.error("请求异常~")
            setData({
              ...data,
              res: beautify(e, null, 2, 80)
            })
          }).finally(() => {
            setLoading(false)
          })
        } catch (e) {
          message.error(e)
        }
      }
    }
  }, [send])

  useEffect(() => {
    const enterSend = (e) => {
      if (e.keyCode === 13) {
        console.log("AAAA")
        setSend(sends => sends + 1)
      }
    }
    window.addEventListener("keyup", enterSend, true)
    return () => {
      window.removeEventListener("keyup", enterSend, false)
    }
  }, [])

  const change = (e, type) => {
    setData({
      ...data,
      [type]: e.target.value
    })
  }

  // const doBeautify = (type) => {
  //   try {
  //     setData({
  //       ...data,
  //       [type]: data[type] ? beautify(eval("(" + data[type] + ")"), null, 2, 80) : ""
  //     })
  //   } catch (e) {
  //     message.error("解析字符串为JSON失败")
  //   }
  // }

  const onSelect = (keys, event) => {
    setChangeLoading(true)
    setTimeout(() => {
      let newData = event.node
      setData({
        ...newData,
        res: "",
        data: newData.data ? beautify(newData.data, null, 2, 80) : "",
        headers: newData.headers ? beautify(newData.headers, null, 2, 80) : "",
        note: newData.note ? beautify(newData.note, null, 2, 80) : "",
        returnNote: newData.returnNote ? beautify(newData.returnNote, null, 2, 80) : ""
      })
      setChangeLoading(false)
    }, 300)
  }

  const CodeMirrorBlur = (instance, type) => {
    setTimeout(() => {
      const value = instance.getValue()
      let val = value
      try {
        val = beautify(eval("(" + value + ")"), null, 2, 80)
      } catch (e) {
        message.error(`解析字符串为JSON失败，请检查${type}格式～`)
      }
      setData(datas => ({
        ...datas,
        [type]: val
      }))
    }, 100)
  }

  // const CodeMirrorProps = (type) => ({
  //   key: key,
  //   value: data[type],
  //   options: options,
  //   onChanges: (instance) => CodeMirrorChange(instance, type),
  //   onBlur: (instance) => CodeMirrorBlur(instance, type)
  // })

  return (
    <>
      <div style={{ margin: 16 }}>
        <Row style={{ padding: 16, background: "#fff" }}>
          <Col style={{ width: 180, marginRight: 16 }}>
            <DirectoryTree
              defaultExpandAll
              onSelect={onSelect}
              treeData={treeData}
            />
          </Col>
          <Col style={{ minWidth: 800, maxWidth: 900 }}>
            <Spin spinning={changeLoading || loading}>
              <Row>
                <Col span={6}>
                  <Input prefix="接口名：" value={data.title} />
                </Col>
                <Col span={4}>
                  <Input prefix="method：" value={data.method} onChange={e => change(e, "method")} />
                </Col>
                <Col span={14}>
                  <Input prefix="url：" value={data.url} onChange={e => change(e, "url")} />
                </Col>
              </Row>
              <div>
                <Collapse>
                  <Panel header="headers" key="1">
                    <CodeMirror
                      value={data["headers"]}
                      options={options}
                      onBlur={(instance) => CodeMirrorBlur(instance, "headers")}
                    />
                  </Panel>
                </Collapse>
              </div>
              <div>
                <Collapse>
                  <Panel header="参数说明" key="1">
                    <CodeMirror
                      value={data["note"]}
                      options={options}
                      onBlur={(instance) => CodeMirrorBlur(instance, "headers")}
                    />
                  </Panel>
                </Collapse>
              </div>
              <div>
                <div style={{ padding: 16, border: "1px solid #d9d9d9" }}>
                  <CodeMirror
                    value={data["data"]}
                    options={options}
                    onBlur={(instance) => CodeMirrorBlur(instance, "data")}
                  />
                </div>
              </div>
              <div>
                <Collapse>
                  <Panel header="返回值说明" key="1">
                    <CodeMirror
                      value={data["returnNote"]}
                      options={options}
                      onBlur={(instance) => CodeMirrorBlur(instance, "headers")}
                    />
                  </Panel>
                </Collapse>
              </div>
              <div>
                <div style={{ padding: 16, border: "1px solid #d9d9d9" }}>
                  <CodeMirror
                    value={data["res"]}
                    options={options}
                    onBlur={(instance) => CodeMirrorBlur(instance, "headers")}
                  />
                </div>
              </div>
              <div style={{ margin: "4px 0" }}>
                <Row gutter={4}>
                  <Col span={16}><Button type={"primary"} style={{ width: "100%" }}
                                         onClick={() => setSend(sends => sends + 1)}
                                         loading={loading}>请求一下（Enter）~</Button></Col>
                  <Col span={4}><Button style={{ width: "100%" }} onClick={send} loading={loading}>重置</Button></Col>
                  <Col span={4}><Button style={{ width: "100%" }} onClick={send}
                                        loading={loading}>生成接口JSON</Button></Col>
                </Row>
              </div>
              <div>
                <Collapse>
                  <Panel header="返回的所有信息" key="1">
                    <CodeMirror
                      value={data["more"]}
                      options={options}
                    />
                  </Panel>
                </Collapse>
              </div>
            </Spin>
          </Col>
        </Row>
      </div>
    </>
  )
}

export default Index