<!-- 홈 > 게정관리 > 게좌관리기관 > 상세 -->
<template>
  <main role="main" title="계정관리-계좌관리기관">
    <header role="mainHeader">
      <h1 class="ttl">계좌관리기관 상세</h1>
      <nav class="path">
        <a href="javascript:void(0);" class="home">홈 > </a>
        <a href="javascript:void(0);" class="depth">&nbsp;계정관리 ></a>
        <a href="javascript:void(0);" class="depth">&nbsp;계좌관리기관 ></a>
        <a href="javascript:void(0);" class="depth">&nbsp;상세</a>
      </nav>
    </header>

    <article role="contents" class="mb0" title="계좌관리기관 정보">
      <hgroup class="ttl">
        <h3 class="ttl">계좌관리기관 정보</h3>
      </hgroup>

      <div class="unitWrap">
        <div class="rightItem grey">*초기 비밀번호는 stog1234!@입니다.</div>
      </div>
      <!--//E:unitWrap-->

      <table class="horizontal">
        <colgroup>
          <col style="width: 12%" />
          <col style="width: 38%" />
          <col style="width: 12%" />
          <col style="width: 38%" />
        </colgroup>
        <tbody>
          <tr>
            <th class="left required"><span>아이디</span></th>
            <td class="left">banking@bank.com</td>
            <th class="left">비밀번호초기화</th>
            <td class="left">
              <button type="button" class="medium">비밀번호 초기화</button>
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
              </div>
              <!--//E:selectBox-->
            </td>
            <th class="left required"><span>기관코드</span></th>
            <td class="left">010</td>
          </tr>
          <tr>
            <th class="left required"><span>금융기관명</span></th>
            <td class="left">
              <label class="edit w100">
                <input type="text" class="w100 left" value="##$은행" />
                <button type="button" class="del"></button>
              </label>
            </td>
            <th class="left required"><span>대표자명</span></th>
            <td class="left">
              <label class="edit w100">
                <input type="text" class="w100 left" placeholder="대표자명 입력" value="대표자" />
                <button type="button" class="del"></button>
                <p class="feedback grey">*공동대표자일 경우, ''로 구분해 주세요.</p>
              </label>
            </td>
          </tr>
          <tr>
            <th class="left required"><span>사업자등록번호</span></th>
            <td class="left">123-45-12345</td>
            <th class="left required"><span>법인등록번호</span></th>
            <td class="left">123456-2345657</td>
          </tr>
          <tr>
            <th class="left">사업자등록증</th>
            <td class="left" colspan="3">
              <div class="fileUpload mb6">
                <label for="fileSelect">파일 선택</label>
                <input type="file" id="fileSelect" />
                <!--<input class="fileName" placeholder="파일을 선택해주세요.">-->
              </div>
              <span class="file"
                >산정방식 요약본.pdf<button type="button" class="fileDel ml8"></button
              ></span>
            </td>
          </tr>
          <tr>
            <th class="left">비고</th>
            <td class="left" colspan="3">
              <label>
                <textarea placeholder="내용을 입력해주세요." class="w100">
다수의 발행인보유</textarea
                >
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
