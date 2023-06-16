const dbCardList = () =>{

    $.ajax({
        type:"GET",
        url:"/card/api"
    }).done((cardList) =>{
        cardList.forEach(cardList =>{
            $("#deckDbCardList").append(`<li class="card" style="width:80px"
                                      onclick="dbCardDetail('`+cardList.id+`')">
                                      <img class="card-img-top" src="`+cardList.image+`" alt="Card image">
                                      </li>`)
        })
    }).fail((e) =>{
        console.log("error:"+e);
    });
}