// 카드목록을 가져오는 로직
const dbCardList = () =>{

    $.ajax({
        type:"GET",
        url:"/card/api"
    }).done((cardList) =>{
        $("#deckDbCardList").html("");
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



// 키워드 검색 로직
const searchKeyword = keyword => {

        $.ajax({
            type:"GET",
            url:"/card/api/search?keyword="+keyword
        }).done((cardList) =>{
            $("#deckDbCardList").html("");
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
        $("#myDeckList").html("");
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
    let deckId= id;
    $.ajax({
        type:"GET",
        url:"/deck/api/list/"+deckId
    }).done((deckInCard)=>{
        console.log(deckInCard);
        $("#deckInCardList").html("");
            $("#deckInCardList").append(`
                <span class="deck-card"><img id="cardImg1" style="width: 9%;margin-bottom:7px;" src="`+deckInCard.image1+`" onerror="this.src='/images/deckMaker_defaultImg.png'"></span>
                <span class="deck-card"><img id="cardImg2" style="width: 9%;margin-bottom:7px;" src="`+deckInCard.image2+`" onerror="this.src='/images/deckMaker_defaultImg.png'"></span>
                <span class="deck-card"><img id="cardImg3" style="width: 9%;margin-bottom:7px;" src="`+deckInCard.image3+`" onerror="this.src='/images/deckMaker_defaultImg.png'"></span>
                <span class="deck-card"><img id="cardImg4" style="width: 9%;margin-bottom:7px;" src="`+deckInCard.image4+`" onerror="this.src='/images/deckMaker_defaultImg.png'"></span>
                <span class="deck-card"><img id="cardImg5" style="width: 9%;margin-bottom:7px;" src="`+deckInCard.image5+`" onerror="this.src='/images/deckMaker_defaultImg.png'"></span>
                <span class="deck-card"><img id="cardImg6" style="width: 9%;margin-bottom:7px;" src="`+deckInCard.image6+`" onerror="this.src='/images/deckMaker_defaultImg.png'"></span>
                <span class="deck-card"><img id="cardImg7" style="width: 9%;margin-bottom:7px;" src="`+deckInCard.image7+`" onerror="this.src='/images/deckMaker_defaultImg.png'"></span>
                <span class="deck-card"><img id="cardImg8" style="width: 9%;margin-bottom:7px;" src="`+deckInCard.image8+`" onerror="this.src='/images/deckMaker_defaultImg.png'"></span>
                <span class="deck-card"><img id="cardImg9" style="width: 9%;margin-bottom:7px;" src="`+deckInCard.image9+`" onerror="this.src='/images/deckMaker_defaultImg.png'"></span>
                <span class="deck-card"><img id="cardImg10" style="width: 9%;margin-bottom:7px;" src="`+deckInCard.image10+`" onerror="this.src='/images/deckMaker_defaultImg.png'"></span>
                <span class="deck-card"><img id="cardImg11" style="width: 9%;margin-bottom:7px;" src="`+deckInCard.image11+`" onerror="this.src='/images/deckMaker_defaultImg.png'"></span>
                <span class="deck-card"><img id="cardImg12" style="width: 9%;margin-bottom:7px;" src="`+deckInCard.image12+`" onerror="this.src='/images/deckMaker_defaultImg.png'"></span>
                <span class="deck-card"><img id="cardImg13" style="width: 9%;margin-bottom:7px;" src="`+deckInCard.image13+`" onerror="this.src='/images/deckMaker_defaultImg.png'"></span>
                <span class="deck-card"><img id="cardImg14" style="width: 9%;margin-bottom:7px;" src="`+deckInCard.image14+`" onerror="this.src='/images/deckMaker_defaultImg.png'"></span>
                <span class="deck-card"><img id="cardImg15" style="width: 9%;margin-bottom:7px;" src="`+deckInCard.image15+`" onerror="this.src='/images/deckMaker_defaultImg.png'"></span>
                <span class="deck-card"><img id="cardImg16" style="width: 9%;margin-bottom:7px;" src="`+deckInCard.image16+`" onerror="this.src='/images/deckMaker_defaultImg.png'"></span>
                <span class="deck-card"><img id="cardImg17" style="width: 9%;margin-bottom:7px;" src="`+deckInCard.image17+`" onerror="this.src='/images/deckMaker_defaultImg.png'"></span>
                <span class="deck-card"><img id="cardImg18" style="width: 9%;margin-bottom:7px;" src="`+deckInCard.image18+`" onerror="this.src='/images/deckMaker_defaultImg.png'"></span>
                <span class="deck-card"><img id="cardImg19" style="width: 9%;margin-bottom:7px;" src="`+deckInCard.image19+`" onerror="this.src='/images/deckMaker_defaultImg.png'"></span>
                <span class="deck-card"><img id="cardImg20" style="width: 9%;margin-bottom:7px;" src="`+deckInCard.image20+`" onerror="this.src='/images/deckMaker_defaultImg.png'"></span>
                <span class="deck-card"><img id="cardImg21" style="width: 9%;margin-bottom:7px;" src="`+deckInCard.image21+`" onerror="this.src='/images/deckMaker_defaultImg.png'"></span>
                <span class="deck-card"><img id="cardImg22" style="width: 9%;margin-bottom:7px;" src="`+deckInCard.image22+`" onerror="this.src='/images/deckMaker_defaultImg.png'"></span>
                <span class="deck-card"><img id="cardImg23" style="width: 9%;margin-bottom:7px;" src="`+deckInCard.image23+`" onerror="this.src='/images/deckMaker_defaultImg.png'"></span>
                <span class="deck-card"><img id="cardImg24" style="width: 9%;margin-bottom:7px;" src="`+deckInCard.image24+`" onerror="this.src='/images/deckMaker_defaultImg.png'"></span>
                <span class="deck-card"><img id="cardImg25" style="width: 9%;margin-bottom:7px;" src="`+deckInCard.image25+`" onerror="this.src='/images/deckMaker_defaultImg.png'"></span>
                <span class="deck-card"><img id="cardImg26" style="width: 9%;margin-bottom:7px;" src="`+deckInCard.image26+`" onerror="this.src='/images/deckMaker_defaultImg.png'"></span>
                <span class="deck-card"><img id="cardImg27" style="width: 9%;margin-bottom:7px;" src="`+deckInCard.image27+`" onerror="this.src='/images/deckMaker_defaultImg.png'"></span>
                <span class="deck-card"><img id="cardImg28" style="width: 9%;margin-bottom:7px;" src="`+deckInCard.image28+`" onerror="this.src='/images/deckMaker_defaultImg.png'"></span>
                <span class="deck-card"><img id="cardImg29" style="width: 9%;margin-bottom:7px;" src="`+deckInCard.image29+`" onerror="this.src='/images/deckMaker_defaultImg.png'"></span>
                <span class="deck-card"><img id="cardImg30" style="width: 9%;margin-bottom:7px;" src="`+deckInCard.image30+`" onerror="this.src='/images/deckMaker_defaultImg.png'"></span>`);

                $("#deckDelete").attr("onclick","deckDeleteById("+deckId+")");
    }).fail((e) =>{
        alert(e);
    })

}



// 5장 드로우 해보기 기능
const drawSystem = () =>{
    $("#drawModal").modal("show");
    $("#drawModal-body").html("");

    for (let index = 0; index < 5; index++) {
        let randomNum = Math.floor( ( Math.random() * 30 + 1 ) );
        console.log(randomNum);
        let img = $("#cardImg"+randomNum).attr("src");
        $("#drawModal-body").append(`<span class="deck-card">
        <img  style="width: 13%;margin-bottom:7px;" src="`+img+`" onerror="this.src='/images/deckMaker_defaultImg.png'">
        </span>`);
    }

}


const deckDeleteById = deckId =>{
    $.ajax({
        type:"GET",
        url:"/deck/api/list/delete/"+deckId
    }).done(()=>{
        alert("성공적으로 덱이 삭제되었습니다.");
        myDeckList();
        $("#deckInCardList").html("");
    }).fail((e) =>{
        alert("덱 삭제에 실패하였습니다.나중에 다시 시도해주세요.");
    })
}