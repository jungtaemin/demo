<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>

<%@ include file="../layout/header.jsp"%>
<div class="container mt-5">
    <%-- Option --%>
    <div>
        <button type="button" class="btn btn-primary" style="margin-bottom:5px" onclick="viewsBySearchKeyword();">조회순</button>
        <button type="button" class="btn btn-secondary" style="margin-bottom:5px" onclick="latestBySearchKeyword();">최신순</button>
    </div>

    <%-- 목록 --%>
  <div class="card">
    <div class="card-body">
    <table class="table table-dark table-hover">
        <thead>
          <tr>
            <th></th>
            <th>제목</th>
            <th>글쓴이</th>
            <th>날짜</th>
            <th>조회</th>
          </tr>
        </thead>
        <tbody id="sharedTableList" style="cursor:pointer;">
        </tbody>
      </table>
    </div>
  </div>

  <sec:authorize access="isAnonymous()">
    <div style="height:40px"><button type="button" class="btn btn-primary" style="float: right;" onclick="loginConfirm();">공유 덱 등록</button></div>
 </sec:authorize>

 <sec:authorize access="isAuthenticated()">
    <div style="height:40px"><button type="button" class="btn btn-primary" style="float: right;" onclick="clickSharedSave();">공유 덱 등록</button></div>
 </sec:authorize>
  <div><ul class="pagination" id="pagingGroup" style="cursor:pointer;justify-content:center;"></ul></div>


    <%-- 검색 --%>
  <div class="card">
    <div class="card-body">
  <input type="text" class="form-control" name="keyword" onkeyup="searchKeyword(this.value);" id="cardKeyword" placeholder="카드덱명 검색">
    </div>
  </div>


</div>


<!-- save Modal -->
<div class="modal" id="saveModal">
  <div class="modal-dialog modal-lg">
    <div class="modal-content">

      <!-- Modal Header -->
      <div class="modal-header">
        <h4 class="modal-title">공유 덱 등록</h4>
        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
      </div>

      <!-- Modal body -->
      <div class="modal-body" id="saveModal-body">
          <div class="mb-3 mt-3">
            <input type="text" class="form-control" id="title" placeholder="글제목을 입력해주세요" name="title">
          </div>

            <div class="card">
              <div class="card-body">
              <h4 class="modal-title">덱 선택</h4>
                      <div id="saveModal-deckList" style="display: flex;"></div>
              </div>
            </div>
            <input type="hidden" id="deckHidden" />
          <textarea class="form-control" rows="5" id="contents" name="contents" placeholder="글내용을 입력해주세요"></textarea>
        </form>
      </div>

      <!-- Modal footer -->
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" onclick="sharedDeckSave();">등록하기</button>
        <button type="button" class="btn btn-danger" data-bs-dismiss="modal">닫기</button>
      </div>

    </div>
  </div>
</div>
<!-- Modal END-->
<%@ include file="../layout/footer.jsp"%>
<script src="/js/shared.js"></script>
<script>
sharedList();
</script>
</html>