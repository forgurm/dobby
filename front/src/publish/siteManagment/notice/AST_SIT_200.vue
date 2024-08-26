<template>
  <main role="main"  title="공지관리">
        <header role="mainHeader">
          <h1 class="ttl">공지관리</h1>
          <nav class="path">
            <a href="javascript:void(0);" class="home">홈 ></a>
            <a href="javascript:void(0);" class="depth">&nbsp;사이트관리 ></a>
            <a href="javascript:void(0);" class="depth">&nbsp;공지관리</a>
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
              <th>검색어</th>
              <td>
                <div class="selectBox w200">
                  <button type="button">전체</button>
                  <ul>
                    <li>option name1</li>
                    <li>option name2</li>
                    <li>option name3</li>
                  </ul>
                </div><!--//E:selectBox-->
                <label class="edit ml8" style="width: 35.4rem">
                  <input type="text" class="w100 left" placeholder="검색어 입력">
                  <button type="button" class="del"></button>
                </label>
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
        <div class="unit">총 <span>10</span>개</div>

        <div class="rightItem">
          <button type="button" class="small">등록</button>
        </div>
      </div><!--//E:unitWrap-->

      <table class="vertical type2">
        <colgroup>
          <col style="width: 6%"/>
          <col style="width: 44%"/>
          <col style="width: 10%"/>
          <col style="width: 10%"/>
          <col style="width: 10%"/>
          <col style="width: 10%"/>
          <col style="width: 10%"/>
        </colgroup>
        <thead>
          <tr>
            <th>NO.</th>
            <th>구분</th>
            <th>제목</th>
            <th>상단고정</th>
            <th>메인노출상태</th>
            <th>노출상태</th>
            <th>작성일</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="center">4</td>
            <td class="center">발행인</td>
            <td class="center"><a href="javascript:void(0);">공지입니다.</a></td>
            <td class="center">고정</td>
            <td class="center">노출</td>
            <td class="center">노출</td>
            <td class="center">2024.04.01</td>
          </tr>
          <tr>
            <td class="center">3</td>
            <td class="center">발행인</td>
            <td class="center"><a href="javascript:void(0);">공지입니다.</a></td>
            <td class="center">고정</td>
            <td class="center">노출</td>
            <td class="center">노출</td>
            <td class="center">2024.04.01</td>
          </tr>
          <tr>
            <td class="center">2</td>
            <td class="center">발행인</td>
            <td class="center"><a href="javascript:void(0);">공지입니다.</a></td>
            <td class="center">고정</td>
            <td class="center">노출</td>
            <td class="center">노출</td>
            <td class="center">2024.04.01</td>
          </tr>
          <tr>
            <td class="center">1</td>
            <td class="center">발행인</td>
            <td class="center"><a href="javascript:void(0);">공지입니다.</a></td>
            <td class="center">고정</td>
            <td class="center">노출</td>
            <td class="center">노출</td>
            <td class="center">2024.04.01</td>
          </tr>
        </tbody>
        <tbody><!--//nodata-->
          <tr>
            <td colspan="10"  class="center nodata">등록된 게시물이 없습니다.</td>
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
        <button type="button" class="last"></button></nav>
    </article>

    </main>
</template>

<script>
export default {}
</script>

<style></style>
