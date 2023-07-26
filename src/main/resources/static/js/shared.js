// 키워드 검색 로직
const searchKeyword = keyword => {
        $.ajax({
            type:"GET",
            url:"/shared/api?keyword="+keyword
        }).done((pagingCardList) =>{
            $("#pagingGroup").html("");
            $("#sharedFindAll").html("");
            console.log(pagingCardList);
            pagingCardList.pageData.forEach(cardList =>{
                $("#sharedFindAll").append(`<div class="card" style="width:200px"
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


// 공유덱목록을 가져오는 로직
const sharedList = () =>{
    $("#pagingGroup").html("");
    $("#sharedFindAll").html("");
    $.ajax({
        type:"GET",
        url:"/shared/api"
    }).done((sharedList) =>{
        console.log(sharedList);
        sharedList.pageData.forEach(shared =>{
            $("#sharedTableList").append(`<td>`+shared.title+`</td>
                                          <td>`+shared.writer+`</td>
                                          <td>`+shared.createDate+`</td>
                                          <td>`+shared.views+`</td>
                                          `)
        })
        //이전버튼
        if(sharedList.page <= 1){
            $("#pagingGroup").append(`<li class="page-item disabled"><a class="page-link" href="#">이전</a></li>`);
        }else{
            let pageNum = sharedList.page -1;
            $("#pagingGroup").append(`<li class="page-item"><a class="page-link" onclick="pageApi(`+pageNum+`);">이전</a></li>`);
        }

        //페이지버튼
        for (var i = sharedList.startPage; i <= sharedList.endPage; i++) { // 배열 arr의 모든 요소의 인덱스(index)를 출력함.
          if(sharedList.page == i){
            $("#pagingGroup").append(`<li class="page-item disabled"><a class="page-link">`+i+`</a></li>`);
          }else{
            $("#pagingGroup").append(`<li class="page-item"><a class="page-link" onclick="pageApi(`+i+`);">`+i+`</a></li>`);
          }
        }

        //다음버튼
        if(sharedList.page >= sharedList.maxPage){
            $("#pagingGroup").append(`<li class="page-item disabled"><a class="page-link" href="#">다음</a></li>`);
        }else{
            let pageNum = sharedList.page +1;
            $("#pagingGroup").append(`<li class="page-item"><a class="page-link" onclick="pageApi(`+pageNum+`);">다음</a></li>`);
        }

    }).fail((e) =>{
        console.log("error:"+e);
    });
}

// 덱 공유 등록 모달 덱선택 리스트
const clickSharedSave  = () =>{
    $("#saveModal").modal("show");
    $("#saveModal-deckList").html("");
        $.ajax({
            type:"GET",
            url:"/deck/api/list"
        }).done((myDeck)=>{
            myDeck.forEach(deck =>{
                $("#saveModal-deckList").append(`<span class="card" style="width:130px;height:160px" onclick="deckCheck(this,`+deck.id+`);"><span class="card-title">
                `+deck.name+`
                </span>
                <span class="card-body">
                  <img style="width:100px" src="/images/deck_.PNG">
                </span></span>`);
            })
        }).fail((e) =>{
            alert(e);
        })
}

// 덱선택 리스트 클릭시
const deckCheck = (deckClick,id) =>{
    let color = $(deckClick).css('background-color');
    if(color == 'rgb(97, 85, 79)'){
        $(deckClick).css('background-color','');
    }else{
        $(".card").css('background-color','');
        $(deckClick).css('background-color','#61554F');
        $("#deckHidden").val(id);
    }

}

const sharedDeckSave = () =>{
    let data = {
        "title" : $("#title").val(),
        "contents" : $("#contents").val(),
        "deckId" : $("#deckHidden").val()
    }

            $.ajax({
                type:"POST",
                url:"/shared/api",
                data:JSON.stringify(data),
                contentType:"application/json"
            }).done(()=>{
                alert("등록되었습니다.");
            }).fail((e) =>{
                alert(e);
            })
}