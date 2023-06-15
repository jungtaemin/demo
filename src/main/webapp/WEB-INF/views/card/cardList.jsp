<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>

<%@ include file="../layout/header.jsp"%>
<div class="container mt-5">
<div id="cardFindAll" class="d-flex"></div>

<div class="container mt-5">
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

</div>
<%@ include file="../layout/footer.jsp"%>
<script src="/js/card.js"></script>
<script>
dbCardList();
</script>
</html>