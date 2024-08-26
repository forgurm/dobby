<!-- 홈 > 계정관리 > 발행인 > 등록 -->
<template>
  <main role="main" title="계정관리-발행인">
    <header role="mainHeader">
      <h1 class="ttl">발행인 등록</h1>
      <nav class="path">
        <a href="javascript:void(0);" class="home">홈 > </a>
        <a href="javascript:void(0);" class="depth">&nbsp;계정관리 ></a>
        <a href="javascript:void(0);" class="depth">&nbsp;발행인 ></a>
        <a href="javascript:void(0);" class="depth">&nbsp;등록</a>
      </nav>
    </header>

    <article role="contents" class="mb0" title="발행인정보">
      <hgroup class="ttl">
        <h3 class="ttl">발행인정보</h3>
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
            <td class="left" colspan="3">
              <label class="edit dib vaTop" style="width: 43.9rem">
                <input type="text" class="w100 left" placeholder="아이디 입력" />
                <!-- 위 input에 value가 추가될 때, 보이도록 활성화 필요 ---- v-if -->
                <button type="button" class="del"></button>
                <p class="feedback db grey">*이메일주소로 입력해 주세요.</p>
              </label>
              <button type="button" class="medium ml8">중복체크</button>
            </td>
          </tr>
          <tr>
            <th class="left required"><span>권한설정</span></th>
            <td class="left" colspan="3">
              <input type="radio" name="setting" id="setYes" checked />
              <label for="setYes">접근허용</label>
              <input type="radio" name="setting" id="setNo" />
              <label for="setNo">탈퇴(접근불가)</label>
            </td>
          </tr>
          <tr>
            <th class="left required"><span>발행인(회사명)</span></th>
            <td class="left">
              <label class="edit w100">
                <input type="text" class="required w100 left" placeholder="발행인 입력" />
                <!-- 위 input에 value가 추가될 때, 보이도록 활성화 필요 ---- v-if -->
                <button type="button" class="del"></button>
              </label>
            </td>
            <th class="left required"><span>대표자명</span></th>
            <td class="left">
              <label class="edit w100">
                <input type="text" class="w100 left" placeholder="대표자명 입력" />
                <!-- 위 input에 value가 추가될 때, 보이도록 활성화 필요 ---- v-if -->
                <button type="button" class="del"></button>
                <p class="feedback db grey">*공동대표자일 경우, ''로 구분해 주세요.</p>
              </label>
            </td>
          </tr>
          <tr>
            <th class="left required"><span>사업자등록번호</span></th>
            <td class="left">
              <label class="edit w100">
                <input type="text" class="w100 left" placeholder="사업자등록번호 입력" />
                <!-- 위 input에 value가 추가될 때, 보이도록 활성화 필요 ---- v-if -->
                <button type="button" class="del"></button>
              </label>
            </td>
            <th class="left required"><span>법인등록번호</span></th>
            <td class="left">
              <label class="edit w100">
                <input type="text" class="w100 left" placeholder="법인등록번호 입력" />
                <!-- 위 input에 value가 추가될 때, 보이도록 활성화 필요 ---- v-if -->
                <button type="button" class="del"></button>
              </label>
            </td>
          </tr>
          <tr>
            <th class="left">사업장소재지</th>
            <td class="left">
              <label class="edit w100">
                <input type="text" class="w100 left" placeholder="주소 입력" />
                <button type="button" class="del"></button>
              </label>
              <label class="edit w100">
                <input type="text" class="w100 left" placeholder="상세 주소 입력" />
                <!-- 위 input에 value가 추가될 때, 보이도록 활성화 필요 ---- v-if -->
                <button type="button" class="del"></button>
                <p class="feedback db grey">*사업자등록증의 사업장소재지를 입력해 주세요.</p>
              </label>
            </td>
          </tr>
          <tr>
            <th class="left">사업자등록증</th>
            <td class="left" colspan="3">
              <div class="fileUpload">
                <label for="fileSelect">파일 선택</label>
                <input type="file" id="fileSelect" />
                <input class="fileName" placeholder="첨부된 파일이 없습니다." />
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </article>

    <footer class="bottomBtnArea" role="mainFooter">
      <button type="button" class="largeLine">목록</button>
      <button type="button" class="large">저장</button>
    </footer>
  </main>
</template>

<script>
export default {}
</script>

<style></style>
