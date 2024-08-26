const commonCodeReq = {}

commonCodeReq.stieAmnComnC = ({ firstCode, secondCode }) => {
  const requestSend = {}
  /* 1차 코드 */
  if (firstCode) requestSend.firstCode = firstCode /** @property {String} firstCode - 1차 코드 */
  if (secondCode)
    requestSend.secondCode = secondCode /** @property {String} secondCode - 2차 코드 */
  return requestSend
}

export default commonCodeReq
 