const loginReq = {}

loginReq.userLogin = ({ emailId, emailPw }) => {
  const requestSend = {
    emailId,
    emailPw
  }
  return requestSend
}

export default loginReq
