<template>
    <main role="main">
  <table style="border-collapse: collapse; width: 100%; margin-bottom: 10rem;" caption="elements" class="out">
            <colgroup>
                <col style="width: 150px;"/>
                <col style="width: 360px"/>
                <col style="width: 150px;"/>
                <col style="width: 360px"/>
            </colgroup>
            <tbody>
                <tr>
                    <th>selectbox - default</th>
                    <td>
                        <div class="selectBox" style="width:100%;">
                            <button type="button">선택해주세요.</button>
                            <ul>
                                <li>option name1</li>
                                <li>option name2</li>
                                <li>option name3</li>
                            </ul>
                        </div>
                    </td>
                    <th>&nbsp;</th>
                    <td>
                        &nbsp;
                    </td>
                </tr>
                
                <tr>
                    <th>input - default</th>
                    <td>
                        <label> 
                            <input type="text" value="기본"  style="width:100%;"/>
                        </label>
                    </td>
                    <th>input - readonly</th>
                    <td><label> 
                        <input type="text" value="읽기전용"  readonly style="width:100%;"/>
                    </label></td>
                </tr>
                
                <tr>
                    <th>input - disabled</th>
                    <td>
                        <label> 
                            <input type="text" value="비활성"  disabled style="width:100%;"/>
                        </label>
                    </td>
                    <th>&nbsp;</th>
                    <td>
                        &nbsp;
                    </td>
                </tr>
                <tr>
                    <th>input - edit</th>
                    <td colspan="3">
                        <label class="edit">
                            <input type="text" style="width:100%" value="9,252"/>
                            <button type="button" class="del"></button>
                        </label>
                    </td>
                </tr>

                <tr>
                    <th>input - error</th>
                    <td>
                        <label> 
                            <input type="text" value="틀렸습니다."   class="required error" style="width:100%;"/>
                            <p class="feedback">*아이디를 입력해주세요.</p>
                        </label>
                    </td>
                    <th>input - correct</th>
                    <td>
                        <label> 
                            <input type="text" value="맞습니다."   class="required correct" style="width:100%;"/>
                            <p class="feedback">맞습니다.</p>
                        </label>
                    </td>
                </tr>

                <tr>
                    <th>textarea - default</th>
                    <td>
                        <label>
                            <textarea placeholder="내용을 입력해주세요." style="width:100%;"></textarea>
                        </label>
                    </td>
                    <th>&nbsp;</th>
                    <td>
                        &nbsp;
                    </td>
                </tr>

                
                <tr>
                    <th>datePicker default</th>
                    <td>
                        <div class="datePickerWrap">
                            <div class="datePicker">
                                YYYY-MM-DD
                                <button type="button" class="cal"></button>
                            </div>
                        </div>
                    </td>
                    <th>&nbsp;</th>
                    <td>
                        &nbsp;
                    </td>
                </tr>

                <tr>
                    <th>fileUpload - default</th>
                    <td>
                        <div class="fileUpload">
                            <label class="dot"></label>
                            <label for="fileSelect">파일 선택</label>
                            <input type="file" id="fileSelect"/>
                            <input class="fileName" value="" placeholder="파일을 선택해주세요."/>
                        </div>
                    </td>
                    <th>fileUpload - disabled</th>
                    <td>
                        <div class="fileUpload disabled">
                            <label class="dot"></label>
                            <label for="fileSelect2">파일 선택</label>
                            <input type="file" id="fileSelect2" disabled/>
                            <input class="fileName" value="파일명파일명파일명.pdf" placeholder="파일을 선택해주세요."/>
                        </div>
                    </td>
                </tr>

                

                <tr>
                    <th>radio button</th>
                    <td>
                        <input type="radio"  name="abc" id="abc1"/> 
                        <label for="abc1">속성1</label>
            
                        <input type="radio" name="abc" id="abc2" checked/> 
                        <label for="abc2">속성2</label>
            
                        <input type="radio" disabled name="abc" id="abc3"/> 
                        <label for="abc3">속성3</label>
                    </td>
                    <th>checkbox</th>
                    <td>
                        <input type="checkbox"  name="ab" id="ab4" checked/> 
                        <label for="ab4">속성1</label>

                        <input type="checkbox" name="ab" id="ab5"/> 
                        <label for="ab5">속성2</label>

                        <input type="checkbox" disabled name="ab" id="ab6"/> 
                        <label for="ab6">속성3</label>
                    </td>
                </tr>
              

                

                <tr>
                    <th>large button</th>
                    <td>
                        <button type="button" class="large">버튼</button>
                    </td>
                    <th>large line button</th>
                    <td>
                        <button type="button" class="largeLine">버튼</button>
                    </td>
                </tr>

                <tr>
                    <th>large button - disabled</th>
                    <td>
                        <button type="button" class="large" disabled>버튼</button>
                    </td>
                    <th>&nbsp;</th>
                    <td>&nbsp;</td>
                </tr>

                <tr>
                    <th>medium button</th>
                    <td>
                        <button type="button" class="medium">버튼</button>
                    </td>
                    <th>medium line button</th>
                    <td>
                        <button type="button" class="mediumLine">버튼</button>
                    </td>
                </tr>

                <tr>
                    <th>medium button - disabled</th>
                    <td>
                        <button type="button" class="medium" disabled>버튼</button>
                    </td>
                    <th>&nbsp;</th>
                    <td>&nbsp;</td>
                </tr>

                <tr>
                    <th>small button</th>
                    <td>
                        <button type="button" class="small">버튼</button>
                    </td>
                    <th>small line button</th>
                    <td>
                        <button type="button" class="smallLine">버튼</button>
                    </td>
                </tr>

                <tr>
                    <th>링크</th>
                    <td colspan="3"><a href="javascript:void(0);" class="txtLink">텍스트링크</a></td>
                </tr>
                </tbody>

                <tbody title="gnb lnb">
                <tr>
                  <td colspan="4">
             
        <br/><br/>
        <div class="wrap">
            <main>
                <nav class="depth2">
                    <a href="javascript:void(0);" class="current">토큰증권 발행</a>
                    <a href="javascript:void(0);">토큰증권 청약</a>
                    <a href="javascript:void(0);">토큰증권 청산</a>
                </nav>
            </main>
        </div>


        <nav class="path">
            <a href="javascript:void(0);" class="home">홈 ></a>
            <a href="javascript:void(0);" class="depth">1depth ></a>
            <a href="javascript:void(0);" class="depth">2depth</a>
        </nav>

                  </td>
                </tr>

                
            </tbody>


            <tbody title="tables" class="none">
              <tr>
                <td colspan="4">

                  <div class="search" style="width:100rem">
                    <table>
                        <colgroup>
                            <col style="width: 12%;"/>
                            <col style="width: 38%;"/>
                            <col style="width: 12%;"/>
                            <col style="width: 38%;"/>
                        </colgroup>
                        <tbody>
                            <tr>
                                <th scope="row">항목 검색</th>
                                <td colspan="3">
                                    <input type="text" value="기본" style="width:calc(100% - 6rem);"  />
                                    <button type="button" class="mediumLine" onclick="popupOpen('buttonc')">조회</button>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">항목 선택</th>
                                <td colspan="3">
                                    <input type="radio"  name="abc" id="abc1"/> 
                                    <label for="abc1">속성1</label>

                                    <input type="radio" name="abc" id="abc2"/> 
                                    <label for="abc2">속성2</label>

                                    <input type="radio" disabled name="abc" id="abc3"/> 
                                    <label for="abc3">속성3</label>

                                    <input type="radio" name="abc" id="abc4" checked/> 
                                    <label for="abc4">속성4</label>

                                    <input type="radio" name="abc" id="abc5"/> 
                                    <label for="abc5">속성5</label>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">항목 선택</th>
                                <td>
                                    <div class="selectBox" style="width: inherit;" >
                                        <button type="button">선택해주세요.</button>
                                        <ul>
                                            <li>option name1</li>
                                            <li>option name2</li>
                                            <li>option name3</li>
                                        </ul>
                                    </div>
                                </td>
                                <th scope="row">항목 선택</th>
                                <td>
                                    <div class="selectBox" style="width: inherit;">
                                        <button type="button">선택해주세요.</button>
                                        <ul>
                                            <li>option name1</li>
                                            <li>option name2</li>
                                            <li>option name3</li>
                                        </ul>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="searchBtnArea" style="width:100rem;">
                    <button type="button" class="small" onclick="popupOpen('buttond')">검색</button>
                    <button type="button" class="smallLine">초기화</button>
                </div>

                <hgroup class="ttl" style="width: 100rem;">
                    <h3 class="ttl">목록제목</h3>
                    <h5>총 20건</h5>
                </hgroup>
                <table class="vertical" style="width:100rem;">
                    <colgroup>
                        <col style="width:10%"/>
                        <col style="width:60%"/>
                        <col style="width:15%"/>
                        <col style="width:15%"/>
                    </colgroup>
                    <thead>
                        <tr>
                            <th scope="col">순번</th>
                            <th scope="col">제목</th>
                            <th scope="col">작성일</th>
                            <th scope="col">조회수</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="center">10</td>
                            <td><a href="javascript:void(0);">목록의 제목입니다.목록의 제목입니다.목록의 제목입니다.목록의 제목입니다.목록의 제목입니다.</a></td>
                            <td class="center">2024-02-22</td>
                            <td class="center">159</td>
                        </tr>
                        <tr>
                            <td class="center">9</td>
                            <td>목록의 제목입니다.목록의 제목입니다.목록의 제목입니다.목록의 제목입니다.목록의 제목입니다.</td>
                            <td class="center">2024-02-22</td>
                            <td class="center">159</td>
                        </tr>
                        <tr>
                            <td class="center">8</td>
                            <td>목록의 제목입니다.목록의 제목입니다.목록의 제목입니다.목록의 제목입니다.목록의 제목입니다.</td>
                            <td class="center">2024-02-22</td>
                            <td class="center">159</td>
                        </tr>
                        <tr>
                            <td class="center">7</td>
                            <td>목록의 제목입니다.목록의 제목입니다.목록의 제목입니다.목록의 제목입니다.목록의 제목입니다.</td>
                            <td class="center">2024-02-22</td>
                            <td class="center">159</td>
                        </tr>
                        <tr>
                            <td class="center">6</td>
                            <td>목록의 제목입니다.목록의 제목입니다.목록의 제목입니다.목록의 제목입니다.목록의 제목입니다.</td>
                            <td class="center">2024-02-22</td>
                            <td class="center">159</td>
                        </tr>
                        <tr>
                            <td class="center">5</td>
                            <td>목록의 제목입니다.목록의 제목입니다.목록의 제목입니다.목록의 제목입니다.목록의 제목입니다.목록의 제목입니다.목록의 제목입니다.목록의 제목입니다.목록의 제목입니다.목록의 제목입니다.</td>
                            <td class="center">2024-02-22</td>
                            <td class="center">159</td>
                        </tr>
                        <tr>
                            <td class="center">4</td>
                            <td>목록의 제목입니다.목록의 제목입니다.목록의 제목입니다.목록의 제목입니다.목록의 제목입니다.</td>
                            <td class="center">2024-02-22</td>
                            <td class="center">159</td>
                        </tr>
                        <tr>
                            <td class="center">3</td>
                            <td>목록의 제목입니다.목록의 제목입니다.목록의 제목입니다.목록의 제목입니다.목록의 제목입니다.</td>
                            <td class="center">2024-02-22</td>
                            <td class="center">159</td>
                        </tr>
                        <tr>
                            <td class="center">2</td>
                            <td>목록의 제목입니다.목록의 제목입니다.목록의 제목입니다.목록의 제목입니다.목록의 제목입니다.</td>
                            <td class="center">2024-02-22</td>
                            <td class="center">159</td>
                        </tr>
                        <tr>
                            <td class="center">1</td>
                            <td>목록의 제목입니다.목록의 제목입니다.목록의 제목입니다.목록의 제목입니다.목록의 제목입니다.</td>
                            <td class="center">2024-02-22</td>
                            <td class="center">159</td>
                        </tr>
                    </tbody>
                </table>
        

                <nav class="page" style="width:100rem;">
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



                <table class="vertical type2" style="width:100rem;">
                    <colgroup>
                        <col style="width:10%"/>
                        <col style="width:60%"/>
                        <col style="width:15%"/>
                        <col style="width:15%"/>
                    </colgroup>
                    <thead>
                        <tr>
                            <th scope="col">순번</th>
                            <th scope="col">제목</th>
                            <th scope="col">작성일</th>
                            <th scope="col">조회수</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="center">10</td>
                            <td><a href="javascript:void(0);">목록의 제목입니다.목록의 제목입니다.목록의 제목입니다.목록의 제목입니다.목록의 제목입니다.</a></td>
                            <td class="center">2024-02-22</td>
                            <td class="center">159</td>
                        </tr>
                        <tr>
                            <td class="center">9</td>
                            <td>목록의 제목입니다.목록의 제목입니다.목록의 제목입니다.목록의 제목입니다.목록의 제목입니다.</td>
                            <td class="center">2024-02-22</td>
                            <td class="center">159</td>
                        </tr>
                        <tr>
                            <td class="center">8</td>
                            <td>목록의 제목입니다.목록의 제목입니다.목록의 제목입니다.목록의 제목입니다.목록의 제목입니다.</td>
                            <td class="center">2024-02-22</td>
                            <td class="center">159</td>
                        </tr>
                        <tr>
                            <td class="center">7</td>
                            <td>목록의 제목입니다.목록의 제목입니다.목록의 제목입니다.목록의 제목입니다.목록의 제목입니다.</td>
                            <td class="center">2024-02-22</td>
                            <td class="center">159</td>
                        </tr>
                        <tr>
                            <td class="center">6</td>
                            <td>목록의 제목입니다.목록의 제목입니다.목록의 제목입니다.목록의 제목입니다.목록의 제목입니다.</td>
                            <td class="center">2024-02-22</td>
                            <td class="center">159</td>
                        </tr>
                        <tr>
                            <td class="center">5</td>
                            <td>목록의 제목입니다.목록의 제목입니다.목록의 제목입니다.목록의 제목입니다.목록의 제목입니다.목록의 제목입니다.목록의 제목입니다.목록의 제목입니다.목록의 제목입니다.목록의 제목입니다.</td>
                            <td class="center">2024-02-22</td>
                            <td class="center">159</td>
                        </tr>
                        <tr>
                            <td class="center">4</td>
                            <td>목록의 제목입니다.목록의 제목입니다.목록의 제목입니다.목록의 제목입니다.목록의 제목입니다.</td>
                            <td class="center">2024-02-22</td>
                            <td class="center">159</td>
                        </tr>
                        <tr>
                            <td class="center">3</td>
                            <td>목록의 제목입니다.목록의 제목입니다.목록의 제목입니다.목록의 제목입니다.목록의 제목입니다.</td>
                            <td class="center">2024-02-22</td>
                            <td class="center">159</td>
                        </tr>
                        <tr>
                            <td class="center">2</td>
                            <td>목록의 제목입니다.목록의 제목입니다.목록의 제목입니다.목록의 제목입니다.목록의 제목입니다.</td>
                            <td class="center">2024-02-22</td>
                            <td class="center">159</td>
                        </tr>
                        <tr>
                            <td class="center">1</td>
                            <td>목록의 제목입니다.목록의 제목입니다.목록의 제목입니다.목록의 제목입니다.목록의 제목입니다.</td>
                            <td class="center">2024-02-22</td>
                            <td class="center">159</td>
                        </tr>
                    </tbody>
                </table>


                <hgroup class="ttl" style="width: 100rem;">
                    <h3 class="ttl">입력폼 제목</h3>
                    <h6>● 표시는 필수 입력 항목입니다.</h6>
                </hgroup>
                <table class="horizontal" style="width:100rem;">
                    <colgroup>
                        <col style="width:10%;"/>
                        <col style="width:40%;"/>
                        <col style="width:10%;"/>
                        <col style="width:40%;"/>
                    </colgroup>
                    <tbody>
                        <tr>
                            <th scope="row" class="left required"><span>제목</span></th>
                            <td>
                                <label> 
                                    <input type="text" value="기본" style="width: 100%;" />
                                </label>
                            </td>
                            <th scope="row" class="left required"><span>항목 선택</span></th>
                            <td>
                                <input type="radio"  name="abc" id="abc1"/> 
                                <label for="abc1">속성1</label>

                                <input type="radio" name="abc" id="abc2"/> 
                                <label for="abc2">속성2</label>

                                <input type="radio" disabled name="abc" id="abc3"/> 
                                <label for="abc3">속성3</label>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row" class="left required"><span>제목제목</span></th>
                            <td>
                                <label> 
                                    <input type="text" value="기본" style="width: 100%;" />
                                </label>
                            </td>
                            <th scope="row" class="left required"><span>파일 첨부</span></th>
                            <td>
                                <div class="fileUpload">
                                    <label class="dot"></label>
                                    <input class="fileName" value="" placeholder="파일을 선택해주세요."/>
                                    <label for="fileSelect">파일 선택</label>
                                    <input type="file" id="fileSelect"/>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <th class="left required"><span>필수 선택</span></th>
                            <td>
                                <div class="selectBox w100">
                                    <button type="button">선택해주세요.</button>
                                    <ul>
                                        <li>option name1</li>
                                        <li>option name2</li>
                                        <li>option name3</li>
                                    </ul>
                                </div>
                            </td>
                            <th class="left required"><span>항목 선택</span></th>
                            <td>
                                <input type="checkbox"  name="ab" id="ab4"/> 
                                <label for="ab4">속성1</label>

                                <input type="checkbox" name="ab" id="ab5"/> 
                                <label for="ab5">속성2</label>

                                <input type="checkbox" disabled name="ab" id="ab6"/> 
                                <label for="ab6">속성3</label>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div class="bottomBtnArea" style="width: 100rem;">
                    <button type="button" class="large" onclick="progress('save')">수정</button>
                <button type="button" class="largeLine">이전</button>
                </div>



                <hgroup class="ttl" style="width: 100rem;">
                    <h3 class="ttl">차트 테이블</h3>
                </hgroup>
                <table class="chart" style="width:100rem;">
                    <colgroup>
                        <col style="width:20%;"/>
                        <col style="width:20%;"/>
                        <col style="width:20%;"/>
                        <col style="width:10%;"/>
                        <col style="width:30%;"/>
                    </colgroup>
                    <thead>
                        <tr>
                            <th>항목명</th>
                            <th>항목명</th>
                            <th>항목명</th>
                            <th>항목명</th>
                            <th>항목명</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="center">일반배정이자</td>
                            <td class="right">
                               <input type="text" value="1,028"  style="width:90%;" class="right"/>
                                <span class="inline ml4">주</span>
                            </td>
                            <td>
                                <label class="edit">
                                    <input type="text" style="width:100%" value="9,252"/>
                                    <button type="button" class="del"></button>
                                </label>
                            </td>
                            <td class="center">
                                <span class="addDelWrap">
                                    <button type="button" class="add"></button>
                                    <button type="button" class="del"></button>
                                </span>
                            </td>
                            <td class="right">
                                <span class="inline"><span class="error">거절</span>(2024.04.02)</span>
                                <button type="button" class="medium ml4">거절사유</button>
                            </td>
                        </tr>
                    </tbody>
                    <tfoot>
                        <tr>
                            <th>합계</th>
                            <td>1,028주</td>
                            <td>200명</td>
                            <td>100명</td>
                            <td>&nbsp;</td>
                        </tr>
                    </tfoot>
                </table>


                <div class="cardListWrap2">
                    <div class="cardList">
                        <span class="list labelYellow">발행</span>

                        <table class="con">
                            <colgroup>
                                <col style="width:30%;"/>
                                <col style="width:70%;"/>
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
                                <tr>
                                    <th class="left">&nbsp;</th>
                                    <td class="left">&nbsp;</td>
                                </tr>
                            </tbody>
                        </table>
                    </div><!--E:cardList-->

                    <div class="cardList">
                        <span class="list labelGreen">배정</span>

                        <table class="con">
                            <colgroup>
                                <col style="width:30%;"/>
                                <col style="width:70%;"/>
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
                                <tr>
                                    <th class="left">최종승인</th>
                                    <td class="left">2024.04.04</td>
                                </tr>
                                <tr>
                                    <th class="left">최종승인</th>
                                    <td class="left">2024.05.12</td>
                                </tr>
                            </tbody>
                        </table>
                    </div><!--E:cardList-->

                    <div class="cardList">
                        <span class="list labelGray">청산</span>

                        <table class="con">
                            <colgroup>
                                <col style="width:30%;"/>
                                <col style="width:70%;"/>
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
                                <tr>
                                    <th class="left">&nbsp;</th>
                                    <td class="left">&nbsp;</td>
                                </tr>
                            </tbody>
                        </table>
                    </div><!--E:cardList-->

                    <div class="cardList">
                        <span class="list labelBlue">취소/수정</span>

                        <table class="con">
                            <colgroup>
                                <col style="width:30%;"/>
                                <col style="width:70%;"/>
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
                                <tr>
                                    <th class="left">&nbsp;</th>
                                    <td class="left">&nbsp;</td>
                                </tr>
                                <tr>
                                    <th class="left">&nbsp;</th>
                                    <td class="left">&nbsp;</td>
                                </tr>
                            </tbody>
                        </table>
                    </div><!--E:cardList-->
                </div><!--E:cardListWrap2-->
                

                <div class="agreeBox">
                    <p>
                        본 증권토큰 발행에 대한 정보는 발행인이 직접 입력하므로 입력한 내용에 따른 책임은 발행인에게 있음을 알려드립니다.<br/>
                        발행신청 후 계좌관리기관의 승인이 완료될 경우 발행이 진행되며 부적합 판정 시 부결 및 거절될 수 있습니다.<br/>
                        신청내역은 <a href="javascript:void(0);">토큰증권 신청내역</a>메뉴에서 확인할 수 있습니다.
                    </p>
                    <input type="checkbox" name="agree" id="agree"><label for="agree">내용을 확인하였습니다</label>
                </div>

                </td>
              </tr>
            </tbody>



            <tbody title="popup" class="none">
                <tr>
                  <td colspan="4">
                    <div class="popup" id="buttond" style="width:50rem;">
            <button class="close" onclick="popupClose('buttond')"></button>
            <h1>팝업제목입니다.</h1>
            <div>
                팝업 내용입니다. 팝업 내용입니다. 팝업내용입니다.팝업 내용입니다. 팝업내용입니다.<br/>
                팝업 내용입니다. 팝업내용입니다.팝업 내용입니다. 팝업내용입니다.
                팝업 내용입니다. 팝업 내용입니다. 팝업내용입니다.팝업 내용입니다. 팝업내용입니다.<br/>
                팝업 내용입니다. 팝업내용입니다.팝업 내용입니다. 팝업내용입니다.
                팝업 내용입니다. 팝업 내용입니다. 팝업내용입니다.팝업 내용입니다. 팝업내용입니다.<br/>
                팝업 내용입니다. 팝업내용입니다.팝업 내용입니다. 팝업내용입니다.
                팝업 내용입니다. 팝업 내용입니다. 팝업내용입니다.팝업 내용입니다. 팝업내용입니다.<br/>
                팝업 내용입니다. 팝업내용입니다.팝업 내용입니다. 팝업내용입니다.
            </div>
            <div class="btnArea">
                <button type="button" class="line" onclick="popupClose('buttonc')">팝업 버튼입니다.</button>
                <button type="button" onclick="popupOpen('buttonc')">팝업 버튼입니다.</button>
            </div>
        </div>


        <div class="popup" id="buttonc" style="width:30rem;">
            <button class="close" onclick="popupClose('buttonc')"></button>
            <h1>팝업제목입니다.</h1>
            <div>
                팝업 내용입니다. 팝업 내용입니다. 팝업내용입니다.팝업 내용입니다. 팝업내용입니다.<br/>
                팝업 내용입니다. 팝업내용입니다.팝업 내용입니다. 팝업내용입니다.
            </div>
            <div class="btnArea">
                <button type="button">팝업 버튼입니다.</button>
            </div>
        </div>

        <div class="progressWrap" id="save">
            <label for="saveLoading">저장 중입니다...</label>
            <progress id="saveLoading" max="100" value="0"></progress>
        </div>

                  </td>
                </tr>
            </tbody>
        </table>
    </main>

</template>

<script>
export default {

}
</script>

<style>

</style>