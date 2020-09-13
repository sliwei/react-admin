import React, { useEffect, useState } from "react"
import {
  Button, Input, Row, Col, Tree, message, Spin, Tabs, Popover, Switch,
  Slider,
  Select,
  Radio, Modal
} from "antd"
import axios from "axios"
import beautify from "json-beautify"
import { NodeExpandOutlined, SettingOutlined } from "@ant-design/icons"
import CodeMirror from "@uiw/react-codemirror"
import "codemirror/addon/display/autorefresh"
import "codemirror/addon/comment/comment"
import "codemirror/addon/edit/matchbrackets"
import "codemirror/keymap/sublime"
import "codemirror/lib/codemirror.css"
import "codemirror/theme/monokai.css"
import "codemirror/theme/material-palenight.css"
import "codemirror/theme/yonce.css"
import "codemirror/theme/the-matrix.css"
import "codemirror/theme/xq-light.css"
import key from "keymaster"
import "./index.less"

const { DirectoryTree } = Tree
const { TabPane } = Tabs
const { Option } = Select

let localSetting = localStorage.getItem('codeSetting')
localSetting = localSetting ? JSON.parse(localSetting) : {
  formatterNum: 80,
  lineBreak: false,
  theme: "material-palenight",
  size: "medium" // default
}
const {formatterNum: localNum, ...localCodeSetting} = localSetting

const Index = () => {
  const [send, setSend] = useState(0)
  const [p1, setP1] = useState(true)
  const [p2, setP2] = useState(true)
  const [p3, setP3] = useState(true)
  const [backups, setBackups] = useState({})
  const [loading, setLoading] = useState(false)
  const [changeLoading, setChangeLoading] = useState(false)
  const [apiTree, setApiTree] = useState([])
  const [title, setTitle] = useState('Api List')
  const [data, setData] = useState({})
  const [formatterKey, setFormatterKey] = useState({})
  const [formatterNum, setFormatterNum] = useState(localNum)
  const [codeSetting, setCodeSetting] = useState(localCodeSetting)
  const [ioCode, setIoCode] = useState('')
  const [visible, setVisible] = useState(false)

  const onlyBeautify = (obj, replacer = null, space = 2, limit = 0) => {
    return beautify(obj, replacer, space, limit || formatterNum)
  }

  useEffect(() => {
    if (!visible) {
      setTimeout(() => setIoCode(''), 1111)
    }
  }, [visible])

  useEffect(() => {
    localStorage.setItem('codeSetting', JSON.stringify({...codeSetting, formatterNum}))
  }, [codeSetting])

  useEffect(() => {
    const {type, value} = formatterKey
    if (type) {
      let values = value
      let val = value
      try {
        if (values) {
          values = values.replace(/\ +/g,"")
          values = values.replace(/[\r\n]/g,"")
          val = values ? onlyBeautify(eval("(" + values + ")")) : ""
        } else {
          val = ""
        }
      } catch (e) {
        message.error(`解析字符串为JSON失败，请检查${type}格式～`)
      }
      setData(datas => {
        return {
          ...datas,
          [formatterKey]: val || ''
        }
      })
      setFormatterKey({ })
    }
  }, [formatterKey])

  useEffect(() => {
    setData(v => {
      return {
        ...v,
        headers: v.headers ? onlyBeautify(JSON.parse(v.headers)) : v.headers,
        data: v.data ? onlyBeautify(JSON.parse(v.data)) : v.data,
        note: v.note ? onlyBeautify(JSON.parse(v.note)) : v.note,
        res: v.res ? onlyBeautify(JSON.parse(v.res)) : v.res,
        resNote: v.resNote ? onlyBeautify(JSON.parse(v.resNote)) : v.resNote,
        response: v.response ? onlyBeautify(JSON.parse(v.response)) : v.response,
        request: v.request ? onlyBeautify(JSON.parse(v.request)) : v.request
      }
    })
    localStorage.setItem('codeSetting', JSON.stringify({...codeSetting, formatterNum}))
  }, [formatterNum])

  useEffect(() => {
    const loop = (list = []) => {
      let tree = []
      list.map((item, i) => {
        const children = item.children || []
        let fixChildren = []
        children.map((childrenItem, childrenIndex) => {
          fixChildren.push({
            ...childrenItem,
            icon: <NodeExpandOutlined />,
            isLeaf: true,
            key: `${i}-${childrenIndex}`
          })
        })
        tree.push({
          title: item.title,
          children: fixChildren,
          key: `${i}`,
          selectable: false
        })
      })
      return tree
    }
    const { treeData, title, ...conf } = window.apiData
    const defaultConf = {
      url: "/test",
      method: "post",
      data: { value: 1 },
      headers: { authorization: "authorization", "content-type": "application/json" },
      note: { value: "参数说明，数字类型" },
      resNote: { list: [{ value: "字典值" }, { value: "字典名称" }] }
    }
    let defaultData = {}
    for (const key in conf) {
      let obj = conf[key] || defaultConf[key]
      if (Object.prototype.toString.call(obj) === "[object Object]") {
        obj = onlyBeautify(obj)
      }
      defaultData[key] = obj
    }
    const treeDatas = loop(treeData)
    setApiTree(treeDatas)
    setData(defaultData)
    setTitle(title)
  }, [])

  useEffect(() => {
    if (send > 0) {
      if (!data.url) {
        message.error("没有url~")
      } else {
        try {
          setLoading(true)
          setTimeout(() => {
            let instance = axios.create({
              headers: data.headers ? JSON.parse(data.headers) : ""
            })
            let axiosData = {}
            instance.interceptors.request.use(
              request => {
                axiosData.request = onlyBeautify(request)
                return request
              },
              err => {
                return Promise.reject(err)
              }
            )
            instance.interceptors.response.use(
              response => {
                //拦截响应，做统一处理
                axiosData.response = onlyBeautify(response)
                return response
              },
              //接口错误状态处理，也就是说无响应时的处理
              error => {
                return Promise.reject(error.response.status) // 返回接口返回的错误信息
              }
            )
            let dat = {}
            let method = (data.method || "get").toUpperCase()
            if (method === "GET") {
              dat = {
                params: data.data ? JSON.parse(data.data) : ""
              }
            } else {
              dat = {
                data: data.data ? JSON.parse(data.data) : ""
              }
            }
            instance({
              url: data.url,
              method: data.method,
              ...dat
            }).then(res => {
              message.success(res.data.status || "请求成功~")
              setData({
                ...data,
                res: onlyBeautify(res.data),
                ...axiosData
              })
            }).catch(e => {
              message.error("请求异常~")
              setData({
                ...data,
                res: onlyBeautify(e.message),
                ...axiosData
              })
            }).finally(() => {
              setLoading(false)
            })
          }, 200)
        } catch (e) {
          message.error(e)
        }
      }
    }
  }, [send])

  const reSet = () => onSelect(null, null, backups)

  useEffect(() => {
    const enterSend = (e) => {
      if (e.keyCode === 13) {
        setSend(sends => sends + 1)
      }
    }
    key("⌘+enter, ctrl+enter", enterSend)
    key("alt+r, alt+r", reSet)
    // window.addEventListener("keyup", enterSend, true)
    return () => {
      key.unbind("⌘+enter, ctrl+enter")
      key.unbind("alt+r, alt+r")
      // window.removeEventListener("keyup", enterSend, false)
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
  //       [type]: data[type] ? onlyBeautify(eval("(" + data[type] + ")")) : ""
  //     })
  //   } catch (e) {
  //     message.error("解析字符串为JSON失败")
  //   }
  // }

  const onSelect = (keys, event, reset) => {
    if (!(keys && event || JSON.stringify(reset) !== "{}")) {
      return false
    }
    setChangeLoading(true)
    setTimeout(() => {
      let newData = reset || event.node
      // 备份
      setBackups(newData)
      setData({
        ...newData,
        res: "",
        data: newData.data ? onlyBeautify(newData.data) : "",
        headers: newData.headers ? onlyBeautify(newData.headers) : "",
        note: newData.note ? onlyBeautify(newData.note) : "",
        resNote: newData.resNote ? onlyBeautify(newData.resNote) : ""
      })
      setChangeLoading(false)
    }, 300)
  }

  const CodeMirrorBlur = (instance, type) => {
    setTimeout(() => {
      const value = instance.getValue()
      setFormatterKey({
        type,
        value
      })
    }, 100)
  }

  const createIo = () => {
    setVisible(true)
  }

  const renderIo = (datas) => {
    const { title = '', url = '', method = 'post', data = '{}', headers = '{}', note = '{}', resNote = '{}' } = datas || {}
    const value = onlyBeautify({
      "title": title,
      "url": url,
      "method": method,
      "data":JSON.parse(data),
      "headers":JSON.parse(headers),
      "note":JSON.parse(note),
      "resNote":JSON.parse(resNote),
    })
    const { lineBreak } = codeSetting
    if (lineBreak) {
      return `
${value}
`
    }
    return value
  }

  const onChange = (e, type) => {
    if (type === "formatterNum") {
      setFormatterNum(e)
      return false
    }
    setCodeSetting(setting => ({
      ...setting,
      [type]: e
    }))
  }

  const setCodeSizeClassName = () => {
    const { size } = codeSetting
    let className = ""
    switch (size) {
      case "small":
        className = "code_small"
        break
      case "medium":
        className = "code_medium"
        break
      case "large":
        className = "code_large"
        break
      case "default":
        className = ""
        break
    }
    return className
  }

  const formatterValue = (type) => {
    const value = data[type] || ''
    const { lineBreak } = codeSetting
    if (lineBreak) {
      return `
${value}
`
    }
    return value
  }

  const hideStyle = {
    position: "fixed",
    right: "9999999px"
  }

  const options = {
    theme: codeSetting.theme || "material-palenight",
    tabSize: 2,
    keyMap: "sublime",
    mode: "json",
    formatterNum
  }

  return (
    <>
      <div style={{ padding: "16px 16px 0 16px", height: "100%" }}>
        <Row style={{ padding: 16, background: "#fff", height: "100%" }}>
          <Col style={{ width: 180, marginRight: 16 }}>
            <div className="tree_head">
              <span>{title}</span>
              <Popover placement="bottom" title={"Setting"} content={<div>
                <div style={{ marginBottom: 20 }}>
                  <div style={{ marginBottom: 5 }}>是否前后换行</div>
                  <Switch checked={codeSetting.lineBreak} onChange={e => onChange(e, "lineBreak")} />
                </div>
                <div style={{ marginBottom: 20 }}>
                  <div style={{ marginBottom: 5 }}>自动格式化长度</div>
                  <Slider tipFormatter={v => v} value={formatterNum} onChange={e => onChange(e, "formatterNum")} />
                </div>
                <div style={{ marginBottom: 20 }}>
                  <div style={{ marginBottom: 5 }}>主题</div>
                  <Select value={codeSetting.theme} style={{ width: "100%" }} onChange={e => onChange(e, "theme")}>
                    <Option value="monokai">monokai</Option>
                    <Option value="material-palenight">material-palenight</Option>
                    <Option value="yonce">yonce</Option>
                    <Option value="the-matrix">the-matrix</Option>
                    <Option value="xq-light">xq-light</Option>
                  </Select>
                </div>
                <div style={{ marginBottom: 20 }}>
                  <div style={{ marginBottom: 5 }}>字体大小</div>
                  <Radio.Group value={codeSetting.size} onChange={e => onChange(e.target.value, "size")}>
                    <Radio.Button value="small">Small</Radio.Button>
                    <Radio.Button value="default">Default</Radio.Button>
                    <Radio.Button value="medium">Medium</Radio.Button>
                    <Radio.Button value="large">Large</Radio.Button>
                  </Radio.Group>
                </div>
              </div>} trigger="click">
                <div>
                  <SettingOutlined className="tree_set" />
                </div>
              </Popover>
            </div>
            <DirectoryTree
              defaultExpandAll
              onSelect={onSelect}
              treeData={apiTree}
            />
          </Col>
          <Col style={{ minWidth: 800, maxWidth: 900 }}>
            <Spin spinning={changeLoading || loading}>
              <div className={setCodeSizeClassName()}>
                <div style={{ marginBottom: 4 }}>
                  <Input.Group compact>
                    <Input style={{ width: "25%" }} prefix="接口名：" value={data.title} />
                    <Input style={{ width: "20%" }} prefix="method：" value={data.method}
                           onChange={e => change(e, "method")} />
                    <Input style={{ width: "calc(55% + 2px)" }} prefix="url：" value={data.url}
                           onChange={e => change(e, "url")} />
                  </Input.Group>
                </div>
                <div className="code">
                  <CodeMirror
                    value={formatterValue("headers")}
                    options={options}
                    onBlur={(instance) => CodeMirrorBlur(instance, "headers")}
                  />
                </div>
                <div>
                  <Tabs onChange={(e) => setP1(() => e === "1")} className="tabs">
                    <TabPane tab={<span>&emsp;入参&emsp;</span>} key="1" />
                    <TabPane tab="参数说明" key="2" />
                  </Tabs>
                </div>
                <div className="code">
                  <div style={p1 ? null : hideStyle}>
                    <CodeMirror
                      value={formatterValue("data")}
                      options={options}
                      onBlur={(instance) => CodeMirrorBlur(instance, "data")}
                    />
                  </div>
                  <div style={!p1 ? null : hideStyle}>
                    <CodeMirror
                      value={formatterValue("note")}
                      options={options}
                      onBlur={(instance) => CodeMirrorBlur(instance, "note")}
                    />
                  </div>
                </div>
                <div>
                  <Tabs onChange={(e) => setP2(() => e === "1")} className="tabs">
                    <TabPane tab={<span>&emsp;返回&emsp;</span>} key="1" />
                    <TabPane tab="返回说明" key="2" />
                  </Tabs>
                </div>
                <div className="code">
                  <div style={p2 ? null : hideStyle}>
                    <CodeMirror
                      value={formatterValue("res")}
                      options={options}
                      onBlur={(instance) => CodeMirrorBlur(instance, "res")}
                    />
                  </div>
                  <div style={!p2 ? null : hideStyle}>
                    <CodeMirror
                      value={formatterValue("resNote")}
                      options={options}
                      onBlur={(instance) => CodeMirrorBlur(instance, "resNote")}
                    />
                  </div>
                </div>
                <div style={{ margin: "4px 0" }}>
                  <Row gutter={4}>
                    <Col span={16}><Button type={"primary"} style={{ width: "100%" }}
                                           onClick={() => setSend(sends => sends + 1)}
                                           loading={loading}>请求一下（⌘ + Enter）~</Button></Col>
                    <Col span={4}><Button style={{ width: "100%" }} onClick={reSet}>重置（Alt + R）</Button></Col>
                    <Col span={4}><Button style={{ width: "100%" }} onClick={createIo}>生成接口JSON</Button></Col>
                  </Row>
                </div>


                <div>
                  <Tabs onChange={(e) => setP3(() => e === "1")} className="tabs">
                    <TabPane tab="request" key="1" />
                    <TabPane tab="response" key="2" />
                  </Tabs>
                </div>
                <div className="code">
                  <div style={p3 ? null : hideStyle}>
                    <CodeMirror
                      value={formatterValue("request")}
                      options={options}
                    />
                  </div>
                  <div style={!p3 ? null : hideStyle}>
                    <CodeMirror
                      value={formatterValue("response")}
                      options={options}
                    />
                  </div>
                </div>
              </div>
            </Spin>
          </Col>
        </Row>
        <Modal title={"接口JSON文件"} visible={visible} onCancel={() => setVisible(!visible)} onOk={() => setVisible(!visible)} width={900}>
          <div className={setCodeSizeClassName()}>
            <div className="code">
              <CodeMirror
                value={renderIo(data)}
                options={{...options, readOnly: true}}
              />
            </div>
          </div>
        </Modal>
      </div>
    </>
  )
}

export default Index