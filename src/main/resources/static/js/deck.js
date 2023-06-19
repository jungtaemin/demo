// 카드목록을 가져오는 로직
const dbCardList = () =>{

    $.ajax({
        type:"GET",
        url:"/card/api"
    }).done((cardList) =>{
        cardList.forEach(cardList =>{
            $("#deckDbCardList").append(`<li class="card" style="width:80px"
                                      onclick="listClickOndeck('`+cardList.id+`','`+cardList.image+`','`+cardList.limit+`','`+cardList.point+`')">
                                      <img class="card-img-top" src="`+cardList.image+`" alt="Card image">
                                      </li>`)
        })
    }).fail((e) =>{
        alert(e);
    });
}
// 카드목록 ->카드 클릭시 덱목록으로 쌓이는 로직 - 최대 30장 제한
const listClickOndeck = (id,imagePath,limit,point) => {
       let count  = $("#deckMakeClickList > span").length;
       if(count <30){
                limitCheckAndAddDeckCard(id,imagePath,limit,point);
                dbCardDetail(id);
       }else{
            alert("덱의 최대 장수는 30장입니다.");
       }

}

// 카드 제거 
const cardRemove = (card) =>{
    card.remove();
    pointMinus(card.dataset.point);
    deckCounting();
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
        alert(e);
    });
}

// 카드 리미트 체크 + 덱에 카드 추가 + 덱포인트 계산
const limitCheckAndAddDeckCard = (id,imagePath,limit,point) =>  {
    let cnt = $("#deckMakeClickList > span[data-cardId="+id+"]").length;
    if(cnt >=limit){
        alert("이카드는 덱에"+limit+"장까지밖에 넣을 수 없습니다.");
    }else{
        $("#deckMakeClickList").append(`<span oncontextmenu="cardRemove(this);return false;" class="deck-card" data-point="`+point+`"  data-cardid="`+id+`" data-image="`+imagePath+`"><img style="width: 10%;margin-bottom:7px;" src="`+imagePath+`"></span>`);
        pointPlus(point);
        deckCounting();
    }
}
// 덱 저장
const deckSave = () => {
    let count  = $("#deckMakeClickList > span").length;
    let deck;
    if($("#deckName").val() == null || $("#deckName").val() == "" ){
        alert("덱 이름을 정해주세요.");
    }else if(count<30){
        if (confirm("덱이 30장 이하입니다.정말로 저장하시겠습니까?")) {
            deck = deckSaveJson();
        } else {
            alert("저장이 취소되었습니다.");
        }
    }else{
        
        deck = deckSaveJson();
    }
    console.log(deck);
}

// 덱 삭제
const deckDelete = () =>{
    $("#deckMakeClickList >span").remove();
}


// 덱 저장 JSON 데이터 만들기
const deckSaveJson = () =>{
    let deck = {"name":$("#deckName").val()}
    const deckCard = document.querySelectorAll(".deck-card");
    deckCard.forEach((card,index) =>{
        let indexP = index+1;
        deck['card'+indexP] = card.dataset.cardid;
        deck['image'+indexP] = card.dataset.image;
    });
    
    $.ajax({
        type:"POST",
        url:"/deck/api",
        contentType:"application/json",
        data:JSON.stringify(deck)
    }).done(() =>{
        location.href = "/deck/list";
    }).fail((e) =>{
        alert(e);
    });
}
// 덱 포인트 더하기
const pointPlus = point =>{
    let pointSet = Number($("#deckPoint").html())+Number(point);
    $("#deckPoint").html(pointSet);
}

// 덱 포인트 빼기
const pointMinus = point =>{
    let pointSet = Number($("#deckPoint").html())-Number(point);
    $("#deckPoint").html(pointSet);
}
// 덱으로 추가한 카드 갯수 카운팅
const deckCounting = () => {
    let count  = $("#deckMakeClickList > span").length;
    $("#deckCounting").html(count);
}


// 내 덱 관리 - 덱 리스트 
const myDeckList = () =>{
    $.ajax({
        type:"GET",
        url:"/deck/api/list"
    }).done((myDeck)=>{
        myDeck.forEach(deck =>{
            $("#myDeckList").append(`<span class="card" style="width:130px;height:160px" onclick="deckInCard(`+deck.id+`);"><span class="card-title">
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

// 내 덱관리의 덱 클릭시 -> 덱 포함된 카드목록
const deckInCard = id =>{
    $.ajax({
        type:"GET",
        url:"/deck/api/list/"+id
    }).done((deckInCard)=>{

    }).fail((e) =>{
        alert(e);
    })

}