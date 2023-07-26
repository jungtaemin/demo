<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="sec" uri="http://www.springframework.org/security/tags" %>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <script src="https://code.jquery.com/jquery-3.7.0.min.js" integrity="sha256-2Pmvv0kuTBOenSvLm6bvfBSSHrUJ+3A7x6P5Ebd07/g=" crossorigin="anonymous"></script>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="/css/common.css">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"></script>
</head>
<body>
<!-- Grey with black text -->
<nav class="navbar navbar-expand-sm bg-dark navbar-dark">
  <div class="container-fluid">
    <ul class="navbar-nav">
      <li class="nav-item">
        <a class="nav-link active" href="/">카나테일즈 덱메이커</a>
      </li>

    <sec:authorize access="isAnonymous()">
            <li class="nav-item">
                            <a class="nav-link" href="/loginForm">로그인</a>
            </li>
                          <li class="nav-item">
                            <a class="nav-link" href="/join">회원가입</a>
                          </li>
    </sec:authorize>
    <sec:authorize access="isAuthenticated()">

          <li class="nav-item">
            <a class="nav-link" href="/logout">로그아웃</a>
          </li>

    </sec:authorize>
            <li class="nav-item">
                             <a class="nav-link" href="/deck/list">내 덱 관리</a>
            </li>
            <li class="nav-item">
                             <a class="nav-link" href="/deck/make">덱 만들기</a>
            </li>
            <li class="nav-item">
                             <a class="nav-link" href="/card">카드DB</a>
            </li>
            <li class="nav-item">
                              <a class="nav-link" href="/gacha">가챠 시뮬</a>
            </li>
            <li class="nav-item">
                              <a class="nav-link" href="/shared">공유 덱 리스트(제작중)</a>
            </li>

    </ul>
  </div>
</nav>