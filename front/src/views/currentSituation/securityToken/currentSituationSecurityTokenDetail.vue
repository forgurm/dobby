<template>
  <header role="mainHeader">
    <h1 class="ttl">토큰증권 현황상세</h1>
    <nav class="path">
      <a href="javascript:void(0);" class="home">홈 > </a>
      <a href="javascript:void(0);" class="depth">&nbsp;현황 ></a>
      <a href="javascript:void(0);" class="depth">&nbsp;상세</a>
    </nav>
  </header>

  <div class="statusBox">가나다 토큰증권 / 배정진행</div>
  <!--//E:statusBox-->
  <article role="contents" class="mb40" title="발행인정보">
    <hgroup class="ttl">
      <h3 class="ttl">발행인정보</h3>
      <h4 class="ttl">1.대표발행인</h4>
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
          <td class="left"><a href="javascript:void(0);">가나다 주식회사</a></td>
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

    <table class="noline">
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

  <article role="contents" class="mb40" title="토큰증권정보">
    <hgroup class="ttl">
      <h3 class="ttl">토큰증권정보</h3>
      <h4 class="ttl">1.공모개요</h4>
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
          <td class="left">투자계약증권</td>
          <th class="left">종목코드<br /><sub>(증권표준코드)</sub></th>
          <td class="left">123456-1234567</td>
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
          <th class="left">증권신고일</th>
          <td class="left">2024.04.23</td>
        </tr>
        <tr>
          <th class="left">배정기간</th>
          <td class="left">2024.05.01 ~ 05.15</td>
          <th class="left">배정공고일</th>
          <td class="left">2024.05.01</td>
        </tr>
        <tr>
          <th class="left">청약공고일</th>
          <td class="left">2024.05.16</td>
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
        <col style="width: 15%" />
        <col style="width: 25%" />
        <col style="width: 10%" />
        <col style="width: 25%" />
        <col style="width: 25%" />
      </colgroup>
      <thead>
        <tr>
          <th>구분</th>
          <th>증권수</th>
          <th>배정비율</th>
          <th>주당공모가액</th>
          <th>모집(매출)총액</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="center">일반배정이자</td>
          <td class="right">9,252 주</td>
          <td class="right">90%</td>
          <td class="right" rowspan="2">100,000 원</td>
          <td class="right">9,925,200,000 원</td>
        </tr>
        <tr>
          <td class="center">일반배정이자</td>
          <td class="right">9,252 주</td>
          <td class="right">90%</td>
          <td class="right">9,925,200,000 원</td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td class="center">합계</td>
          <td class="right">10,280 주</td>
          <td class="right">100%</td>
          <td>&nbsp;</td>
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
            <a href="javascript:void(0);">httpsL//dart.fss.or.kr/dsaf001/main.do?rcpNo=#</a>
          </td>
        </tr>
        <tr>
          <th class="left">증권신고서</th>
          <td class="left"><a href="javascript:void(0);">증권신고서.pdf</a></td>
          <th class="left">확정투자자명부</th>
          <td class="left">
            <button type="button" class="mediumLine">명부확인</button>
          </td>
        </tr>
        <tr>
          <th class="left vaTop">청산증빙자료</th>
          <td class="left">
            <a href="javascript:void(0);">청산증빙자료001.pdf</a><br />
            <a href="javascript:void(0);">청산증빙자료001.pdf</a>
          </td>
          <th class="left">청산대리인명</th>
          <td class="left">청산법무법인</td>
        </tr>
      </tbody>
    </table>
  </article>

  <article role="contents" class="mb40" title="계좌기관정보">
    <hgroup class="ttl">
      <h3 class="ttl">계좌기관정보</h3>
    </hgroup>

    <table class="chart">
      <colgroup>
        <col style="width: 30%" />
        <col style="width: 35%" />
        <col style="width: 35%" />
      </colgroup>
      <thead>
        <tr>
          <th>계좌관리기관명</th>
          <th>할당 발행토큰 수량</th>
          <th>확정투자자수</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="center"><a href="javascript:void(0);">NH농협은행</a></td>
          <td class="right">9,252 주</td>
          <td class="right">100 명</td>
        </tr>
        <tr>
          <td class="center"><a href="javascript:void(0);">NH저축은행</a></td>
          <td class="right">1,028 주</td>
          <td class="right">100 명</td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td class="center">합계</td>
          <td class="right">10,280 주</td>
          <td class="right">200 명</td>
        </tr>
      </tfoot>
    </table>
  </article>

  <article role="contents" class="mb0" title="신청이력">
    <hgroup class="ttl">
      <h3 class="ttl">신청이력</h3>
    </hgroup>

    <div class="cardListWrap2">
      <div class="cardList">
        <span class="list applicationHistory labelYellow mb20">발행</span>
        <table class="con">
          <colgroup>
            <col style="width: 30%" />
            <col style="width: 70%" />
          </colgroup>
          <tbody>
            <tr>
              <th class="left">신청</th>
              <td class="left">2024.04.01</td>
            </tr>
            <tr>
              <th class="left">최종승인</th>
              <td class="left">2024.05.12</td>
            </tr>
            <tr>
              <th class="left">발행완료</th>
              <td class="left">2024.04.04</td>
            </tr>
          </tbody>
        </table>
      </div>
      <!--//E:cardList-->

      <div class="cardList">
        <span class="list applicationHistory labelGreen mb20">배정</span>
        <table class="con">
          <colgroup>
            <col style="width: 30%" />
            <col style="width: 70%" />
          </colgroup>
          <tbody>
            <tr>
              <th class="left">신청</th>
              <td class="left">2024.04.01</td>
            </tr>
            <tr>
              <th class="left">거절</th>
              <td class="left">
                2024.05.12
                <button type="button" class="mediumLine ml4">거절사유</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <!--//E:cardList-->

      <div class="cardList">
        <span class="list applicationHistory labelGray mb20">청산</span>
        <table class="con">
          <colgroup>
            <col style="width: 30%" />
            <col style="width: 70%" />
          </colgroup>
          <tbody>
            <tr>
              <th class="left">신청</th>
              <td class="left">2024.04.01</td>
            </tr>
            <tr>
              <th class="left">최종승인</th>
              <td class="left">2024.05.12</td>
            </tr>
            <tr>
              <th class="left">처리완료</th>
              <td class="left">2024.05.12</td>
            </tr>
          </tbody>
        </table>
      </div>
      <!--//E:cardList-->

      <div class="cardList">
        <span class="list applicationHistory labelBlue mb20">취소</span>
        <table class="con">
          <colgroup>
            <col style="width: 30%" />
            <col style="width: 70%" />
          </colgroup>
          <tbody>
            <tr>
              <th class="left">취소신청</th>
              <td class="left">
                2024.04.03
                <button type="button" class="mediumLine ml4">사유확인</button>
              </td>
            </tr>
            <tr>
              <th class="left">처리완료</th>
              <td class="left">2024.05.12</td>
            </tr>
          </tbody>
        </table>
      </div>
      <!--//E:cardList-->
    </div>
    <!--//E:cardListWrap2-->
  </article>

  <footer class="bottomBtnArea" role="mainFooter">
    <button type="button" class="largeLine">목록</button>
  </footer>
</template>

<script setup></script>

<style></style>
