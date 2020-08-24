import React, {useState} from "react"
import ProLayout, { PageContainer, DefaultFooter } from "@ant-design/pro-layout"
import { Result, Button ,message, Upload} from "antd"
// import { hot } from "react-hot-loader/root"
import { connect } from "dva"
import Hello from "../../components/Hello"
import { Link } from "react-router-dom"
import { UploadOutlined } from '@ant-design/icons';
import axios from 'axios'


const Index = props => {
  const [file, setFile] = useState()
  const beforeUpload = (file) => {
    setFile(file)
    return false
  }

  const up =() => {
    // action={"/up"} data={
    // {
    //   "key": "/test/aaa.png",
    //   "ossAccessKeyId": "LTAIAEWt96MQ6EbR",
    //   "policy": "eyJleHBpcmF0aW9uIjoiMjAyMC0wOC0yNFQwNDoxODozNi4yMTZaIiwiY29uZGl0aW9ucyI6W1siY29udGVudC1sZW5ndGgtcmFuZ2UiLDAsMTA0ODU3NjAwMF0sWyJzdGFydHMtd2l0aCIsIiRrZXkiLCJvc3MvIl1dfQ==",
    //   "signature": "YKg5eVzXAdFw6VX5keE8x+kY4pU=",
    //   "dir": "oss/",
    //   "host": "https://bstu.oss-cn-beijing.aliyuncs.com",
    //   "expire": "1598242716"
    // }
    let formData = new FormData()
    formData.append('key', 'oss/aaa.png')
    formData.append('ossAccessKeyId', 'LTAIAEWt96MQ6EbR')
    formData.append('policy', 'eyJleHBpcmF0aW9uIjoiMjAyMC0wOC0yNFQwNDozODoyNy41OTlaIiwiY29uZGl0aW9ucyI6W1siY29udGVudC1sZW5ndGgtcmFuZ2UiLDAsMTA0ODU3NjAwMF0sWyJzdGFydHMtd2l0aCIsIiRrZXkiLCJvc3MvIl1dfQ==')
    formData.append('signature', 'uxkCOLsjSrvKFWzE3pzvuZL+LkM=')
    formData.append('success_action_status', 200)
    formData.append('file', file)
    axios.defaults.headers.post['Content-Type'] = 'multipart/form-data';
    axios({
      method: 'POST',
      url: 'https://coooe.oss-cn-beijing.aliyuncs.com/',
      data: formData
    }).then(res => {
      console.log(res)
    })
  }

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
        <Link to="/list/index">列表</Link>


        <Upload
          beforeUpload={beforeUpload}
          // action={"/up"} data={
          // {
          //   "key": "/test/aaa.png",
          //   "ossAccessKeyId": "LTAIAEWt96MQ6EbR",
          //   "policy": "eyJleHBpcmF0aW9uIjoiMjAyMC0wOC0yNFQwNDoxODozNi4yMTZaIiwiY29uZGl0aW9ucyI6W1siY29udGVudC1sZW5ndGgtcmFuZ2UiLDAsMTA0ODU3NjAwMF0sWyJzdGFydHMtd2l0aCIsIiRrZXkiLCJvc3MvIl1dfQ==",
          //   "signature": "YKg5eVzXAdFw6VX5keE8x+kY4pU=",
          //   "dir": "oss/",
          //   "host": "https://bstu.oss-cn-beijing.aliyuncs.com",
          //   "expire": "1598242716"
          // }
        >
          <Button>
            <UploadOutlined /> Select File
          </Button>
        </Upload>

        <Button onClick={up}>UP</Button>

        <Result
          status="403"
          title="Hello World"
          subTitle="Sorry, you are not authorized to access this page."
          extra={<Button type="primary">Back Home</Button>}
        />

        <h1>Hello React! {props.state.count}</h1>
        <div>{"sssssss"}</div>

        {/*<Hello />*/}
      </div>
    </PageContainer>
  )
}

export default connect(state => ({
  state: state,
}))(Index)
