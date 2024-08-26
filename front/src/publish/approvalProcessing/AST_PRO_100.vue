<template>
  <main role="main" title="토큰증권 승인처리">
    <header role="mainHeader">
      <h1 class="ttl">토큰증권 승인처리</h1>
      <nav class="path">
        <a href="javascript:void(0);" class="home">홈 > </a>
        <a href="javascript:void(0);" class="depth">&nbsp;토큰증권 승인처리</a>
      </nav>
    </header>

    <article role="contents" class="mb40" title="검색 테이블">
      <div class="search w100">
        <table>
          <colgroup>
            <col style="width: 6%" />
            <col style="width: 44%" />
            <col style="width: 6%" />
            <col style="width: 44%" />
          </colgroup>
          <tbody>
            <tr>
              <th>신청구분</th>
              <td>
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
              <th>토큰증권상태</th>
              <td>
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
            </tr>
            <tr>
              <th>검색어</th>
              <td colspan="3">
                <div class="selectBox w200">
                  <button type="button">전체</button>
                  <ul>
                    <li>option name1</li>
                    <li>option name2</li>
                    <li>option name3</li>
                  </ul>
                </div>
                <!--//E:selectBox-->
                <label class="edit ml8" style="width: 44.4rem">
                  <input type="text" class="w100 left" placeholder="검색어 입력" />
                  <button type="button" class="del"></button>
                </label>
              </td>
            </tr>
            <tr>
              <th>조회기간</th>
              <td colspan="3">
                <div class="selectBox w200">
                  <button type="button">신청일자</button>
                  <ul>
                    <li>option name1</li>
                    <li>option name2</li>
                    <li>option name3</li>
                  </ul>
                </div>
                <!--//E:selectBox-->
                <div class="datePickerWrap ml8">
                  <div class="datePicker">
                    YYYY-MM-DD
                    <button type="button" class="cal"></button>
                  </div>
                </div>
                <!--//E:datePickerWrap-->
                &nbsp;~&nbsp;
                <div class="datePickerWrap ml8">
                  <div class="datePicker">
                    YYYY-MM-DD
                    <button type="button" class="cal"></button>
                  </div>
                </div>
                <!--//E:datePickerWrap-->
                <span class="inline ml8">*최대 1년 조회 가능합니다.</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <!--//E:search-->

      <div class="searchBtnArea">
        <button type="button" class="smallLine">초기화</button>
        <button type="button" class="small">조회</button>
      </div>
      <!--//E:searchBtnArea-->
    </article>

    <article role="contents" title="목록">
      <div class="unitWrap">
        <div class="unit">총 <span>10</span>개</div>
      </div>
      <!--//E:unitWrap-->

      <table class="vertical type2">
        <colgroup>
          <col style="width: 4%" />
          <col style="width: 6%" />
          <col style="width: 14%" />
          <col style="width: 10%" />
          <col style="width: 24%" />
          <col style="width: 12%" />
          <col style="width: 8%" />
          <col style="width: 6%" />
          <col style="width: 8%" />
          <col style="width: 8%" />
        </colgroup>
        <thead>
          <tr>
            <th>NO.</th>
            <th>신청구분</th>
            <th>발행인(회사명)</th>
            <th>종목코드</th>
            <th>총 발행수량</th>
            <th>배정기간</th>
            <th>배정공고일</th>
            <th>계좌관리기관</th>
            <th>토큰증권상태</th>
            <th>신청일</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="center">10</td>
            <td class="center"><span class="blue">발행</span></td>
            <td class="center"><a href="javascript:void(0);">(주)가나다</a></td>
            <td class="center">
              <a href="javascript:void(0);" alt="해당토큰증권명">KR123456789101</a>
            </td>
            <td class="center">1,000,000</td>
            <td class="center">2024.05.01 ~ 2024.05.15</td>
            <td class="center">2024.05.16</td>
            <td class="center">2</td>
            <td class="center">발행요청</td>
            <td class="center">2024.04.01</td>
          </tr>
          <tr>
            <td class="center">9</td>
            <td class="center"><span class="error">발행취소</span></td>
            <td class="center"><a href="javascript:void(0);">(주)가나다</a></td>
            <td class="center">
              <a href="javascript:void(0);" alt="해당토큰증권명">KR123456789101</a>
            </td>
            <td class="center">1,000,000</td>
            <td class="center">2024.05.01 ~ 2024.05.15</td>
            <td class="center">2024.05.16</td>
            <td class="center">2</td>
            <td class="center"><span class="error">취소대기</span></td>
            <td class="center">2024.04.01</td>
          </tr>
          <tr>
            <td class="center">8</td>
            <td class="center"><span class="blue">발행</span></td>
            <td class="center"><a href="javascript:void(0);">(주)가나다</a></td>
            <td class="center">
              <a href="javascript:void(0);" alt="해당토큰증권명">KR123456789101</a>
            </td>
            <td class="center">1,000,000</td>
            <td class="center">2024.05.01 ~ 2024.05.15</td>
            <td class="center">2024.05.16</td>
            <td class="center">2</td>
            <td class="center">발행진행</td>
            <td class="center">2024.04.01</td>
          </tr>
          <tr>
            <td class="center">7</td>
            <td class="center"><span class="blue">발행</span></td>
            <td class="center"><a href="javascript:void(0);">(주)가나다</a></td>
            <td class="center">
              <a href="javascript:void(0);" alt="해당토큰증권명">KR123456789101</a>
            </td>
            <td class="center">1,000,000</td>
            <td class="center">2024.05.01 ~ 2024.05.15</td>
            <td class="center">2024.05.16</td>
            <td class="center">2</td>
            <td class="center">발행완료</td>
            <td class="center">2024.04.01</td>
          </tr>
          <tr>
            <td class="center">6</td>
            <td class="center"><span class="blue">발행</span></td>
            <td class="center"><a href="javascript:void(0);">(주)가나다</a></td>
            <td class="center">
              <a href="javascript:void(0);" alt="해당토큰증권명">KR123456789101</a>
            </td>
            <td class="center">1,000,000</td>
            <td class="center">2024.05.01 ~ 2024.05.15</td>
            <td class="center">2024.05.16</td>
            <td class="center">2</td>
            <td class="center">-</td>
            <td class="center">2024.04.01</td>
          </tr>
          <tr>
            <td class="center">5</td>
            <td class="center"><span class="blue">발행</span></td>
            <td class="center"><a href="javascript:void(0);">(주)가나다</a></td>
            <td class="center">
              <a href="javascript:void(0);" alt="해당토큰증권명">KR123456789101</a>
            </td>
            <td class="center">1,000,000</td>
            <td class="center">2024.05.01 ~ 2024.05.15</td>
            <td class="center">2024.05.16</td>
            <td class="center">2</td>
            <td class="center">-</td>
            <td class="center">2024.04.01</td>
          </tr>
          <tr>
            <td class="center">4</td>
            <td class="center"><span class="blue">발행</span></td>
            <td class="center"><a href="javascript:void(0);">(주)가나다</a></td>
            <td class="center">
              <a href="javascript:void(0);" alt="해당토큰증권명">KR123456789101</a>
            </td>
            <td class="center">1,000,000</td>
            <td class="center">2024.05.01 ~ 2024.05.15</td>
            <td class="center">2024.05.16</td>
            <td class="center">-</td>
            <td class="center">-</td>
            <td class="center">2024.04.01</td>
          </tr>
          <tr>
            <td class="center">3</td>
            <td class="center"><span class="green">배정</span></td>
            <td class="center"><a href="javascript:void(0);">(주)가나다</a></td>
            <td class="center">
              <a href="javascript:void(0);" alt="해당토큰증권명">KR123456789101</a>
            </td>
            <td class="center">1,000,000</td>
            <td class="center">2024.05.01 ~ 2024.05.15</td>
            <td class="center">2024.05.16</td>
            <td class="center">-</td>
            <td class="center">-</td>
            <td class="center">2024.04.01</td>
          </tr>
          <tr>
            <td class="center">2</td>
            <td class="center"><span class="dark">청산</span></td>
            <td class="center"><a href="javascript:void(0);">(주)가나다</a></td>
            <td class="center">
              <a href="javascript:void(0);" alt="해당토큰증권명">KR123456789101</a>
            </td>
            <td class="center">1,000,000</td>
            <td class="center">2024.05.01 ~ 2024.05.15</td>
            <td class="center">2024.05.16</td>
            <td class="center">-</td>
            <td class="center">-</td>
            <td class="center">2024.04.01</td>
          </tr>
          <tr>
            <td class="center">1</td>
            <td class="center"><span class="dark">청산</span></td>
            <td class="center"><a href="javascript:void(0);">(주)가나다</a></td>
            <td class="center">
              <a href="javascript:void(0);" alt="해당토큰증권명">KR123456789101</a>
            </td>
            <td class="center">1,000,000</td>
            <td class="center">2024.05.01 ~ 2024.05.15</td>
            <td class="center">2024.05.16</td>
            <td class="center">-</td>
            <td class="center">-</td>
            <td class="center">2024.04.01</td>
          </tr>
        </tbody>
        <tbody>
          <!--//nodata-->
          <tr>
            <td colspan="10" class="center nodata">등록된 게시물이 없습니다.</td>
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
