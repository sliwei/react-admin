import React, { useState } from "react"
import { Button, Input, Space, Row, Col, Tree, message, Collapse } from "antd"
import axios from "axios"
import beautify from "json-beautify"

const { TextArea } = Input
const { DirectoryTree } = Tree
const { Panel } = Collapse

const treeData = [
  {
    title: "老师TMS",
    key: "0-0",
    children: [{
      key: "0-0-0", isLeaf: true,
      title: "统计",
      url: "/api/teacherLeave/statistics",
      method: "post",
      data: `{
        "teacher_id": 410,
        "ctime": { "gte": 0, "lte": 1908242726 },
        "leave_date": { "gte": "2019-06-24T16:00:00.000Z", "lte": "2019-06-24T16:00:00.000Z" }
      }`,
      header: {
        authorization: "a"
      },
      note: `{
        "teacher_id": "老师ID",
        "ctime": { "gte": "申请开始时间", "lte": "申请结束时间" },
        "leave_date": { "gte": "上课开始时间", "lte": "上课结束时间" }
      }`,
      returnNote: `{
        "leave": "总数",
        "affectLeave": "课时"
      }`
    }, {
      key: "0-0-1", isLeaf: true,
      title: "USER",
      url: "/api/applyClass/getHandle",
      method: "post",
      data: `{
      all: 1,
      ids: []
      }`,
      header: {
        authorization: "a"
      },
      note: `{
        "teacher_id": "老师ID",
        "ctime": { "gte": "申请开始时间", "lte": "申请结束时间" },
        "leave_date": { "gte": "上课开始时间", "lte": "上课结束时间" }
      }`,
      returnNote: `{
        "leave": "总数",
        "affectLeave": "课时"
      }`
    }]
  }
  // {
  //   title: "parent 1",
  //   key: "0-1",
  //   children: [
  //     { title: "leaf 1-0", key: "0-1-0", isLeaf: true },
  //     { title: "leaf 1-1", key: "0-1-1", isLeaf: true }
  //   ]
  // }
]

const Index = () => {
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState({
    // url: "/api/teacherLeave/statistics",
    // method: "post"
  })

  const send = () => {
    setLoading(true)
    console.log(data)
    try {
      axios({
        url: data.url,
        method: data.method || "get",
        data: data.data ? JSON.parse(data.data) : ""
      }).then(res => {
        console.log(res)
        setData({
          ...data,
          res: beautify(res.data, null, 2, 100),
          more: beautify(res, null, 2, 100)
        })
      }).catch(e => {
        setData({
          ...data,
          res: beautify(e, null, 2, 100)
        })
      }).finally(() => {
        message.success("success~")
        setLoading(false)
      })
    } catch (e) {
      console.log(e)
    }
  }

  const change = (e, type) => {
    setData({
      ...data,
      [type]: e.target.value
    })
  }

  const doBeautify = () => {
    try {
      setData({
        ...data,
        data: data.data ? beautify(eval("(" + data.data + ")"), null, 2, 100) : ""
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
      data: newData.data ? beautify(eval("(" + newData.data + ")"), null, 2, 100) : "",
      note: newData.note ? beautify(eval("(" + newData.note + ")"), null, 2, 100) : "",
      returnNote: newData.returnNote ? beautify(eval("(" + newData.returnNote + ")"), null, 2, 100) : ""
    })
  }

  return (
    <>
      <Row>
        <Col span={6}>
          <DirectoryTree
            defaultExpandAll
            onSelect={onSelect}
            treeData={treeData}
          />
        </Col>
        <Col span={18}>
          <Row>
            <Col span={6}>
              <Input prefix="接口名：" value={data.title} />
            </Col>
            <Col span={4}>
              <Input prefix="请求方式：" value={data.method} onChange={e => change(e, "method")} />
            </Col>
            <Col span={14}>
              <Input prefix="地址：" value={data.url} onChange={e => change(e, "url")} />
            </Col>
          </Row>
          <div>
            <Collapse>
              <Panel header="参数说明" key="1">
                <TextArea rows={6} value={data.note} />
              </Panel>
            </Collapse>
          </div>
          <div>
            <TextArea value={data.data} rows={6} onChange={e => change(e, "data")} onBlur={doBeautify} />
          </div>
          <div>
            <Collapse>
              <Panel header="返回值说明" key="1">
                <TextArea rows={10} value={data.returnNote} />
              </Panel>
            </Collapse>
          </div>
          <div>
            <TextArea rows={10} value={data.res} />
          </div>
          <div>
            <Button type={"primary"} style={{ width: "100%" }} onClick={send} loading={loading}>Execute</Button>
          </div>
          <div>
            <Collapse>
              <Panel header="返回的所有信息" key="1">
                <TextArea rows={15} value={data.more} />
              </Panel>
            </Collapse>
          </div>
        </Col>
      </Row>
    </>
  )
}

export default Index