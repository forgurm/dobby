<template>
  <header role="mainHeader">
    <h1 class="ttl">공지관리 상세</h1>
    <nav class="path">
      <a href="javascript:void(0);" class="home">홈 ></a>
      <a href="javascript:void(0);" class="depth">&nbsp;공지관리 ></a>
      <a href="javascript:void(0);" class="depth">&nbsp;상세</a>
    </nav>
  </header>

  <article role="contents" class="mb0" title="공지관리 상세">
    <table class="horizontal">
      <colgroup>
        <col style="width: 12%" />
        <col style="width: 88%" />
      </colgroup>
      <tbody>
        <tr>
          <th class="required left">
            <span>제목</span>
          </th>
          <td class="left">
            <div class="selectBox" style="width: 12.6rem">
              <button type="button">선택</button>
              <ul>
                <li>option name1</li>
                <li>option name2</li>
                <li>option name3</li>
              </ul>
            </div>

            <label class="edit ml8" style="width: 80.7rem">
              <input type="text" class="w100" />
              <button type="button" class="del"></button>
            </label>

            <input type="checkbox" id="topFixed" class="ml8" />
            <label for="topFixed">상단고정</label>
          </td>
        </tr>
        <tr>
          <th class="required vaTop left">
            <span>내용</span>
          </th>
          <td colspan="7">
            <label class="w100" style="height: 17.2rem">
              <textarea
                placeholder="내용을 입력해주세요."
                class="w100"
                style="height: 100%"
              ></textarea
              >\
            </label>
            <img src="" alt="" class="mt16" />
          </td>
        </tr>
        <tr>
          <th class="required left"><span>노출상태</span></th>
          <td colspan="7" class="left">
            <input type="radio" name="visible" id="show" />
            <label
              for="show"
              checked
              style="width: 4.5rem; min-width: 4.5rem; display: inline-block"
              >노출</label
            >
            (
            <input type="checkbox" id="mainShow" />
            <label for="mainShow" checked>메인노출</label>
            )
            <input type="radio" name="visible" id="hide" />
            <label for="hide" style="width: 3.2rem">미노출</label>
          </td>
        </tr>
        <tr>
          <th class="left">파일첨부</th>
          <td class="left">
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
      </tbody>
    </table>
  </article>

  <footer class="bottomBtnArea" role="mainFooter">
    <button type="button" class="largeLine">목록</button>
    <button type="button" class="large type2">삭제</button>
    <button type="button" class="large">수정</button>
  </footer>
</template>

<script>
export default {}
</script>

<style></style>
