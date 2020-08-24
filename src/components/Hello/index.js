import React, { useState } from "react"
// import { hot } from "react-hot-loader/root"
import { connect } from "dva"
import { Button, Modal } from "antd"

const Hello = props => {
  console.log(props)
  const [visible, setVisible] = useState(false)
  const handClick = () => {
    setVisible(true)
  }

  const axios = () => {
    props
      .dispatch({
        type: "count/addAfter1Second",
      })
      .then(res => {
        console.log(res)
        setVisible(false)
      })
  }

  return (
    <>
      <div onClick={handClick}>Hellodsad</div>
      <Button onClick={handClick} type="primary">
        Antd
      </Button>
      <Modal
        title="title AAssa"
        visible={visible}
        onOk={axios}
        confirmLoading={props.loading}
        onCancel={() => setVisible(false)}
      >
        AAA AAAsadasd
      </Modal>
    </>
  )
}

export default connect(state => {
  return {
    loading: state.loading.effects["count/addAfter1Second"],
  }
})(Hello)
