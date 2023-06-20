<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>

<%@ include file="../layout/header.jsp"%>
<div class="container mt-5">
   <div class="row-margin" style="width:93%;">
            <input type="text" class="form-control" placeholder="덱이름을 정해주세요." id="deckName" style="width:800px;margin-left: 12px;">
          <nav class="deckbutton-group">
            <button type="button" class="delete-button" onclick="deckDelete();"></button>
            <button type="button" class="btn btn-danger" onclick="deckSave();" style="width:80px;">덱 저장</button>
          </nav>  
     </div>
  <!-- 덱 카드 선택 리스트 -->
  <div class="card" style="width:93%;height:320px;display:flex;margin-bottom:10px;">
     <div class="card-body" id="deckMakeClickList">
        
     </div>
  </div> 
  <!-- 덱리스트 info -->
  <div class="card" style="width:93%;height:50px;display:flex;margin-bottom:10px;">
    <div class="padding-body" id="deckMakeListInfo">
       <img src="/images/deck_image.PNG" style="width: 30px;"><span class="contentFont" id="deckCounting">0</span><span class="contentFont" style="margin-right: 15px;">/ 30</span><span class="contentFont" id="deckPoint">0</span><span class="contentFont">PT</span>
    </div>
 </div>
  <!-- 아래 카드 정보창 -->
  <div class="card" style="height:460px;width:93%;">
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
  <!-- 우측 카드 선택 창 -->
  <div class="scroll-wrap" style="width:330px;height:700px;">

    <input type="text" class="form-control" name="keyword" onkeyup="searchKeyword(this.value);" id="deckMakerKeyword" placeholder="카드명 검색">

    <ul id="deckDbCardList" class="deckUl"></ul>
  </div>

</div>
<%@ include file="../layout/footer.jsp"%>
<script src="/js/deck.js"></script>
<script>
dbCardList();
</script>
</html>