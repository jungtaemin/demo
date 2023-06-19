<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>

<%@ include file="../layout/header.jsp"%>
<div class="container mt-5">
  <div class="bigContentFont">내 덱 관리</div>
  <div class="background-basic" style="width:93%;height:450px;display:flex;margin-bottom:10px;" id="myDeckList">
  </div>
</div>
<%@ include file="../layout/footer.jsp"%>
<script src="/js/deck.js"></script>
<script>
myDeckList();
</script>
</html>