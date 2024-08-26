<template>
  <main role="main" title="계정관리-계좌관리기관">
    
    <header role="mainHeader">
      <h1 class="ttl">계좌관리기관 등록</h1>
      <nav class="path">
        <a href="javascript:void(0);" class="home">홈 > </a>
        <a href="javascript:void(0);" class="depth">&nbsp;계정관리 ></a>
        <a href="javascript:void(0);" class="depth">&nbsp;계좌관리기관 ></a>
        <a href="javascript:void(0);" class="depth">&nbsp;등록</a>
      </nav>
    </header>
    
    <article role="contents" class="mb0" title="계좌관리기관 정보">
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
            <td class="left" colspan="3">
              <label class="edit dib vaTop" style="width: 43.9rem;">
                <input type="text" class="w100 left" placeholder="아이디 입력">
                <button type="button" class="del"></button>
                <p class="feedback db grey">*이메일주소로 입력해 주세요.</p>
              </label>
              <button type="button" class="medium ml8">중복체크</button>
            </td>
          </tr>
          <tr>
            <th class="left required"><span>금융기관구분</span></th>
            <td class="left">
              <div class="selectBox w200">
                  <button type="button">전체</button>
                  <ul>
                    <li>option name1</li>
                    <li>option name2</li>
                    <li>option name3</li>
                  </ul>
                </div><!--//E:selectBox-->
            </td>
            <th class="left required"><span>기관코드</span></th>
            <td class="left">
              <label class="edit w100">
                <input type="text" class="w100 left" placeholder="기관ㅋ모드 입력">
                <button type="button" class="del"></button>
              </label>
            </td>
          </tr>
          <tr>
            <th class="left required"><span>금융기관명</span></th>
            <td class="left">
              <label class="edit w100">
                <input type="text" class="w100 left" placeholder="금융기관명 입력">
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
              <div class="fileUpload">
                <label for="fileSelect">파일 선택</label>
                <input type="file" id="fileSelect">
                <input class="fileName" placeholder="첨부된 파일이 없습니다.">
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      </article>

      <footer class="bottomBtnArea" role="mainFooter">
        <button type="button" class="largeLine">취소</button>
        <button type="button" class="large">저장</button>
    </footer>
  </main>
</template>

<script>
export default {}
</script>

<style></style>
