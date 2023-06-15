<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
<%@ include file="../layout/header.jsp"%>
<div class="container mt-5">
<div id="cardFindAll" class="d-flex"></div>

<div class="container mt-5">
  <div class="row">
    <div class="col-sm-4">
      <h2 id="dbName">카드명</h2>
      <h5>Photo of me:</h5>
      <img class="fakeimg" style="width:400px" id="dbImage" />
      <p>Some text about me in culpa qui officia deserunt mollit anim..</p>

      <hr class="d-sm-none">
    </div>
    <div class="col-sm-8">
      <h2>TITLE HEADING</h2>
      <h5>Title description, Dec 7, 2020</h5>
      <div class="fakeimg">Fake Image</div>
      <p>Some text..</p>
      <p id="dbInitial"> 카드 효과.</p>
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