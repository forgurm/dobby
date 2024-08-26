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
        <col style="width: 8%" />
        <col style="width: 92%" />
      </colgroup>
      <tbody>
        <tr>
          <th class="required left">
            <span>제목</span>
          </th>
          <td class="left">
            <div class="selectBox" style="width: 12.6rem">
              <!-- 공통 코드 api 데이터 가져와서 뿌려줌 -->
              <button type="button">선택</button>
              <!-- 위 버튼영역이 클릭 되었을 때, ul 영역 보이도록 처리 -->
              <ul>
                <!-- li 영역 클릭 되었을 때, ul 영역 숨김 처리 필요 -->
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
            <!-- toast-ui-editor 영역 -->
            <div ref="editor"></div>
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
              첨부된 파일이 없습니다.
              <label for="fileSelect" class="ml8">파일 선택</label>
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

<script setup>
import { onMounted, ref } from 'vue'
// toast-ui-editor import
import Editor from '@toast-ui/editor'
import '@toast-ui/editor/dist/toastui-editor.css'
// toast-ui-editor colorSyntax import
import 'tui-color-picker/dist/tui-color-picker.css'
import colorSyntax from '@toast-ui/editor-plugin-color-syntax'
import '@toast-ui/editor-plugin-color-syntax/dist/toastui-editor-plugin-color-syntax.css'

const editor = ref('')
const htmlChange = () => {
  console.log('editor:', editor.value.getHTML())
}
onMounted(() => {
  // toast-ui-editor 생성
  editor.value = new Editor({
    el: editor.value,
    previewStyle: 'vertical',
    height: '500px',
    initialEditType: 'wysiwyg', // default Edit Type
    hideModeSwitch: true, // 아래 markdown, wysiwyg 선택하는 switch 숨김 처리
    plugins: [colorSyntax], // 글 색상 입히기 플러그인
    events: {
      change: htmlChange // editor가 변경될때마다 함수 실행
    }
  })
})
</script>

<style></style>
