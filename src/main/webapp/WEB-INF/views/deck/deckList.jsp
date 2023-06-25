<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>

<%@ include file="../layout/header.jsp"%>
<div class="container mt-5">
  <div class="bigContentFont">내 덱 관리</div>
  <div class="background-basic" style="width:93%;height:450px;display:flex;margin-bottom:10px;" id="myDeckList">
  </div>
    <div id="myDeckSettingBtn-group" style="display:flex;justify-content: flex-end;margin-bottom: 10px;margin-right:90px;">
      <button type="button" class="btn btn-secondary" onclick="drawSystem();" style="margin-right: 5px;">5장 드로우 해보기</button>
      <button type="button" class="btn btn-danger" id="deckDelete">덱 삭제</button>
    </div>
  <div class="card" style="width:93%;height:320px;display:flex;margin-bottom:10px;">
    <div class="card-body" id="deckInCardList">
    </div>
 </div> 
</div>


<!-- Draw Modal -->
<div class="modal" id="drawModal">
  <div class="modal-dialog modal-lg">
    <div class="modal-content">

      <!-- Modal Header -->
      <div class="modal-header">
        <h4 class="modal-title">5장 드로우 해보기</h4>
        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
      </div>

      <!-- Modal body -->
      <div class="modal-body" id="drawModal-body">
        
      </div>

      <!-- Modal footer -->
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" onclick="drawSystem();">5장 드로우 해보기</button>
        <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
      </div>

    </div>
  </div>
</div>
<!-- Modal END-->

<%@ include file="../layout/footer.jsp"%>
<script src="/js/deck.js"></script>
<script>
myDeckList();
</script>
</html>