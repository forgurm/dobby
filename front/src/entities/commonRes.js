const commonRes = (res) => {
  const resSend = {
    code: res.code,
    msg: res.msg,
    count: res.count
  }
  return resSend
}

export default commonRes
