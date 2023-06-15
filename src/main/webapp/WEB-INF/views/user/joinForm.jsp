<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
<%@ include file="../layout/header.jsp"%>
<div class="container mt-5" style="display:flex;justify-content: space-around;">
<div class="card" style="width:500px">
  <div class="card-body">
    <form>
      <div class="mb-3 mt-3">
        <label for="username" class="form-label">아이디:</label>
        <input type="text" class="form-control" id="username">
      </div>

      <div class="mb-3 mt-3">
        <label for="nickname" class="form-label">닉네임:</label>
        <input type="text" class="form-control" id="nickname" >
      </div>

      <div class="mb-3">
        <label for="password" class="form-label">비밀번호:</label>
        <input type="password" class="form-control" id="password">
      </div>

      <p>아이디가 있으신가요? <a href="/loginForm">로그인 화면으로 가기</a></p>
    </form>
      <button onclick="join();" class="btn btn-primary">가입</button>
  </div>
</div>
</div>
<%@ include file="../layout/footer.jsp"%>
<script src="/js/user.js"></script>
<script>
cardList();
</script>
</html>