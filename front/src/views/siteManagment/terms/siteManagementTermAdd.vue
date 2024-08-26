<template>
  <header role="mainHeader">
    <h1 class="ttl">약관관리</h1>
    <nav class="path">
      <a href="javascript:void(0);" class="home">홈 ></a>
      <a href="javascript:void(0);" class="depth">&nbsp;사이트관리 ></a>
      <a href="javascript:void(0);" class="depth">&nbsp;약관관리 ></a>
      <a href="javascript:void(0);" class="depth">&nbsp;상세</a>
    </nav>
  </header>

  <article role="contents" class="mb0" title="약관관리 상세">
    <table class="horizontal">
      <colgroup>
        <col style="width: 10%" />
        <col style="width: 15%" />
        <col style="width: 10%" />
        <col style="width: 15%" />
        <col style="width: 10%" />
        <col style="width: 15%" />
        <col style="width: 10%" />
        <col style="width: 15%" />
      </colgroup>
      <tbody>
        <tr>
          <th class="required left">
            <span>약관카테고리</span>
          </th>
          <td class="left">
            <div class="selectBox" style="min-width: 16.8rem">
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
          </td>
          <th class="required left">
            <span>버전</span>
          </th>
          <td class="left">
            <label class="edit" style="width: 14rem">
              <input type="text" class="w100" />
              <button type="button" class="del"></button>
            </label>
          </td>
          <th class="required left">
            <span>공고일자</span>
          </th>
          <td class="left">
            <div class="datePickerWrap" style="width: 14rem">
              <!-- v-model을 활용해 data를 가져옴 -->
              <!-- :ui="{
                      input: `sctsPrtDt ${errorClass.stInfo.sctsPrtDt === 'error' ? 'required' : ''}`
                    }" validation 통과 못하였을 때, style-binding을 활용해 적용 -->
              <DatePicker
                placeholder="YYYY-MM-DD"
                format="yyyy-MM-dd"
                locale="ko"
                monthNameFormat="short"
                :monthChangeOnScroll="false"
                :enableTimePicker="false"
                autoApply
              >
                <!-- datepicker 안 이미지 적용하고 위해 template 생성 -->
                <template #input-icon>
                  <div class="input-slot-image"></div>
                </template>
              </DatePicker>
            </div>
          </td>
          <th class="required left">
            <span>시행일자</span>
          </th>
          <td class="left">
            <div class="datePickerWrap" style="width: 14rem">
              <!-- v-model을 활용해 data를 가져옴 -->
              <!-- :ui="{
                      input: `sctsPrtDt ${errorClass.stInfo.sctsPrtDt === 'error' ? 'required' : ''}`
                    }" validation 통과 못하였을 때, style-binding을 활용해 적용 -->
              <DatePicker
                placeholder="YYYY-MM-DD"
                format="yyyy-MM-dd"
                locale="ko"
                monthNameFormat="short"
                :monthChangeOnScroll="false"
                :enableTimePicker="false"
                autoApply
              >
                <!-- datepicker 안 이미지 적용하고 위해 template 생성 -->
                <template #input-icon>
                  <div class="input-slot-image"></div>
                </template>
              </DatePicker>
            </div>
          </td>
        </tr>
        <tr>
          <th class="required left">
            <span>약관명</span>
          </th>
          <td class="left" colspan="7">
            <label class="edit w100">
              <input type="text" class="w100" />
              <button type="button" class="del"></button>
            </label>
          </td>
        </tr>
        <tr>
          <th class="required vaTop left">
            <span>약관내용</span>
          </th>
          <td colspan="7">
            <!-- toast-ui-editor 영역 -->
            <div ref="editor"></div>
          </td>
        </tr>
        <tr>
          <th class="required left"><span>노출상태</span></th>
          <td colspan="7" class="left">
            <input type="radio" name="visible" id="show" /><label for="show" checked>노출</label>
            <input type="radio" name="visible" id="hide" /><label for="hide">미노출</label>
          </td>
        </tr>
      </tbody>
    </table>
  </article>

  <footer class="bottomBtnArea" role="mainFooter">
    <button type="button" class="largeLine">목록</button>
    <button type="button" class="large type2">임시저장</button>
    <button type="button" class="large">수정</button>
  </footer>
</template>

<script setup>
import { onMounted, ref } from 'vue'
// datepicker import
import DatePicker from '@vuepic/vue-datepicker'
import '@vuepic/vue-datepicker/dist/main.css'
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
