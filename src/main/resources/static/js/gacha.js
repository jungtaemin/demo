const gachaList = () =>{
    $.ajax({
        type:"GET",
        url:"/gacha/api"
    }).done(gachaList =>{
        gachaList.forEach(gacha =>{
              $(".gacha-list").append(`
                 <div id="gacha-type-id"><div class="gacha-type" onclick="gachaTypeClick(`+gacha.image+`);"><img src="`+gacha.image+`"/></div></div>
                `);  
        });
        
    }).fail((e)=>{
        alert(e);
    });
}


const gachaTypeClick = image =>{
    $(".gacha-bigImage").css("background-image","url("+image+")");
    $("#gacha-type-id").addClass("gacha-type-color");
}

