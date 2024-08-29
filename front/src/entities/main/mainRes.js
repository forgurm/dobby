const mainRes = {};

// 봇 리스트 응답 처리
mainRes.botList = (res) => {
  const response = {
    data: Array.isArray(res) ? res.map((item) => ({
      id: item.id || 0,
      name: item.name || '',
      status: item.status || 0,
      location: item.location || '',
      last_updated: item.last_updated || '',
      bot_id: item.bot_id || ''
    })) : []
  };
  return response;
};

// 회원 리스트 응답 처리
mainRes.memberList = (res) => {
  const response = {
    data: Array.isArray(res) ? res.map((item) => ({
      id: item.id || 0,
      username: item.username || '',
      name: item.name || '',
      registration_date: item.registration_date || ''
    })) : []
  };
  return response;
};


// 심볼 상태 응답 처리
mainRes.symbolStatus = (res) => {
  // res가 배열인 경우만 처리
  const response = {
    data: Array.isArray(res) ? res.map((item) => ({
      exchange_code: item.exchange_code || '',
      exchange_name: item.exchange_name || '',
      count: item.count || 0
    })) : []  // 빈 배열 반환 처리
  };
  
  return response;
};

// 심볼 리스트 응답 처리
mainRes.symbolList = (res) => {
  const response = {
    data: Array.isArray(res) ? res.map((item) => ({
      exchange_code: item.exchange_code || '',
      exchange_name: item.exchange_name || '',
      symbol_code: item.symbol_code || ''
      //count: item.count || 0
    })) : []
  };
  return response;
};

export default mainRes;