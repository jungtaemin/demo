<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>

<%@ include file="../layout/header.jsp"%>
<div class="container mt-5">
 
  <!-- 가챠 리스트 -->
  <div class="card" style="width:93%;height:280px;display:flex;margin-bottom:10px;">
    <div class="card-body" id="gachaList">
    </div>
  </div> 

  <!-- 가챠 메뉴 -->
  <div class="card" style="width:93%;height:250px;display:flex;margin-bottom:10px;">
    <div class="card-body">
      <div class="row">
          <div class="col-sm-4">
            <img class="fakeimg" style="width:200px" id="dbImage" src="/images/deckMaker_defaultImg.png"/>
            <hr class="d-sm-none">
          </div>
          <div class="col-sm-8">
            <div class="card">
              <div class="card-body">
            <p class="contentFont" style="margin-bottom: 10px;">탈렌티움 주괴 또는 뽑기 티켓을 소비하여 랜덤한 캐릭터 또는 픽업 중인 유니크 카드를 획득합니다.</p>
              </div>
            </div>
            <input type="number"/>
            <div id="gachaMenuBtnGroup" style="margin: 5px;" style="display:flex;justify-content: flex-end;margin-bottom: 10px;margin-right:90px;">
              <button style="margin: 5px;" type="button"  onclick="drawSystem();" style="margin-right: 5px;"><img  src="/images/구매_btn.png"></button>
              <button style="margin: 5px;" type="button"  id="deckDelete"><img  src="/images/취소_btn.png"></button>
            </div>
          </div>
        </div>
    </div>
  </div> 

  <!-- 가챠 결과 -->
  <div class="card" style="width:93%;height:320px;display:flex;margin-bottom:10px;">
    <div class="bigContentFont">가챠 결과</div>
    <div class="card-body" id="gachaList">
    </div>
  </div> 

</div>
<%@ include file="../layout/footer.jsp"%>
<script src="/js/gacha.js"></script>
<script>
dbCardList();
</script>
</html>