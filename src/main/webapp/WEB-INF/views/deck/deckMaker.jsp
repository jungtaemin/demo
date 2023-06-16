<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>

<%@ include file="../layout/header.jsp"%>
<div class="container mt-5">
  <div class="card" style="width:93%;height:600px">
    <div class="card-body">
    
    </div>
  </div>  



  <div class="scroll-wrap" style="width:330px;height:700px;">

    <input type="text" class="form-control" name="keyword" placeholder="카드명 검색">

    <ul id="deckDbCardList" class="deckUl"></ul>
  </div>

</div>
<%@ include file="../layout/footer.jsp"%>
<script src="/js/deck.js"></script>
<script>
dbCardList();
</script>
</html>