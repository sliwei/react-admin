import axios from "axios"

export default {
  namespace: "count",
  state: {
    list: [],
    count: 0
  },
  reducers: {
    add(state) {
      return {
        ...state,
        count: state.count + 1
      }
    },
    addList(state, { payload }) {
      return {
        ...state,
        list: payload
      }
    }
  },
  effects: {
    *addAfter1Second(action, { call, put }) {
      const res = yield (() =>
        new Promise(reslove => {
          setTimeout(() => {
            reslove(1)
          }, 2000)
        }))()
      yield put({ type: "add" })
      return res
    },
    *getList(action, { call, put }) {
      const res = yield axios({
        method: "POST",
        url: "/graphql/boss",
        data: {
          query: `
        {
  StudyInfoExPage(query: ${JSON.stringify(JSON.stringify(action.payload.query))}, page: 0, size: 10, sort: ${JSON.stringify(JSON.stringify(action.payload.sort))}) {
    first
    last
    page
    size
    numberOfElements
    totalElements
    totalPages
    content {
      # 学员ID
      id
      # 学员姓名
      username
      # 性别
      sex
      # 年龄
      age
      # 电话
      mobile
      # 学习阶段
      buylesstatus
      # 学龄
      first_lesson_time
      # 剩余课时
      left_count
      # 已约课时
      agreed_count
      # 课程规划 剩余未上的课件数量
      coursewares
      # 报名时间
      f_buy_time
      # 服务记录
      note_record
      # 教务人员ID，姓名，组别ID，组别名称
      master_id
      master_name
      master_team_id
      master_team_name
      # 教学人员ID，姓名，组别ID，组别名称
      teacher_id
      teacher_name
      teacher_team_id
      teacher_team_name
      # 是否固定课
      fixed_lesson
      # 续费次数
      total_repay_count
      # 本月发圈状态
      screenshot
      # 归属地
      fp_city
      # 生日
      birth
      # 家长姓名
      family_name
      # 家属关系
      family_relation
      # 家长微信号
      family_weixin
      # 剩余正式课时
      left_lessonex_count
      # 剩余赠送课时
      left_give_count
      # 考级订单
      grading_order
      # 赠课机会
      give_lesson_chance
      # 最后付费时间
      last_pay_time
      # 累计付费金额
      total_pay_amount
      # 试听成单老师
      lesson_order_teacher
      # 渠道名称
      channel_name
      # 教务分配时间
      master_assign_time
      # 教学分配时间
      teacher_assign_time
    }
  }
}
        `
        }
      })
      yield put({ type: "addList" ,payload: res.data.data})
      return res
    }
  },
}