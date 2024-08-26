<template>
    <main role="main" title="계정관리-발행인">
    
    <header role="mainHeader">
      <h1 class="ttl">발행인</h1>
      <nav class="path">
        <a href="javascript:void(0);" class="home">홈 > </a>
        <a href="javascript:void(0);" class="depth">&nbsp;계정관리 ></a>
        <a href="javascript:void(0);" class="depth">&nbsp;발행인 ></a>
        <a href="javascript:void(0);" class="depth">&nbsp;상세</a>
      </nav>
    </header>
    
    <article role="contents" class="mb0" title="발행인정보">
      <hgroup class="ttl">
        <h3 class="ttl">발행인정보</h3>
      </hgroup>

      <div class="unitWrap">
        <div class="rightItem grey">*초기 비밀번호는 stog1234!@입니다.</div>
      </div><!--//E:unitWrap-->

      <table class="horizontal">
        <colgroup>
          <col style="width: 12%"/>
          <col style="width: 38%"/>
          <col style="width: 12%"/>
          <col style="width: 38%"/>
        </colgroup>
        <tbody>
          <tr>
            <th class="left required"><span>아이디</span></th>
            <td class="left">asdfg@asdgg.com</td>
            <th class="left">비밀번호초기화</th>
            <td class="left">
              <button type="button" class="medium">비밀번호 초기화</button>
            </td>
          </tr>
          <tr>
            <th class="left required"><span>권한설정</span></th>
            <td class="left" colspan="3">
              <input type="radio" name="setting" id="setYes" checked>
              <label for="setYes">접근허용</label>
              <input type="radio" name="setting" id="setNo">
              <label for="setNo">탈퇴(접근불가)</label>
            </td>
          </tr>
          <tr>
            <th class="left required"><span>발행인(회사명)</span></th>
            <td class="left vaTop">
              <label class="edit w100">
                <input type="text" class="w100 left" placeholder="발행인 입력">
                <button type="button" class="del"></button>
              </label>
            </td>
            <th class="left required"><span>대표자명</span></th>
            <td class="left">
              <label class="edit w100">
                <input type="text" class="w100 left" placeholder="대표자명 입력">
                <button type="button" class="del"></button>
                <p class="feedback db grey">*공동대표자일 경우, ''로 구분해 주세요.</p>
              </label>
            </td>
          </tr>
          <tr>
            <th class="left required"><span>사업자등록번호</span></th>
            <td class="left">
              <label class="edit w100">
                <input type="text" class="w100 left" placeholder="사업자등록번호 입력">
                <button type="button" class="del"></button>
              </label>
            </td>
            <th class="left required"><span>법인등록번호</span></th>
            <td class="left">
              <label class="edit w100">
                <input type="text" class="w100 left" placeholder="법인등록번호 입력">
                <button type="button" class="del"></button>
              </label>
            </td>
          </tr>
          <tr>
            <th class="left">사업자등록증</th>
            <td class="left" colspan="3">
              <div class="fileUpload mb6">
                <label for="fileSelect">파일 선택</label>
                <input type="file" id="fileSelect">
                <!--<input class="fileName" placeholder="파일을 선택해주세요.">-->
              </div>
              <span class="file">산정방식 요약본.pdf<button type="button" class="fileDel ml8"></button></span>
           </td>
          </tr>
          <tr>
            <th class="left">비고</th>
            <td class="left" colspan="3">
              <label>
                <textarea placeholder="내용을 입력해주세요." class="w100">2024.05.17 회사명/대표자명 수정함 > 사업자등록증은 익일 전달받기로 함. </textarea>
              </label>
            </td>
          </tr>
        </tbody>
      </table>
      </article>

      <footer class="bottomBtnArea" role="mainFooter">
        <button type="button" class="largeLine">목록</button>
        <button type="button" class="large">수정완료</button>
    </footer>
  </main>
</template>

<script>
export default {}
</script>

<style></style>
