import store from '@/store'

const POPUP = {}

/* common */
POPUP.COMMON = {
  APPLICATION_COMPLETE_CONFIRM: (button1Func, button2Func) => {
    const popupData = {
      type: 'confirm',
      title: '처리하시겠습니까?',
      contents: '',
      button: {
        oneName: '아니오',
        twoName: '예',
        oneFunction: '' || button1Func,
        twoFunction: '' || button2Func
      }
    }
    popupType(popupData)
  }
}

/* 토큰증권 신청승인 */
POPUP.APPLICATIONAPPROVAL = {
  // 토큰증권 신청승인 상세에서 승인 누를 떄 표시되는 팝업
  APPROVE_CONFIRM: (button1Func, button2Func) => {
    const popupData = {
      type: 'confirm',
      title: '승인하시겠습니까? <br/> 승인 후 취소가 불가합니다.',
      contents: '',
      button: {
        oneName: '아니오',
        twoName: '예',
        oneFunction: '' || button1Func,
        twoFunction: '' || button2Func
      }
    }
    popupType(popupData)
  },
  // 토큰증권 신청승인 상세에서 승인 > 예 눌렀을 때, 표시되는 팝업
  APPROVE_SUCCESS_ALERT: (button1Func) => {
    const popupData = {
      type: 'alert',
      title: '승인이 완료 되었습니다.',
      contents: '',
      button: {
        oneName: '확인',
        oneFunction: '' || button1Func
      }
    }
    popupType(popupData)
  }
}

/* 토큰증권 승인처리 */
POPUP.APPLICATIONPROCESSING = {
  // 토큰증권 승인처리 상세에서 처리 > 예 눌렀을 때, 표시되는 팝업
  PROCESSING_START_ALERT: (button1Func, title) => {
    const popupData = {
      type: 'alert',
      title: `${title} 처리를 시작합니다.`,
      contents: '',
      button: {
        twoName: '확인',
        oneFunction: '' || button1Func
      }
    }
    popupType(popupData)
  },
  // 토큰증권 승인처리 상세에서 발행취소 > 예 눌렀을 때, 표시되는 팝업
  ISSUANCECANCEL_START_ALERT: (button1Func) => {
    const popupData = {
      type: 'alert',
      title: '발행취소 처리를 시작합니다.',
      contents: '',
      button: {
        twoName: '확인',
        oneFunction: '' || button1Func
      }
    }
    popupType(popupData)
  }
}

POPUP.CLOSE = {
  CONFIRM: () => {
    store.commit('popup/setConfirmPopupClear')
  },
  ALERT: () => {
    store.commit('popup/setAlertPopupClear')
  }
}

const popupType = (popupData) => {
  switch (popupData.type) {
    case 'confirm':
      if (!popupData.button.oneFunction) popupData.button.oneFunction = POPUP.CLOSE.CONFIRM
      store.commit('popup/setConfirmPopup', popupData)
      break
    case 'alert':
      popupData.buttonFunc = POPUP.CLOSE.ALERT
      store.commit('popup/setAlertPopup', popupData)
      break
    default:
      break
  }
}

export default POPUP
