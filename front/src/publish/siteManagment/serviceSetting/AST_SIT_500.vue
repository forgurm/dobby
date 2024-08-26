<template>
  <main role="main" title="서비스 환경설정">
    
    <header role="mainHeader">
      <h1 class="ttl">서비스 환경설정</h1>
      <nav class="path">
        <a href="javascript:void(0);" class="home">홈 > </a>
        <a href="javascript:void(0);" class="depth">&nbsp;사이트관리 ></a>
        <a href="javascript:void(0);" class="depth">&nbsp;서비스환경설정</a>
      </nav>
    </header>
    
    <article role="contents" class="mb0" title="서비스 환경설정">

      <table class="horizontal">
        <colgroup>
          <col style="width: 15%"/>
          <col style="width: 35%"/>
          <col style="width: 15%"/>
          <col style="width: 35%"/>
        </colgroup>
        <tbody>
          <tr>
            <th class="left required"><span>아이디</span></th>
            <td class="left">
              <label class="edit w100">
                <input type="text" class="w100 left" placeholder="아이디 입력" value="asdgf@asdfg.com">
                <button type="button" class="del"></button>
              </label>
            </td>
          </tr>
          <tr>
            <th class="left required"><span>서비스명</span></th>
            <td class="left">
              <label class="edit w100">
                <input type="text" class="w100 left" placeholder="서비스명 입력">
                <button type="button" class="del"></button>
              </label>
            </td>
            <th class="left required"><span>암호화키</span></th>
            <td class="left">
              <label class="edit w100">
                <input type="text" class="w100 left" placeholder="암호화키 입력">
                <button type="button" class="del"></button>
              </label>
            </td>
          </tr>
          <tr>
            <th class="left required"><span>백엔드 Url</span></th>
            <td class="left">
              <label class="edit w100">
                <input type="text" class="w100 left" placeholder="백엔드 Url 입력">
                <button type="button" class="del"></button>
              </label>
            </td>
            <th class="left required"><span>백엔드 API Key</span></th>
            <td class="left">
              <label class="edit w100">
                <input type="text" class="w100 left" placeholder="백엔드 API Key 입력">
                <button type="button" class="del"></button>
              </label>
            </td>
          </tr>
          <tr>
            <th class="left required"><span>베수 G/W Url</span></th>
            <td class="left">
              <label class="edit w100">
                <input type="text" class="w100 left" placeholder="베수 Url 입력">
                <button type="button" class="del"></button>
              </label>
            </td>
            <th class="left required"><span>베수 G/W API Key</span></th>
            <td class="left">
              <label class="edit w100">
                <input type="text" class="w100 left" placeholder="베수 G/W API Key 입력">
                <button type="button" class="del"></button>
              </label>
            </td>
          </tr>
          <tr>
            <th class="required left">베수 전송개수</th>
            <td class="left" colspan="3">
              <label class="edit w100">
                <input type="text" class="w100 left" placeholder="베수 전송개수 입력">
                <button type="button" class="del"></button>
              </label>
            </td>
          </tr>
          <tr>
            <th class="left required"><span>패브릭 G/W Url</span></th>
            <td class="left">
              <label class="edit w100">
                <input type="text" class="w100 left" placeholder="패브릭 G/W Url 입력">
                <button type="button" class="del"></button>
              </label>
            </td>
            <th class="left required"><span>패브릭 G/W API Key</span></th>
            <td class="left">
              <label class="edit w100">
                <input type="text" class="w100 left" placeholder="패브릭 G/W API Key 입력">
                <button type="button" class="del"></button>
              </label>
            </td>
          </tr>
          <tr>
            <th class="left required"><span>패브릭 인증서</span></th>
            <td class="left" colspan="3">
              <label class="edit w100">
                <input type="text" class="w100 left" placeholder="패브릭 인증서 입력">
                <button type="button" class="del"></button>
              </label>
            </td>
          </tr>
          <tr>
            <th class="left">등록(수정)일</th>
            <td class="left">2024.06.07</td>
            <th class="left">작성자</th>
            <td class="left">관리자1</td>
          </tr>
        </tbody>
      </table>
      </article>

      <footer class="bottomBtnArea" role="mainFooter">
        <button type="button" class="large">수정</button>
    </footer>
  </main>
</template>

<script>
export default {}
</script>

<style></style>
