// 카드목록을 가져오는 로직
const dbCardList = () =>{
    $("#pagingGroup").html("");
    $("#cardFindAll").html("");
    $.ajax({
        type:"GET",
        url:"/card/api"
    }).done((pagingCardList) =>{
        console.log(pagingCardList);
        pagingCardList.pageData.forEach(cardList =>{
            $("#cardFindAll").append(`<div class="card" style="width:200px"
                                      onclick="dbCardDetail('`+cardList.id+`')">
                                      <img class="card-img-top" src="`+cardList.image+`" alt="Card image">
                                      <div class="card-body"><div class="smallContentFont">`+cardList.name+`</div></div>
                                      </div>`)
        })
        //이전버튼
        if(pagingCardList.page <= 1){
            $("#pagingGroup").append(`<li class="page-item disabled"><a class="page-link" href="#">이전</a></li>`);
        }else{
            let pageNum = pagingCardList.page -1;
            $("#pagingGroup").append(`<li class="page-item"><a class="page-link" onclick="pageApi(`+pageNum+`);">이전</a></li>`);
        }

        //페이지버튼
        for (var i = pagingCardList.startPage; i <= pagingCardList.endPage; i++) { // 배열 arr의 모든 요소의 인덱스(index)를 출력함.
          if(pagingCardList.page == i){
            $("#pagingGroup").append(`<li class="page-item disabled"><a class="page-link">`+i+`</a></li>`);
          }else{
            $("#pagingGroup").append(`<li class="page-item"><a class="page-link" onclick="pageApi(`+i+`);">`+i+`</a></li>`);
          }
        }

        //다음버튼
        if(pagingCardList.page >= pagingCardList.maxPage){
            $("#pagingGroup").append(`<li class="page-item disabled"><a class="page-link" href="#">다음</a></li>`);
        }else{
            let pageNum = pagingCardList.page +1;
            $("#pagingGroup").append(`<li class="page-item"><a class="page-link" onclick="pageApi(`+pageNum+`);">다음</a></li>`);
        }

    }).fail((e) =>{
        console.log("error:"+e);
    });
}

// parameter num 으로 paging
const pageApi = pageNum =>{
        $("#pagingGroup").html("");
        $("#cardFindAll").html("");
        $.ajax({
            type:"GET",
            url:"/card/api?page="+pageNum
        }).done((pagingCardList) =>{
            console.log(pagingCardList);
            pagingCardList.pageData.forEach(cardList =>{
                $("#cardFindAll").append(`<div class="card" style="width:200px"
                                          onclick="dbCardDetail('`+cardList.id+`')">
                                          <img class="card-img-top" src="`+cardList.image+`" alt="Card image">
                                          <div class="card-body"><div class="smallContentFont">`+cardList.name+`</div></div>
                                          </div>`)
            })
            //이전버튼
            if(pagingCardList.page <= 1){
                $("#pagingGroup").append(`<li class="page-item disabled"><a class="page-link" href="#">이전</a></li>`);
            }else{
                let pageNum = pagingCardList.page -1;
                $("#pagingGroup").append(`<li class="page-item"><a class="page-link"onclick="pageApi(`+pageNum+`);">이전</a></li>`);
            }

            //페이지버튼
            for (var i = pagingCardList.startPage; i <= pagingCardList.endPage; i++) { // 배열 arr의 모든 요소의 인덱스(index)를 출력함.
              if(pagingCardList.page == i){
                $("#pagingGroup").append(`<li class="page-item disabled"><a class="page-link">`+i+`</a></li>`);
              }else{
                $("#pagingGroup").append(`<li class="page-item"><a class="page-link" onclick="pageApi(`+i+`);">`+i+`</a></li>`);
              }
            }

            //다음버튼
            if(pagingCardList.page >= pagingCardList.maxPage){
                $("#pagingGroup").append(`<li class="page-item disabled"><a class="page-link" href="#">다음</a></li>`);
            }else{
                let pageNum = pagingCardList.page +1;
                $("#pagingGroup").append(`<li class="page-item"><a class="page-link" onclick="pageApi(`+pageNum+`);">다음</a></li>`);
            }
        }).fail((e) =>{
            console.log(e);
        });
}


// parameter num+keyword 로 paging
const keywordPageApi = (pageNum,keyword) =>{
        $("#pagingGroup").html("");
        $("#cardFindAll").html("");
        $.ajax({
            type:"GET",
            url:"/card/api?page="+pageNum+"&keyword="+keyword
        }).done((pagingCardList) =>{
            pagingCardList.pageData.forEach(cardList =>{
                $("#cardFindAll").append(`<div class="card" style="width:200px"
                                          onclick="dbCardDetail('`+cardList.id+`')">
                                          <img class="card-img-top" src="`+cardList.image+`" alt="Card image">
                                          <div class="card-body"><div class="smallContentFont">`+cardList.name+`</div></div>
                                          </div>`)
            })
            //이전버튼
            if(pagingCardList.page <= 1){
                $("#pagingGroup").append(`<li class="page-item disabled"><a class="page-link" href="#">이전</a></li>`);
            }else{
                let pageNum = pagingCardList.page -1;
                $("#pagingGroup").append(`<li class="page-item"><a class="page-link"onclick="keywordPageApi(`+pageNum+`,'`+pagingCardList.keyword+`');">이전</a></li>`);
            }

            //페이지버튼
            for (var i = pagingCardList.startPage; i <= pagingCardList.endPage; i++) { // 배열 arr의 모든 요소의 인덱스(index)를 출력함.
              if(pagingCardList.page == i){
                $("#pagingGroup").append(`<li class="page-item disabled"><a class="page-link">`+i+`</a></li>`);
              }else{
                $("#pagingGroup").append(`<li class="page-item"><a class="page-link" onclick="keywordPageApi(`+i+`,'`+pagingCardList.keyword+`');">`+i+`</a></li>`);
              }
            }

            //다음버튼
            if(pagingCardList.page >= pagingCardList.maxPage){
                $("#pagingGroup").append(`<li class="page-item disabled"><a class="page-link" href="#">다음</a></li>`);
            }else{
                let pageNum = pagingCardList.page +1;
                $("#pagingGroup").append(`<li class="page-item"><a class="page-link" onclick="keywordPageApi(`+pageNum+`,'`+pagingCardList.keyword+`');">다음</a></li>`);
            }
        }).fail((e) =>{
            console.log(e);
        });
}

// 카드 상세 정보 표출
const dbCardDetail = id =>{
    $.ajax({
        type:"GET",
        url:"/card/api/"+id
    }).done((dbCardDetail) =>{
        $("#dbName").html(dbCardDetail.name);
        $("#dbImage").attr("src",dbCardDetail.image);
        $("#dbInitial").html(dbCardDetail.effect);
        $("#dbRarityType").html(dbCardDetail.rarityType);
        $("#dbPoint").html(dbCardDetail.point);
        $("#dbEpisode").html(dbCardDetail.episode);
         $("#dbLimit").html(dbCardDetail.limit);
        $("#dbCardType").html(dbCardDetail.cardType);
        if(dbCardDetail.tag1 =="" || dbCardDetail.tag1 == null){
            $("#dbTag").html("없음");
        }else{
            $("#dbTag").html(dbCardDetail.tag1+" "+dbCardDetail.tag2);
        }
    }).fail((e) =>{
        console.log(e);
    });
}

// 키워드 검색 로직
const searchKeyword = keyword => {
        $.ajax({
            type:"GET",
            url:"/card/api?keyword="+keyword
        }).done((pagingCardList) =>{
            $("#pagingGroup").html("");
            $("#cardFindAll").html("");
            console.log(pagingCardList);
            pagingCardList.pageData.forEach(cardList =>{
                $("#cardFindAll").append(`<div class="card" style="width:200px"
                                          onclick="dbCardDetail('`+cardList.id+`')">
                                          <img class="card-img-top" src="`+cardList.image+`" alt="Card image">
                                          <div class="card-body"><div class="smallContentFont">`+cardList.name+`</div></div>
                                          </div>`)
            })
            //이전버튼
            if(pagingCardList.page <= 1){
                $("#pagingGroup").append(`<li class="page-item disabled"><a class="page-link" href="#">이전</a></li>`);
            }else{
                let pageNum = pagingCardList.page -1;
                $("#pagingGroup").append(`<li class="page-item"><a class="page-link"onclick="keywordPageApi(`+pageNum+`,'`+pagingCardList.keyword+`');">이전</a></li>`);
            }

            //페이지버튼
            for (var i = pagingCardList.startPage; i <= pagingCardList.endPage; i++) { // 배열 arr의 모든 요소의 인덱스(index)를 출력함.
              if(pagingCardList.page == i){
                $("#pagingGroup").append(`<li class="page-item disabled"><a class="page-link">`+i+`</a></li>`);
              }else{
                $("#pagingGroup").append(`<li class="page-item"><a class="page-link" onclick="keywordPageApi(`+i+`,'`+pagingCardList.keyword+`');">`+i+`</a></li>`);
              }
            }

            //다음버튼
            if(pagingCardList.page >= pagingCardList.maxPage){
                $("#pagingGroup").append(`<li class="page-item disabled"><a class="page-link" href="#">다음</a></li>`);
            }else{
                let pageNum = pagingCardList.page +1;
                $("#pagingGroup").append(`<li class="page-item"><a class="page-link" onclick="keywordPageApi(`+pageNum+`,'`+pagingCardList.keyword+`');">다음</a></li>`);
            }
        }).fail((e) =>{
            alert(e);
        });


}