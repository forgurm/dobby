<template>
  <main role="main"  title="약관관리">
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
               <col style="width: 12%;"/>
               <col style="width: 13%;"/>
               <col style="width: 12%;"/>
               <col style="width: 13%;"/>
               <col style="width: 12%;"/>
               <col style="width: 13%;"/>
               <col style="width: 12%;"/>
               <col style="width: 13%;"/>
             </colgroup>
             <tbody>
               <tr>
                 <th class="required left">
                   <span>약관카테고리</span>
                 </th>
                 <td class="left">
                  <div class="selectBox" style="width:12.6rem;">
                    <button type="button">선택</button>
                    <ul>
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
                    <label class="edit" style="width:14rem">
                      <input type="text" class="w100"/>
                      <button type="button" class="del"></button>
                    </label>
                   </td>
                  <th class="required left">
                     <span>공고일자</span>
                   </th>
                   <td class="left">
                    <div class="datePickerWrap" style="width:14rem;">
                      <div class="datePicker"> 
                        YYYY-MM-DD 
                        <button type="button" class="cal"></button>
                      </div>
                    </div>
                   </td>
                 <th class="required left">
                     <span>시행일자</span>
                 </th>
                 <td class="left">
                  <div class="datePickerWrap" style="width:14rem;">
                      <div class="datePicker"> 
                        YYYY-MM-DD 
                        <button type="button" class="cal"></button>
                      </div>
                    </div>
                 </td>
               </tr>
               <tr>
                 <th class="required left">
                   <span>약관명</span>
                 </th>
                 <td class="left" colspan="7">
                  <label class="edit w100">
                      <input type="text" class="w100"/>
                      <button type="button" class="del"></button>
                    </label>
                 </td>
               </tr>
               <tr>
                 <th class="required vaTop left">
                   <span>약관내용</span>
                 </th>
                 <td colspan="7">
                  <label class="w100" style="height:44rem;">
                    <textarea placeholder="내용을 입력해주세요." class="w100" style="height:100%"></textarea>\
                  </label>
                 </td>
               </tr>
               <tr>
                 <th class="required left"><span>노출상태</span></th>
                 <td colspan="7" class="left">
                   <input type="radio" name="visible" id="show"><label for="show" checked>노출</label>
                   <input type="radio" name="visible" id="hide"><label for="hide">미노출</label>
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
   </main>
 </template>

<script>
export default {}
</script>

<style></style>
