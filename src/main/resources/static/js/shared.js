// 키워드 검색 로직
const searchKeyword = keyword => {
        $.ajax({
            type:"GET",
            url:"/shared/api?keyword="+keyword
        }).done((pagingCardList) =>{
            $("#pagingGroup").html("");
            $("#sharedTableList").html("");
            console.log(pagingCardList);
            pagingCardList.pageData.forEach(shared =>{
                $("#sharedTableList").append(`<tr onclick="sharedDetail(`+shared.id+`);">
                                              <td>`+shared.rowNum+`</td>
                                              <td>`+shared.title+`</td>
                                              <td>`+shared.writer+`</td>
                                              <td>`+shared.createDate+`</td>
                                              <td>`+shared.views+`</td>
                                              </tr>`)
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
    $("#sharedTableList").html("");
    $.ajax({
        type:"GET",
        url:"/shared/api"
    }).done((sharedList) =>{
        console.log(sharedList);
        sharedList.pageData.forEach(shared =>{
            $("#sharedTableList").append(`<tr onclick="sharedDetail(`+shared.id+`);">
                                          <td>`+shared.rowNum+`</td>
                                          <td>`+shared.title+`</td>
                                          <td>`+shared.writer+`</td>
                                          <td>`+shared.createDate+`</td>
                                          <td>`+shared.views+`</td>
                                          </tr>`)
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

// 덱 공유 등록 모달 and 덱선택 리스트
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

// 공유덱 저장
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
                $ ('#saveModal').modal ('hide');
                sharedList();
            }).fail((e) =>{
                alert(e);
            })
}

// 상세 페이지로 이동
const sharedDetail = id =>{
    location.href ="/shared/"+id;
}

const sharedDetailAjax = id =>{

        $.ajax({
            type:"GET",
            url:"/shared/api/"+id
        }).done((sharedDetailData)=>{
            console.log(sharedDetailData);
                $("#detail-title").html(`<div style="font-size: 19px;font-weight: bold;">`+sharedDetailData.title+`</div>`);
                $("#detail-createDate").html(sharedDetailData.createDate);
                $("#detail-writer").html(sharedDetailData.writer);
                $("#detail-views").html("조회 수 "+sharedDetailData.views);
                $("#detail-deck").html(`<span class="deck-card"><img id="cardImg1" style="width: 9%;margin-bottom:7px;" src="`+sharedDetailData.image1+`" onerror="this.src='/images/deckMaker_defaultImg.png'"></span>
                <span class="deck-card"><img id="cardImg2" style="width: 9%;margin-bottom:7px;" src="`+sharedDetailData.image2+`" onerror="this.src='/images/deckMaker_defaultImg.png'"></span>
                <span class="deck-card"><img id="cardImg3" style="width: 9%;margin-bottom:7px;" src="`+sharedDetailData.image3+`" onerror="this.src='/images/deckMaker_defaultImg.png'"></span>
                <span class="deck-card"><img id="cardImg4" style="width: 9%;margin-bottom:7px;" src="`+sharedDetailData.image4+`" onerror="this.src='/images/deckMaker_defaultImg.png'"></span>
                <span class="deck-card"><img id="cardImg5" style="width: 9%;margin-bottom:7px;" src="`+sharedDetailData.image5+`" onerror="this.src='/images/deckMaker_defaultImg.png'"></span>
                <span class="deck-card"><img id="cardImg6" style="width: 9%;margin-bottom:7px;" src="`+sharedDetailData.image6+`" onerror="this.src='/images/deckMaker_defaultImg.png'"></span>
                <span class="deck-card"><img id="cardImg7" style="width: 9%;margin-bottom:7px;" src="`+sharedDetailData.image7+`" onerror="this.src='/images/deckMaker_defaultImg.png'"></span>
                <span class="deck-card"><img id="cardImg8" style="width: 9%;margin-bottom:7px;" src="`+sharedDetailData.image8+`" onerror="this.src='/images/deckMaker_defaultImg.png'"></span>
                <span class="deck-card"><img id="cardImg9" style="width: 9%;margin-bottom:7px;" src="`+sharedDetailData.image9+`" onerror="this.src='/images/deckMaker_defaultImg.png'"></span>
                <span class="deck-card"><img id="cardImg10" style="width: 9%;margin-bottom:7px;" src="`+sharedDetailData.image10+`" onerror="this.src='/images/deckMaker_defaultImg.png'"></span>
                <span class="deck-card"><img id="cardImg11" style="width: 9%;margin-bottom:7px;" src="`+sharedDetailData.image11+`" onerror="this.src='/images/deckMaker_defaultImg.png'"></span>
                <span class="deck-card"><img id="cardImg12" style="width: 9%;margin-bottom:7px;" src="`+sharedDetailData.image12+`" onerror="this.src='/images/deckMaker_defaultImg.png'"></span>
                <span class="deck-card"><img id="cardImg13" style="width: 9%;margin-bottom:7px;" src="`+sharedDetailData.image13+`" onerror="this.src='/images/deckMaker_defaultImg.png'"></span>
                <span class="deck-card"><img id="cardImg14" style="width: 9%;margin-bottom:7px;" src="`+sharedDetailData.image14+`" onerror="this.src='/images/deckMaker_defaultImg.png'"></span>
                <span class="deck-card"><img id="cardImg15" style="width: 9%;margin-bottom:7px;" src="`+sharedDetailData.image15+`" onerror="this.src='/images/deckMaker_defaultImg.png'"></span>
                <span class="deck-card"><img id="cardImg16" style="width: 9%;margin-bottom:7px;" src="`+sharedDetailData.image16+`" onerror="this.src='/images/deckMaker_defaultImg.png'"></span>
                <span class="deck-card"><img id="cardImg17" style="width: 9%;margin-bottom:7px;" src="`+sharedDetailData.image17+`" onerror="this.src='/images/deckMaker_defaultImg.png'"></span>
                <span class="deck-card"><img id="cardImg18" style="width: 9%;margin-bottom:7px;" src="`+sharedDetailData.image18+`" onerror="this.src='/images/deckMaker_defaultImg.png'"></span>
                <span class="deck-card"><img id="cardImg19" style="width: 9%;margin-bottom:7px;" src="`+sharedDetailData.image19+`" onerror="this.src='/images/deckMaker_defaultImg.png'"></span>
                <span class="deck-card"><img id="cardImg20" style="width: 9%;margin-bottom:7px;" src="`+sharedDetailData.image20+`" onerror="this.src='/images/deckMaker_defaultImg.png'"></span>
                <span class="deck-card"><img id="cardImg21" style="width: 9%;margin-bottom:7px;" src="`+sharedDetailData.image21+`" onerror="this.src='/images/deckMaker_defaultImg.png'"></span>
                <span class="deck-card"><img id="cardImg22" style="width: 9%;margin-bottom:7px;" src="`+sharedDetailData.image22+`" onerror="this.src='/images/deckMaker_defaultImg.png'"></span>
                <span class="deck-card"><img id="cardImg23" style="width: 9%;margin-bottom:7px;" src="`+sharedDetailData.image23+`" onerror="this.src='/images/deckMaker_defaultImg.png'"></span>
                <span class="deck-card"><img id="cardImg24" style="width: 9%;margin-bottom:7px;" src="`+sharedDetailData.image24+`" onerror="this.src='/images/deckMaker_defaultImg.png'"></span>
                <span class="deck-card"><img id="cardImg25" style="width: 9%;margin-bottom:7px;" src="`+sharedDetailData.image25+`" onerror="this.src='/images/deckMaker_defaultImg.png'"></span>
                <span class="deck-card"><img id="cardImg26" style="width: 9%;margin-bottom:7px;" src="`+sharedDetailData.image26+`" onerror="this.src='/images/deckMaker_defaultImg.png'"></span>
                <span class="deck-card"><img id="cardImg27" style="width: 9%;margin-bottom:7px;" src="`+sharedDetailData.image27+`" onerror="this.src='/images/deckMaker_defaultImg.png'"></span>
                <span class="deck-card"><img id="cardImg28" style="width: 9%;margin-bottom:7px;" src="`+sharedDetailData.image28+`" onerror="this.src='/images/deckMaker_defaultImg.png'"></span>
                <span class="deck-card"><img id="cardImg29" style="width: 9%;margin-bottom:7px;" src="`+sharedDetailData.image29+`" onerror="this.src='/images/deckMaker_defaultImg.png'"></span>
                <span class="deck-card"><img id="cardImg30" style="width: 9%;margin-bottom:7px;" src="`+sharedDetailData.image30+`" onerror="this.src='/images/deckMaker_defaultImg.png'"></span>`);
                $("#detail-contents").html(sharedDetailData.contents);
                sharedList();
            }).fail((e) =>{
            alert(e);
        })

}


const latestBySearchKeyword = () =>{
    let keyword = $("#cardKeyword").val();
    searchKeyword(keyword);
}

const viewsBySearchKeyword = () =>{
     let keyword = $("#cardKeyword").val();
     let sort = "views";


             $.ajax({
                 type:"GET",
                 url:"/shared/api?keyword="+keyword+"&sort="+sort
             }).done((pagingCardList) =>{
                 $("#pagingGroup").html("");
                 $("#sharedTableList").html("");
                 console.log(pagingCardList);
                 pagingCardList.pageData.forEach(shared =>{
                     $("#sharedTableList").append(`<tr onclick="sharedDetail(`+shared.id+`);">
                                                   <td>`+shared.rowNum+`</td>
                                                   <td>`+shared.title+`</td>
                                                   <td>`+shared.writer+`</td>
                                                   <td>`+shared.createDate+`</td>
                                                   <td>`+shared.views+`</td>
                                                   </tr>`)
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

// 댓글 목록 ajax
const commentDataAjax = id =>{
             $("#commentTable").html();
             $("#commentTable").html(`<tr>
                                         <td class="contentFont">전체 댓글 <span id="commentCount" class="contentErrorFont">0</span>개</td>
                                      </tr>`);
             $.ajax({
                 type:"GET",
                 url:"/comment/api/"+id
             }).done((commentList) =>{
                commentList.comment.forEach(comment =>{
                    $("#commentTable").append(`<tr class="board-title">
                                                <td id="detail-title" style="width:900px";>`+comment.writer+`</td>
                                                <td id="detail-title" style="width:900px";>`+comment.contents+`</td>
                                                <td id="detail-createDate" style="width:200px">`+comment.createDate+`</td>
                                            </tr>`);

                });

                $("#commentCount").html(commentList.count);
             }).fail((e) =>{
                 alert(e);
             });

}


// 댓글 등록
const commentSave = id =>{

        let comment = {sharedId:id, contents:$("#commentContents").val()}
             $.ajax({
                 type:"POST",
                 url:"/comment/api",
                 contentType:"application/json",
                 data:JSON.stringify(comment)
             }).done(() =>{
                 commentDataAjax(id);
             }).fail((e) =>{
                 alert(e);
             });
}

const loginConfirm = ()=>{

    let result = confirm("로그인 하시겠습니까?");
    if(result){
        location.href='/loginForm'
    }else{
        
    }

    
}