import commonRes from '@/entities/commonRes'
const loginRes = {}

loginRes.userLogin = (res) => {
  console.log('res:', res)
  const requestSend = {
    ...commonRes(res),
    data: {
      userToken: res.data.userToken,
      refreshToken: res.data.refreshToken,
      role: res.data.role,
      firstStart: res.data.firstStart,
      passwordThirdYn: res.data.passwordThirdYn
    }
  }
  return requestSend
}

export default loginRes
