<template>
  <main role="main" title="토큰증권 신청승인 상세">
    <header role="mainHeader">
      <h1 class="ttl">토큰증권 신청승인 상세</h1>
      <nav class="path">
        <a href="javascript:void(0);" class="home">홈 > </a>
        <a href="javascript:void(0);" class="depth">&nbsp;토큰증권 신청승인 ></a>
        <a href="javascript:void(0);" class="depth">&nbsp;상세</a>
      </nav>
    </header>

    <article role="contents" title="신청정보">
      <hgroup class="ttl">
        <h3 class="ttl">신청정보</h3>
      </hgroup>

      <div class="unitWrap vertical">
        <div class="rightItem">*처리가 필요한 토큰증권입니다.</div>
      </div>
      <!--//E:unitWrap-->

      <table class="noline">
        <colgroup>
          <col style="width: 12%" />
          <col style="width: 38%" />
          <col style="width: 12%" />
          <col style="width: 38%" />
        </colgroup>
        <tbody>
          <tr>
            <th class="left">신청구분</th>
            <td class="left">청산</td>
            <!--<td class="left"><span class="error">발행취소</span></td>-->
            <th class="left">신청일</th>
            <td class="left">2024.04.24</td>
          </tr>
          <tr>
            <th class="left">최종 승인결과</th>
            <td class="left"><span class="blue">승인</span>(2024.05.03)</td>
            <th class="left">토큰증권상태값</th>
            <td class="left">청산대기</td>
          </tr>
          <!-- 신청구분 : 발행취소 일 때 보여줌 -->
          <tr>
            <th class="left">사유</th>
            <td colspan="3">
              <label>
                <textarea placeholder="없음" readonly class="w100" value="음"></textarea>
              </label>
            </td>
          </tr>
        </tbody>
      </table>
    </article>

    <article role="contents" title="발행인정보">
      <hgroup class="ttl">
        <h3 class="ttl">발행인정보</h3>
        <h4 class="ttl">1. 대표발행인</h4>
      </hgroup>

      <table class="noline mb40">
        <colgroup>
          <col style="width: 12%" />
          <col style="width: 38%" />
          <col style="width: 12%" />
          <col style="width: 38%" />
        </colgroup>
        <tbody>
          <tr>
            <th class="left">회사명</th>
            <td class="left">가나다 주식회사</td>
            <th class="left">대표자명</th>
            <td class="left">가나다</td>
          </tr>
          <tr>
            <th class="left">사업자번호</th>
            <td class="left">123-45-67890</td>
            <th class="left">법인등록번호</th>
            <td class="left">123456-1234567</td>
          </tr>
        </tbody>
      </table>

      <hgroup class="ttl">
        <h4 class="ttl">2. 공동발행인</h4>
      </hgroup>

      <table class="noline mb40">
        <colgroup>
          <col style="width: 12%" />
          <col style="width: 38%" />
          <col style="width: 12%" />
          <col style="width: 38%" />
        </colgroup>
        <tbody>
          <tr>
            <th class="left">회사명</th>
            <td class="left">가나다 주식회사</td>
            <th class="left">사업자번호</th>
            <td class="left">123-45-67890</td>
          </tr>
        </tbody>
      </table>
    </article>

    <article role="contents" title="토큰증권정보">
      <hgroup class="ttl">
        <h3 class="ttl">토큰증권정보</h3>
        <h4 class="ttl">1. 공모개요</h4>
      </hgroup>

      <table class="noline mb40">
        <colgroup>
          <col style="width: 12%" />
          <col style="width: 38%" />
          <col style="width: 12%" />
          <col style="width: 38%" />
        </colgroup>
        <tbody>
          <tr>
            <th class="left">토큰증권명</th>
            <td class="left" colspan="3">기초자산 투자계약증권</td>
          </tr>
          <tr>
            <th class="left">증권종류</th>
            <td>투자계약증권</td>
            <th class="left">
              <span>종목코드</span>
              <p>(증권표준코드)</p>
            </th>

            <td>KR1234567890</td>
          </tr>
          <tr>
            <th class="left">모집(매출)방법</th>
            <td class="left">일반공모</td>
            <th class="left">증권수량</th>
            <td class="left">500,000 주</td>
          </tr>
          <tr>
            <th class="left">액면가액</th>
            <td class="left">100,000 원</td>
            <th class="left">모집(매출)가액</th>
            <td class="left">100,000 원</td>
          </tr>
          <tr>
            <th class="left">모집(매출)총액</th>
            <td class="left">500,000,000 원</td>
            <th class="left">최종 승인결과</th>
            <td class="left">
              <span class="error">거절</span>(2024.04.30)<button
                type="button"
                class="mediumLine ml6"
              >
                거절사유
              </button>
            </td>
          </tr>
          <tr>
            <th class="left">증권신고일</th>
            <td class="left">2024.04.23</td>
            <th class="left">배정기간</th>
            <td class="left">2024.05.01 ~ 05.15</td>
          </tr>
          <tr>
            <th class="left">청약공고일</th>
            <td class="left">2024.05.01</td>
            <th class="left">배정공고일</th>
            <td class="left">2024.05.16</td>
          </tr>
          <tr>
            <th class="left">배정 및 환불공고일</th>
            <td class="left">2024.05.16</td>
          </tr>
          <tr>
            <th class="left">권리내용</th>
            <td colspan="3">
              <label>
                <textarea placeholder="없음" readonly class="w100" value="음"></textarea>
              </label>
            </td>
          </tr>
        </tbody>
      </table>

      <hgroup class="ttl">
        <h4 class="ttl">2. 배정대상자 유형별 공모대상 증권 수</h4>
      </hgroup>

      <table class="chart mb40">
        <colgroup>
          <col style="width: 20%" />
          <col style="width: 20%" />
          <col style="width: 20%" />
          <col style="width: 20%" />
          <col style="width: 20%" />
        </colgroup>
        <thead>
          <tr>
            <th class="center">구분</th>
            <th class="center">증권수</th>
            <th class="center">배정비율</th>
            <th class="center">주당공모가액</th>
            <th class="center">모집(매출)총액</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="center">일반배정이자</td>
            <td class="right">9,252 주</td>
            <td class="right">90%</td>
            <td class="right" rowspan="2">100,000 원</td>
            <td class="right">952,200,000 원</td>
          </tr>
          <tr>
            <td class="center">공동사업 운영자</td>
            <td class="right">1,028 주</td>
            <td class="right">10%</td>
            <td class="right">102,800,000 원</td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td class="center">합계</td>
            <td class="right">10,280 주</td>
            <td class="right">100%</td>
            <td class="right">&nbsp;</td>
            <td class="right">1,028,000,000 원</td>
          </tr>
        </tfoot>
      </table>

      <hgroup class="ttl">
        <h4 class="ttl">3. 추가정보</h4>
      </hgroup>

      <table class="noline">
        <colgroup>
          <col style="width: 12%" />
          <col style="width: 38%" />
          <col style="width: 12%" />
          <col style="width: 38%" />
        </colgroup>
        <tbody>
          <tr>
            <th class="left">증권신고서공시url</th>
            <td class="left">
              <a href="javascript:void(0);">httpsL//dart.fss.or.kr/dsaf001/main.do?rcpNo=#</a>
            </td>
            <th class="left">투자설명서공시url</th>
            <td class="left">
              <a href="javascript:void(0);">httpsL//dart.fss.or.kr/dsaf003/mainG.do</a>
            </td>
          </tr>
          <tr>
            <th class="left">증권신고서</th>
            <td class="left"><a href="javascript:void(0);">증권신고서.pdf</a></td>
            <th class="left">확정투자자명부</th>
            <td class="left">
              <span>총량일치</span><button type="button" class="mediumLine ml6">명부확인</button>
            </td>
          </tr>
          <tr>
            <th class="left vaTop">청산증빙자료</th>
            <td class="left">
              <a href="javascript:void(0);">증권신고서.pdf</a><br />
              <a href="javascript:void(0);">증권신고서.pdf</a>
            </td>
            <th class="left">청산대리인명</th>
            <td class="left">청산법무법인</td>
          </tr>
        </tbody>
      </table>
    </article>

    <article role="contents" class="mb0" title="계좌기관정보">
      <hgroup class="ttl">
        <h3 class="ttl">계좌기관정보</h3>
      </hgroup>

      <table class="chart">
        <colgroup>
          <col style="width: 25%" />
          <col style="width: 25%" />
          <col style="width: 25%" />
          <col style="width: 25%" />
        </colgroup>
        <thead>
          <tr>
            <th class="center">계좌관리기관명</th>
            <th class="center">할당 발행토큰 수량</th>
            <th class="center">확정투자자수</th>
            <th class="center">승인결과</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="center">NH농협은행</td>
            <td class="right">9,252 주</td>
            <td class="right">100 명</td>
            <td class="center">-</td>
          </tr>
          <tr>
            <td class="center">NH저축은행</td>
            <td class="right">1,028 주</td>
            <td class="right">100 명</td>
            <td class="center"><span class="blue">승인</span>(2024.04.02)</td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td class="center">합계</td>
            <td class="center">10,280 주</td>
            <td class="center">200 명</td>
            <td class="center">&nbsp;</td>
          </tr>
        </tfoot>
      </table>
      <!--//cautionBlue-->
    </article>

    <footer class="bottomBtnArea" role="mainFooter">
      <button type="button" class="largeLine">목록</button>
      <button type="button" class="large">처리</button>
      <!-- 신청구분 : 발행취소 일 때 아래 버튼 보여줌 -->
      <button type="button" class="large">발행취소</button>
    </footer>
  </main>
</template>

<script>
export default {}
</script>

<style></style>
