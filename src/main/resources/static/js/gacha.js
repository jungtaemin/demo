const gachaList = () =>{
    $.ajax({
        type:"GET",
        url:"/gacha"
    }).done(gachaList =>{
        gachaList.forEach(gacha =>{
              $(".gacha-list").append(`
                 <div class="gacha-type" onclick="gachaTypeClick(`+gacha.image+`);"><img src="`+gacha.image+`"/></div>   
                `);  
        });
        
    }).fail((e)=>{
        alert(e);
    });
}


const gachaTypeClick = image =>{
    $(".gacha-bigImage").css("background-image","url("+image+")");
    
}