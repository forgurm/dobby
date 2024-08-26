<template>
 <main role="main"  title="공지사항">
        <header role="mainHeader">
          <h1 class="ttl">공지사항</h1>
          <nav class="path">
            <a href="javascript:void(0);" class="home">홈 ></a>
            <a href="javascript:void(0);" class="depth">&nbsp;공지사항</a>
          </nav>

          
      </header>

      <article role="contents" title="공지사항 목록">
          <div class="unitWrap">
            <div class="unit">
              총 <span>4</span>개
            </div>
            
            <div class="rightItem">
              
              <div class="selectBox w85">
                <button type="button">전체</button>
                <ul>
                  <li>전체</li>
                  <li>제목</li>
                  <li>내용</li>
                </ul>
              </div><!--E:selectBox-->

              <label class="edit w200 ml8">
                <input type="text" class="w100 left" placeholder="검색어를 입력해 주세요."/>
              </label>

              <button type="button" class="small ml8">조회</button>
            </div><!--E:rightItem-->
          </div><!--E:unitWrap-->

          <table class="vertical">
            <colgroup>
              <col style="width: 5%;"/>
              <col style="width: 70%;"/>
              <col style="width: 15%;"/>
              <col style="width: 10%"/>
            </colgroup>
            <thead>
              <tr>
                <th>No.</th>
                <th>제목</th>
                <th>등록일</th>
                <th>조회수</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="center">10</td>
                <td>
                  <a href="javascript:void(0);" class="notice">
                    공지사항입니다.공지사항입니다.공지사항입니다.공지사항입니다.공지사항입니다.공지사항입니다.공지사항입니다.공지사항입니다.공지사항입니다.공지사항입니다.공지사항입니다.공지사항입니다.공지사항입니다.공지사항입니다.공지사항입니다.공지사항입니다.공지사항입니다.
                  </a>
                  <button type="button" class="attachment"></button><!--첨부파일 링크-->
                </td>
                <td class="center">2024-05-24</td>
                <td class="center">159</td>
              </tr>
              <tr>
                <td class="center">9</td>
                <td>
                  <a href="javascript:void(0);" class="notice">공지사항입니다.</a>
                </td>
                <td class="center">2024-05-24</td>
                <td class="center">159</td>
              </tr>
              <tr>
                <td class="center">8</td>
                <td>
                  <a href="javascript:void(0);" class="notice">공지사항입니다.</a>
                </td>
                <td class="center">2024-05-24</td>
                <td class="center">159</td>
              </tr>
              <tr>
                <td class="center">7</td>
                <td>
                  <a href="javascript:void(0);" class="notice">공지사항입니다.</a>
                </td>
                <td class="center">2024-05-24</td>
                <td class="center">159</td>
              </tr>
              <tr>
                <td class="center">6</td>
                <td>
                  <a href="javascript:void(0);" class="notice">공지사항입니다.</a>
                </td>
                <td class="center">2024-05-24</td>
                <td class="center">159</td>
              </tr>
              <tr>
                <td class="center">5</td>
                <td>
                  <a href="javascript:void(0);" class="notice">공지사항입니다.</a>
                </td>
                <td class="center">2024-05-24</td>
                <td class="center">159</td>
              </tr>
              <tr>
                <td class="center">4</td>
                <td>
                  <a href="javascript:void(0);" class="notice">공지사항입니다.</a>
                </td>
                <td class="center">2024-05-24</td>
                <td class="center">159</td>
              </tr>
              <tr>
                <td class="center">3</td>
                <td>
                  <a href="javascript:void(0);" class="notice">공지사항입니다.</a>
                </td>
                <td class="center">2024-05-24</td>
                <td class="center">159</td>
              </tr>
              <tr>
                <td class="center">2</td>
                <td>
                  <a href="javascript:void(0);" class="notice">공지사항입니다.</a>
                </td>
                <td class="center">2024-05-24</td>
                <td class="center">159</td>
              </tr>
              <tr>
                <td class="center">1</td>
                <td>
                  <a href="javascript:void(0);" class="notice">공지사항입니다.</a>
                </td>
                <td class="center">2024-05-24</td>
                <td class="center">159</td>
              </tr>
              <tr>
                <td colspan="4" class="center">
                  등록된 게시물이 없습니다.
                </td>
              </tr>
            </tbody>
          </table>

          <nav class="page w100">
            <button type="button" class="first"></button>
            <button type="button" class="prev"></button>
            <a href="javascript:void(0);">1</a>
            <a href="javascript:void(0);">2</a>
            <a href="javascript:void(0);">3</a>
            <a href="javascript:void(0);">4</a>
            <a href="javascript:void(0);" class="current">5</a>
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
