import React, { useEffect, useState } from "react"
import ProTable from "@ant-design/pro-table"
import { Button } from "antd"
import { PageContainer } from "@ant-design/pro-layout"
import axios from "axios"
import moment from "moment"
import { connect } from "dva"
// import { hot } from "react-hot-loader/root"

const Content = (props) => {

  console.log(props)

  const [page, setPage] = useState(0)
  const [query, setquery] = useState()
  const [sort, setsort] = useState()


  // useEffect(() => {
  //
  //   props.dispatch({
  //     type: "count/getList",
  //     payload: {
  //       query: query,
  //       sort: sort
  //     }
  //   })
  //     .then(res => {
  //       console.log(res)
  //       // setVisible(false)
  //     })
  // }, [query])

  const getData = () => {
    props.dispatch({
      type: "count/getList",
      payload: {
        query: query || {},
        sort: sort || []
      }
    })
      .then(res => {
        console.log(res)
        // setVisible(false)
      })
  }


  const get = (page, dat, dat2, dat3) => {

    let query = {
      "bool": {
        "should": [],
        "must": []
      }
    }
    let left_counts = []
    if ("left_count" in dat && dat.left_count && dat.left_count.length) {
      let left_count = dat.left_count
      if (left_count.includes("0")) {
        left_counts.push({ "range": { "left_count": { "gte": 0, "lte": 20 } } })
      }
      if (left_count.includes("1")) {
        left_counts.push({ "range": { "left_count": { "gte": 21, "lte": 80 } } })
      }
      if (left_count.includes("2")) {
        left_counts.push({ "range": { "left_count": { "gte": 81, "lte": 9999999 } } })
      }
    }

    if ("id" in dat2) {
      query.bool.must = [
        ...query.bool.must,
        { "term": { "id": dat2.id } }]
    }
    if ("username" in dat2) {
      // left_counts.push({"wildcard": {"username": `*${dat2.username}*`}})

      query.bool.must = [
        ...query.bool.must,
        { "wildcard": { "username": `*${dat2.username}*` } }]
    }
    if (left_counts.length) {
      query.bool.must.push({
        "bool": {
          "should": left_counts
        }
      })
    }


    let sort = []
    if (dat3.last_pay_time) {
      sort.push({ "last_pay_time": dat3.last_pay_time })
    }

    // return new Promise((resolve) => {
    //   props.dispatch({
    //     type: "count/getList",
    //     payload: {
    //       query: query,
    //       sort: sort,
    //     }
    //   })
    //     .then(res => {
    //       console.log(res)
    //       // setVisible(false)
    //
    //       resolve({
    //         total: res.StudyInfoExPage.totalElements,
    //         data: res.StudyInfoExPage.content,
    //         success: true
    //       })
    //     })
    // })

//     return new Promise((resolve) => {
//       axios({
//         method: "POST",
//         url: "/graphql/boss",
//         data: {
//           query: `
//         {
//   StudyInfoExPage(query: ${JSON.stringify(JSON.stringify(query))}, page: 0, size: 10, sort: ${JSON.stringify(JSON.stringify(sort))}) {
//     first
//     last
//     page
//     size
//     numberOfElements
//     totalElements
//     totalPages
//     content {
//       # 学员ID
//       id
//       # 学员姓名
//       username
//       # 性别
//       sex
//       # 年龄
//       age
//       # 电话
//       mobile
//       # 学习阶段
//       buylesstatus
//       # 学龄
//       first_lesson_time
//       # 剩余课时
//       left_count
//       # 已约课时
//       agreed_count
//       # 课程规划 剩余未上的课件数量
//       coursewares
//       # 报名时间
//       f_buy_time
//       # 服务记录
//       note_record
//       # 教务人员ID，姓名，组别ID，组别名称
//       master_id
//       master_name
//       master_team_id
//       master_team_name
//       # 教学人员ID，姓名，组别ID，组别名称
//       teacher_id
//       teacher_name
//       teacher_team_id
//       teacher_team_name
//       # 是否固定课
//       fixed_lesson
//       # 续费次数
//       total_repay_count
//       # 本月发圈状态
//       screenshot
//       # 归属地
//       fp_city
//       # 生日
//       birth
//       # 家长姓名
//       family_name
//       # 家属关系
//       family_relation
//       # 家长微信号
//       family_weixin
//       # 剩余正式课时
//       left_lessonex_count
//       # 剩余赠送课时
//       left_give_count
//       # 考级订单
//       grading_order
//       # 赠课机会
//       give_lesson_chance
//       # 最后付费时间
//       last_pay_time
//       # 累计付费金额
//       total_pay_amount
//       # 试听成单老师
//       lesson_order_teacher
//       # 渠道名称
//       channel_name
//       # 教务分配时间
//       master_assign_time
//       # 教学分配时间
//       teacher_assign_time
//     }
//   }
// }
//         `
//         }
//       }).then(res => {
//         console.log(res)
//         resolve({
//           total: res.data.data.StudyInfoExPage.totalElements,
//           data: res.data.data.StudyInfoExPage.content,
//           success: true
//         })
//       })
//     })

  }

  console.log("aa")

  console.log(props.list.length ? props.list.StudyInfoExPage.content : '')

  return <>
    <PageContainer
      breadcrumb={false}
      className="content_style"
    >

      <Button onClick={getData}>getData</Button>

      {props.list.length ?
        <ProTable
          columns={[
            {
              title: "ID",
              key: "id",
              dataIndex: "id",
              valueType: "id"
            },
            {
              title: "姓名",
              key: "username",
              dataIndex: "username",
              valueType: "username"
            },
            {
              title: "剩余课时",
              key: "left_count",
              dataIndex: "left_count",
              valueType: "left_count",
              render: (_, row) => row.left_count,
              filters: true,
              valueEnum: {
                0: "0-20",
                1: "20-80",
                2: "80以上"
              }
            },
            {
              title: "最后付款",
              key: "last_pay_time",
              dataIndex: "last_pay_time",
              valueType: "last_pay_time",
              render: (_, row) => {
                return moment.unix(row.last_pay_time).format("YYYY-MM-DD HH:mm:ss")
              },
              sorter: (a, b) => parseInt(a.last_pay_time) - parseInt(b.last_pay_time),
              sortDirections: ["desc", "asc"]
            }
            // {
            //   title: "时间区间",
            //   key: "ctime",
            //   dataIndex: "ctime",
            //   valueType: "ctime",
            //   filters: true,
            //   valueEnum: {
            //     asc: '正序',
            //     desc: '倒序',
            //   },
            // },
            // {
            //   title: "更新时间",
            //   key: "id",
            //   dataIndex: "id",
            //   valueType: "id",
            //   filters: true,
            //   valueEnum: {
            //     asc: '正序',
            //     desc: '倒序',
            //   },
            // },
            // {
            //   title: "关闭时间",
            //   key: "img",
            //   dataIndex: "img",
            //   valueType: "img",
            //   render: (_, row) => <img width={10} src={row.img}/>
            // }
          ]}
          onChange={(e, b, a) => {
            console.log(e, b, a)
            // get()
          }}
          dataSource={props.list.StudyInfoExPage.content}
          // request={(current, a, b) => {
          //
          //   console.log(current, a, b)
          //
          //   return get(current.current, b, current, a)
          // }}
          rowKey="id"
          headerTitle="日期类"
        /> : null}
    </PageContainer>
  </>
}

export default connect((state) => ({
  list: state.count.list
}))(Content)
