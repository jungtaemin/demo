
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
                                      <div class="card-header">`+cardList.name+`</div>
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
    }).fail((e) =>{
        console.log(e);
    });
}