// 카드목록을 가져오는 로직
const dbCardList = () =>{

    $.ajax({
        type:"GET",
        url:"/card/api"
    }).done((cardList) =>{
        cardList.forEach(cardList =>{
            $("#deckDbCardList").append(`<li class="card" style="width:80px"
                                      onclick="listClickOndeck('`+cardList.id+`','`+cardList.image+`','`+cardList.limit+`')">
                                      <img class="card-img-top" src="`+cardList.image+`" alt="Card image">
                                      </li>`)
        })
    }).fail((e) =>{
        console.log("error:"+e);
    });
}
// 카드목록 ->카드 클릭시 덱목록으로 쌓이는 로직 - 최대 30장 제한
const listClickOndeck = (id,imagePath,limit) => {
       let count  = $("#deckMakeClickList > span").length;
       if(count <30){
                limitCheckAndAddDeckCard(id,imagePath,limit);
                dbCardDetail(id);
       }else{
            alert("덱의 최대 장수는 30장입니다.");
       }

}

// 카드 제거 
const cardRemove = (card) =>{
    card.remove();
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

// 카드 리미트 체크 
const limitCheckAndAddDeckCard = (id,imagePath,limit) =>  {
    let cnt = $("#deckMakeClickList > span[data-cardId="+id+"]").length;
    if(cnt >=limit){
        alert("이카드는 덱에"+limit+"장까지밖에 넣을 수 없습니다.");
    }else{
        $("#deckMakeClickList").append(`<span oncontextmenu="cardRemove(this);return false;" class="deck-card" data-cardid="`+id+`"><img style="width: 10%;margin-bottom:7px;" src="`+imagePath+`"></span>`);
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
    });
    
    $.ajax({
        type:"POST",
        url:"/deck",
        contentType:"application/json",
        data:JSON.stringify(deck)
    }).done(() =>{

    }).fail(() =>{

    });
}
