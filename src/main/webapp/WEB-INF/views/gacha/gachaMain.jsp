<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
<%@ include file="../layout/header.jsp"%>
<div class="container mt-5">
 
  <!-- 가챠 리스트 -->
  <div class="card" style="width:93%;height:280px;margin-bottom:10px;">
    <div class="card-body gacha-body" id="gachaForm">
      <div class="gacha-list" style="width:170px">
      </div>
      <div class="gacha-bigImage"></div>
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
            <button style="margin: 5px;" type="button" onclick="leftBtn();"><img  src="/images/좌클릭.PNG"></button><input type="number" id="gachaNum" value="1" readonly /><button style="margin: 5px;" type="button" onclick="rightBtn();"><img  src="/images/우클릭.PNG"></button>
            <div id="gachaMenuBtnGroup" style="margin: 5px;" style="display:flex;justify-content: flex-end;margin-bottom: 10px;margin-right:90px;">
              <button style="margin: 5px;width:210px;height:70px" type="button" class="btn btn-secondary" onclick="gachaPercentageListBtn();">등급별 카드 확률</button>
              <button style="margin: 5px;" type="button"  onclick="gachaCardListBtn();" style="margin-right: 5px;"><img  src="/images/구성품_확인_btn.PNG"></button>
              <button style="margin: 5px;" type="button"  id="deckDelete" onclick="buyBtn();"><img  src="/images/구매_하기_btn.PNG"></button>

            </div>
          </div>
        </div>
    </div>
  </div>

  <!-- 가챠 결과 -->
  <div class="card" style="width:93%;height:320px;display:flex;margin-bottom:10px;">
    <div class="bigContentFont">가챠 결과</div>
    <div class="card-body" id="gachaResult" style="display:flex;">
    </div>
  </div> 

</div>


<!-- The Modal -->
<div class="modal" id="gachaModal">
  <div class="modal-dialog modal-lg modal-dialog-scrollable">
    <div class="modal-content">

      <!-- Modal Header -->
      <div class="modal-header">
        <h4 class="modal-title">구성품 목록</h4>
        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
      </div>

      <!-- Modal body -->
      <div class="modal-body" id="gacha-modal-body">
        <div class="contentFont">유니크</div>
        <div class="card-rarity" id="card-unique"></div>
        <div class="contentFont">레어</div>
        <div class="card-rarity" id="card-rare"></div>
        <div class="contentFont">슈페리어</div>
        <div class="card-rarity" id="card-superior"></div>
        <div class="contentFont">언커먼</div>
        <div class="card-rarity" id="card-uncommon"></div>
        <div class="contentFont">커먼</div>
        <div class="card-rarity" id="card-common"></div>
      </div>

      <!-- Modal footer -->
      <div class="modal-footer">
        <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
      </div>

    </div>
  </div>
</div>


<!-- The Modal -->
<div class="modal" id="gachaPercentageModal">
  <div class="modal-dialog modal-lg">
    <div class="modal-content">

      <!-- Modal Header -->
      <div class="modal-header">
        <h4 class="modal-title">등급별 카드 확률</h4>
        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
      </div>

      <!-- Modal body -->
      <div class="modal-body" id="gachaPercentage-modal-body">

      </div>

      <!-- Modal footer -->
      <div class="modal-footer">
        <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
      </div>

    </div>
  </div>
</div>

<%@ include file="../layout/footer.jsp"%>
<script src="/js/gacha.js"></script>
<script>
gachaList();
cardPercentage();
</script>
</html>