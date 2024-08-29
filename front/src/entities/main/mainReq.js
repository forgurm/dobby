const mainReq = {
  botList: (params) => {
    return { ...params }; // 필요한 경우 요청 포맷 변환
  },
  memberList: (params) => {
    return { ...params };
  },
  symbolStatus: (params) => {
    return { ...params };
  },
  symbolList: (params) => {
    return { ...params };
  }
};

export default mainReq;