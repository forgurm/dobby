<template>
  <main role="main" title="계좌관리기관현황">
    
    <header role="mainHeader">
      <h1 class="ttl">계좌관리기관현황</h1>
      <nav class="path">
        <a href="javascript:void(0);" class="home">홈 > </a>
        <a href="javascript:void(0);" class="depth">&nbsp;현황 ></a>
        <a href="javascript:void(0);" class="depth">&nbsp;계좌관리기관현황</a>
      </nav>
    </header>

    <article role="contents" class="mb40" title="검색 테이블">
      <div class="search w100">
        <table>
          <colgroup>
            <col style="width: 12%;">
            <col style="width: 88%;">
          </colgroup>
            <tbody>
              <tr>
                <th class="left">구분</th>
                <td class="left">
                  <div class="selectBox" style="width:12.6rem;">
                    <button type="button">전체</button>
                    <ul>
                      <li>option name1</li>
                      <li>option name2</li>
                      <li>option name3</li>
                    </ul>
                  </div><!--//E:selectBox-->
                </td>
              </tr>
              <tr>
                <th class="left">계좌관리기관</th>
                <td>
                  <input type="checkbox" id="1" checked>
                  <label for="1">전체</label>
                  <input type="checkbox"  id="2" class="ml12">
                  <label for="2">A은행</label>
                  <input type="checkbox"  id="3" class="ml12">
                  <label for="3">B은행</label>
                  <input type="checkbox"  id="4" class="ml12">
                  <label for="4">C은행</label>
                </td>
              </tr>
              <tr>
                <th class="left">발행기간</th>
                <td class="left">
                  <div class="datePickerWrap">
                    <div class="datePicker"> 
                      YYYY-MM-DD 
                      <button type="button" class="cal"></button>
                    </div>
                  </div><!--//E:datePickerWrap--> 
                  &nbsp;~&nbsp; 
                  <div class="datePickerWrap ml8">
                    <div class="datePicker"> 
                      YYYY-MM-DD 
                      <button type="button" class="cal"></button>
                    </div>
                  </div><!--//E:datePickerWrap-->
                  <span class="inline ml8">*최대 1년 조회 가능합니다.</span>
                </td>
              </tr>
             
            </tbody>
        </table>
      </div><!--//E:search-->

      <div class="searchBtnArea">
        <button type="button" class="smallLine">초기화</button>
        <button type="button" class="small">조회</button>
      </div><!--//E:searchBtnArea-->
    </article>

    <article role="contents" title="목록">
      <div class="unitWrap">
        <div class="unit">
          총 <span>10</span>개
        </div>

        <div class="rightItem">
          <button type="button" class="small">엑셀 다운로드</button>
        </div>
      </div><!--//E:unitWrap-->

      <table class="vertical type2">
        <colgroup>
          <col style="width:6%"/>
          <col style="width:15%"/>
          <col style="width:19%"/>
          <col style="width:15%"/>
          <col style="width:15%"/>
          <col style="width:15%"/>
          <col style="width:15%"/>
        </colgroup>
        <thead>
          <tr>
            <th class="center">NO.</th>
            <th class="center">구분</th>
            <th class="center">계좌관리기관</th>
            <th class="center">담당 발행인</th>
            <th class="center">관리종목</th>
            <th class="center">배정수량</th>
            <th class="center">최근 발행일</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="center">10</td>
            <td class="center">구분</td>
            <td class="center"><a href="javascript:void(0);" class="center">NH농협은행</a></td>
            <td class="center">3</td>
            <td class="center">3</td>
            <td class="center">123,123,123</td>
            <td class="center">2024.06.06</td>
          </tr>
          <tr>
            <td class="center">9</td>
            <td class="center">구분</td>
            <td class="center"><a href="javascript:void(0);" class="center">NH농협은행</a></td>
            <td class="center">3</td>
            <td class="center">3</td>
            <td class="center">123,123,123</td>
            <td class="center">2024.06.06</td>
          </tr>
          <tr>
            <td class="center">8</td>
            <td class="center">구분</td>
            <td class="center"><a href="javascript:void(0);" class="center">NH농협은행</a></td>
            <td class="center">3</td>
            <td class="center">3</td>
            <td class="center">123,123,123</td>
            <td class="center">2024.06.06</td>
          </tr>
          <tr>
            <td class="center">7</td>
            <td class="center">구분</td>
            <td class="center"><a href="javascript:void(0);" class="center">NH농협은행</a></td>
            <td class="center">3</td>
            <td class="center">3</td>
            <td class="center">123,123,123</td>
            <td class="center">2024.06.06</td>
          </tr>
          <tr>
            <td class="center">6</td>
            <td class="center">구분</td>
            <td class="center"><a href="javascript:void(0);" class="center">NH농협은행</a></td>
            <td class="center">3</td>
            <td class="center">3</td>
            <td class="center">123,123,123</td>
            <td class="center">2024.06.06</td>
          </tr>
          <tr>
            <td class="center">5</td>
            <td class="center">구분</td>
            <td class="center"><a href="javascript:void(0);" class="center">NH농협은행</a></td>
            <td class="center">3</td>
            <td class="center">3</td>
            <td class="center">123,123,123</td>
            <td class="center">2024.06.06</td>
          </tr>
          <tr>
            <td class="center">4</td>
            <td class="center">구분</td>
            <td class="center"><a href="javascript:void(0);" class="center">NH농협은행</a></td>
            <td class="center">3</td>
            <td class="center">3</td>
            <td class="center">123,123,123</td>
            <td class="center">2024.06.06</td>
          </tr>
          <tr>
            <td class="center">3</td>
            <td class="center">구분</td>
            <td class="center"><a href="javascript:void(0);" class="center">NH농협은행</a></td>
            <td class="center">3</td>
            <td class="center">3</td>
            <td class="center">123,123,123</td>
            <td class="center">2024.06.06</td>
          </tr>
          <tr>
            <td class="center">2</td>
            <td class="center">구분</td>
            <td class="center"><a href="javascript:void(0);" class="center">NH농협은행</a></td>
            <td class="center">3</td>
            <td class="center">3</td>
            <td class="center">123,123,123</td>
            <td class="center">2024.06.06</td>
          </tr>
          <tr>
            <td class="center">1</td>
            <td class="center">구분</td>
            <td class="center"><a href="javascript:void(0);" class="center">NH농협은행</a></td>
            <td class="center">3</td>
            <td class="center">3</td>
            <td class="center">123,123,123</td>
            <td class="center">2024.06.06</td>
          </tr>
        </tbody>
      </table>

      <nav class="page w100">
        <button type="button" class="first"></button>
        <button type="button" class="prev"></button>
        <a href="javascript:void(0);" class="current">1</a>
        <a href="javascript:void(0);">2</a>
        <a href="javascript:void(0);">3</a>
        <a href="javascript:void(0);">4</a>
        <a href="javascript:void(0);">5</a>
        <a href="javascript:void(0);">6</a>
        <a href="javascript:void(0);">7</a>
        <a href="javascript:void(0);">8</a>
        <a href="javascript:void(0);">9</a>
        <a href="javascript:void(0);">10</a>
        <button type="button" class="next"></button>
        <button type="button" class="last"></button>
      </nav>
    </article>
  </main>
</template>

<script>
export default {}
</script>

<style></style>
