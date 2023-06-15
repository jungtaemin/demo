<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <script src="https://code.jquery.com/jquery-3.7.0.min.js" integrity="sha256-2Pmvv0kuTBOenSvLm6bvfBSSHrUJ+3A7x6P5Ebd07/g=" crossorigin="anonymous"></script>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"></script>
</head>
<body>
<!-- Grey with black text -->
<nav class="navbar navbar-expand-sm bg-dark navbar-dark">
  <div class="container-fluid">
    <ul class="navbar-nav">
      <li class="nav-item">
        <a class="nav-link active" href="#">카나테일즈 덱메이커</a>
      </li>
    <c:choose>
        <c:when test="${empty sessionScope.principal}">
            <li class="nav-item">
                            <a class="nav-link" href="#">로그인</a>
                          </li>
                          <li class="nav-item">
                            <a class="nav-link" href="/user/join">회원가입</a>
                          </li>
        </c:when>
        <c:otherwise>
            <li class="nav-item">
                            <a class="nav-link" href="#">내정보</a>
                          </li>
                          <li class="nav-item">
                            <a class="nav-link" href="/user/join">글쓰기</a>
            </li>
        </c:otherwise>


    </c:choose>
            <li class="nav-item">
                             <a class="nav-link" href="/card">카드DB</a>
            </li>
    </ul>
  </div>
</nav>