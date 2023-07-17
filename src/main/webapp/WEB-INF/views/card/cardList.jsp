<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>

<%@ include file="../layout/header.jsp"%>
<div class="container mt-5">
  <form>
  <%--  
  <div class="card" style="margin-bottom: 15px;">
    <div class="card-body">
        <table>
            <tbody>
              <tr>
                <th>
                  <span class="contentFont">종류</span>
                </th>
                <td>
                  <div class="form-check">
                    <label class="form-check-label" for="cardRadio1">
                      <input type="radio" class="form-check-input" id="cardRadio1" name="cardType" value="" checked>전체
                    </label>
                  </div>
                </td>
                <td>
                  <div class="form-check">
                    <label class="form-check-label" for="cardRadio2">
                      <input type="radio" class="form-check-input" id="cardRadio2" name="cardType" value="캐릭터">캐릭터
                    </label>
                  </div>
                </td>
                <td>
                  <div class="form-check">
                    <label class="form-check-label" for="cardRadio3">
                      <input type="radio" class="form-check-input" id="cardRadio3" name="cardType" value="스펠">스펠
                    </label>
                  </div>
                </td>
                <td>
                  <div class="form-check">
                    <label class="form-check-label" for="cardRadio4">
                      <input type="radio" class="form-check-input" id="cardRadio4" name="cardType" value="추종자">추종자
                    </label>
                  </div>
                </td>
              </tr>

              <tr>
                <th>
                  <span class="contentFont">등급</span>
                </th>
                <td>
                  <div class="form-check">
                    <label class="form-check-label" for="rarityRadio1">
                      <input type="radio" class="form-check-input" id="rarityRadio1" name="rarityType" value="" checked>전체
                    </label>
                  </div>
                </td>
                <td>
                  <div class="form-check">
                    <label class="form-check-label" for="rarityRadio2">
                      <input type="radio" class="form-check-input" id="rarityRadio2" name="rarityType" value="커먼">커먼
                    </label>
                  </div>
                </td>
                <td>
                  <div class="form-check">
                    <label class="form-check-label" for="rarityRadio3">
                      <input type="radio" class="form-check-input" id="rarityRadio3" name="rarityType" value="언커먼">언커먼
                    </label>
                  </div>
                </td>
                <td>
                  <div class="form-check">
                    <label class="form-check-label" for="rarityRadio4">
                      <input type="radio" class="form-check-input" id="rarityRadio4" name="rarityType" value="슈페리어">슈페리어
                    </label>
                  </div>
                </td>
                <td>
                  <div class="form-check">
                    <label class="form-check-label" for="rarityRadio5">
                      <input type="radio" class="form-check-input" id="rarityRadio5" name="rarityType" value="더블레어">더블레어
                    </label>
                  </div>
                </td>
                <td>
                  <div class="form-check">
                    <label class="form-check-label" for="rarityRadio6">
                      <input type="radio" class="form-check-input" id="rarityRadio6" name="rarityType" value="유니크">유니크
                    </label>
                  </div>
                </td>
              </tr>

              <tr>
                <th>
                  <span class="contentFont">소속</span>
                </th>
                <td>
                  <div class="form-check">
                    <label class="form-check-label" for="teamRadio1">
                      <input type="radio" class="form-check-input" id="teamRadio1" name="teamType" value="" checked>전체
                    </label>
                  </div>
                </td>
                <td>
                  <div class="form-check">
                    <label class="form-check-label" for="teamRadio2">
                      <input type="radio" class="form-check-input" id="teamRadio2" name="teamType" value="공립">공립
                    </label>
                  </div>
                </td>
                <td>
                  <div class="form-check">
                    <label class="form-check-label" for="teamRadio3">
                      <input type="radio" class="form-check-input" id="teamRadio3" name="teamType" value="사립">사립
                    </label>
                  </div>
                </td>
                <td>
                  <div class="form-check">
                    <label class="form-check-label" for="teamRadio4">
                      <input type="radio" class="form-check-input" id="teamRadio4" name="teamType" value="크룩스">크룩스
                    </label>
                  </div>
                </td>
                <td>
                  <div class="form-check">
                    <label class="form-check-label" for="teamRadio5">
                      <input type="radio" class="form-check-input" id="teamRadio5" name="teamType" value="다크로어">다크로어
                    </label>
                  </div>
                </td>
                <td>
                  <div class="form-check">
                    <label class="form-check-label" for="teamRadio6">
                      <input type="radio" class="form-check-input" id="teamRadio6" name="teamType" value="무소속">무소속
                    </label>
                  </div>
                </td>
              </tr>
            </tbody>
        </table>
    </div>
  </div>
  --%>
  <div class="card">
    <div class="card-body">
  <input type="text" class="form-control" name="keyword" onkeyup="searchKeyword(this.value);" id="cardKeyword" placeholder="카드명 검색">
    </div>
  </div>
</form>
  
<div class="card">
  <div class="card-body">
<div id="cardFindAll" class="d-flex" style="cursor:pointer;justify-content:center;"></div>
<ul class="pagination" id="pagingGroup" style="cursor:pointer;justify-content:center;">
</ul>
  </div>
</div>


  <!-- 아래 카드 정보창 -->
  <div class="card">
    <div class="card-body">
      <div class="row">
          <div class="col-sm-4">
            <div class="bigContentFont" id="dbName">카드명</div>
            <img class="fakeimg" style="width:400px" id="dbImage" />
            <div>
            </div>
            <hr class="d-sm-none">
          </div>
          <div class="col-sm-8">
            <div class="card">
              <div class="card-body">
            <div>
            <span class="contentFont">종류 </span><span style="margin-right: 10px;" id="dbCardType">종류값</span><span class="contentFont">에피소드 </span><span id="dbEpisode">에피소드값</span><span class="contentFont">제한 매수 </span><span id="dbLimit">제한매수값</span>
            </div>
            <span class="contentFont">등급 </span><span style="margin-right: 10px;" id="dbRarityType">등급값</span><span class="contentFont">카드 포인트 </span><span id="dbPoint">포인트값</span>
            </div>
               </div>
            <div class="card">
              <div class="card-body">
            <p id="dbInitial"> 카드 효과</p>
            <span class="contentFont">태그 </span><span style="margin-right: 10px;" id="dbTag">태그값</span>
                 </div>
            </div>
          </div>
        </div>
    </div>
  </div>

</div>
<%@ include file="../layout/footer.jsp"%>
<script src="/js/card.js"></script>
<script>
dbCardList();
</script>
</html>