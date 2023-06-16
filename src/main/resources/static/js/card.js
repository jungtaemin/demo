
const dbCardList = () =>{

    $.ajax({
        type:"GET",
        url:"/card/api"
    }).done((cardList) =>{
        console.log(cardList);
        cardList.forEach(cardList =>{
            $("#cardFindAll").append(`<div class="card" style="width:110px"
                                      onclick="dbCardDetail('`+cardList.id+`')">
                                      <img class="card-img-top" src="`+cardList.image+`" alt="Card image">
                                      <div class="card-body"><div class="smallContentFont">`+cardList.name+`</div></div>
                                      </div>`)
        })
    }).fail((e) =>{
        console.log("error:"+e);
    });
}




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