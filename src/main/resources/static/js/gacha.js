let gachaClick;

// 뽑기 종류 리스트
const gachaList = () =>{
    $.ajax({
        type:"GET",
        url:"/gacha/api"
    }).done(gachaList =>{
        gachaList.forEach(gacha =>{
              $(".gacha-list").append(`
                 <div class="gacha-type" onclick="gachaTypeClick(`+gacha.id+`,'`+gacha.image+`');"><img style="width:155px" src="`+gacha.image+`"/></div>
                `);  
        });
        
    }).fail((e)=>{
        alert(e);
    });
}

// 뽑기 종류 클릭시
const gachaTypeClick = (id,image) =>{

    if(id ==3){
        alert("준비중입니다.");
    }else{
        $(".gacha-bigImage").css("background-image","url("+image+")");
        gachaClick = id;
        $("#gachaResult").html("");
        $("#gachaNum").val(1);
    }

    gachaId = [];
    gachaPer = [];
    gachaImage = [];
    $.ajax({
        type:"GET",
        url:"/gachaCard/api/"+id
    }).done(gachaList =>{
         gachaList.forEach(gachaCard =>{
                gachaId.push(gachaCard.id);
                gachaPer.push(gachaCard.percentage);
                gachaImage.push(gachaCard.image);
         });
    }).fail((e)=>{
       alert(e);
    });

    console.log(gachaImage);
}
// 구성품확인 리스트
const gachaCardListBtn= () =>{

    if(gachaClick ==null){
        alert("가챠 종류를 선택해주세요");
    }else{
           $("#gachaModal").modal("show");
            $(".card-rarity").html("");

            let gachaId= gachaClick;
            $.ajax({
                type:"GET",
                url:"/gachaCard/api/"+gachaId
            }).done(gachaList =>{
                 gachaList.forEach(gachaCard =>{
                      console.log(gachaCard.rarity);
                      if(gachaCard.rarity == "유니크"){
                        console.log("1")
                        $("#card-unique").append(`<span class="gacha-card">
                        <img  style="width: 13%;margin-bottom:7px;" src="`+gachaCard.image+`" onerror="this.src='/images/deckMaker_defaultImg.png'">
                        </span>`);
                        }else if(gachaCard.rarity == "레어"){
                            console.log("2")
                            $("#card-rare").append(`<span class="gacha-card">
                            <img  style="width: 13%;margin-bottom:7px;" src="`+gachaCard.image+`" onerror="this.src='/images/deckMaker_defaultImg.png'">
                            </span>`);

                        }else if(gachaCard.rarity == "슈페리어"){
                            console.log("3")
                            $("#card-superior").append(`<span class="gacha-card">
                            <img  style="width: 13%;margin-bottom:7px;" src="`+gachaCard.image+`" onerror="this.src='/images/deckMaker_defaultImg.png'">
                            </span>`);

                        } else if(gachaCard.rarity == "언커먼"){
                            console.log("4")
                            $("#card-uncommon").append(`<span class="gacha-card">
                            <img  style="width: 13%;margin-bottom:7px;" src="`+gachaCard.image+`" onerror="this.src='/images/deckMaker_defaultImg.png'">
                            </span>`);

                        } else if(gachaCard.rarity == "커먼"){
                            console.log("5")
                            $("#card-common").append(`<span class="gacha-card">
                            <img  style="width: 13%;margin-bottom:7px;" src="`+gachaCard.image+`" onerror="this.src='/images/deckMaker_defaultImg.png'">
                            </span>`);

                        }

                 });

            }).fail((e)=>{
               alert(e);
            });
    }


}
// 수량 증가버튼 (10 click->1)
const rightBtn = () => {
    let number = $("#gachaNum").val();
    let num = parseInt(number);
        if(num == 10){
            $("#gachaNum").val(1);
        }else{
            $("#gachaNum").val(num+1);
        }
}

// 수량 감소버튼 (1 click ->10)
const leftBtn = () => {
    let number = $("#gachaNum").val();
    let num = parseInt(number);
    if(num == 1){
        $("#gachaNum").val(10);
    }else{
        $("#gachaNum").val(num-1);
    }

}


// 뽑기 계산 로직(구매버튼)
const buyBtn = () =>{

                $("#gachaResult").html("");

                //랜덤값 생성 (1~100)
                const ranNum = Math.floor((Math.random() * 99) +1)
                console.log(ranNum);
                //리턴 경품 값
                let res = ''
                // 가챠 뽑기 횟수
                let gachaCnt = parseInt($("#gachaNum").val());
                //쉐도우 뽑기 확률 계산
                if(gachaClick == 1){
                         for (let i = 1; i <= gachaCnt; i++)
                                        {
                                        let randombox = Math.random() * 100;
                                        console.log(randombox);
                                        if ( 0 <= randombox && randombox <=1){
                                                console.log("유니크");
                                                $.ajax({
                                                    type:"GET",
                                                    url:"/gachaCard/api/rarity?rarity=유니크&gacha_id=1",
                                                    contentType: 'application/x-www-form-urlencoded; charset=euc-kr'
                                                }).done(gachaCardList =>{
                                                     let num = Math.floor(Math.random() * gachaCardList.length);
                                                     const card = gachaCardList[num];
                                                            $("#gachaResult").append(`<span class="gacha-card">
                                                            <img  style="width:105px;margin:5px;" src="`+card.image+`" onerror="this.src='/images/deckMaker_defaultImg.png'">
                                                            <div style="height:50px;" class="smallContentFont">`+card.name+`</div><p class="smallContentFont">`+card.rarity+`</p></span>`);

                                                     }).fail((e)=>{
                                                   alert(e);
                                                });
                                            }

                                        else if (2 <= randombox && randombox <= 3.5){
                                            console.log("레어");
                                                $.ajax({
                                                    type:"GET",
                                                    url:"/gachaCard/api/rarity?rarity=레어&gacha_id=1",
                                                    contentType: 'application/x-www-form-urlencoded; charset=euc-kr'
                                                }).done(gachaCardList =>{
                                                     let num = Math.floor(Math.random() * gachaCardList.length);
                                                     const card = gachaCardList[num];
                                                            $("#gachaResult").append(`<span class="gacha-card">
                                                            <img  style="width:105px;margin:5px;" src="`+card.image+`" onerror="this.src='/images/deckMaker_defaultImg.png'">
                                                            <div style="height:50px;" class="smallContentFont">`+card.name+`</div><p class="smallContentFont">`+card.rarity+`</p></span>`);

                                                     }).fail((e)=>{
                                                   alert(e);
                                                });
                                            }

                                        else if(3.5 <= randombox && randombox <= 6.5){
                                            console.log("슈페리어");
                                                $.ajax({
                                                    type:"GET",
                                                    url:"/gachaCard/api/rarity?rarity=슈페리어&gacha_id=1",
                                                    contentType: 'application/x-www-form-urlencoded; charset=euc-kr'
                                                }).done(gachaCardList =>{
                                                     let num = Math.floor(Math.random() * gachaCardList.length);
                                                     const card = gachaCardList[num];
                                                            $("#gachaResult").append(`<span class="gacha-card">
                                                            <img  style="width:105px;margin:5px;" src="`+card.image+`" onerror="this.src='/images/deckMaker_defaultImg.png'">
                                                            <div style="height:50px;" class="smallContentFont">`+card.name+`</div><p class="smallContentFont">`+card.rarity+`</p></span>`);

                                                     }).fail((e)=>{
                                                   alert(e);
                                                });
                                            }

                                        else if(6.5 <= randombox && randombox <= 36.5){
                                            console.log("언커먼");
                                                $.ajax({
                                                    type:"GET",
                                                    url:"/gachaCard/api/rarity?rarity=언커먼&gacha_id=1",
                                                    contentType: 'application/x-www-form-urlencoded; charset=euc-kr'
                                                }).done(gachaCardList =>{
                                                     let num = Math.floor(Math.random() * gachaCardList.length);
                                                     const card = gachaCardList[num];
                                                            $("#gachaResult").append(`<span class="gacha-card">
                                                            <img  style="width:105px;margin:5px;" src="`+card.image+`" onerror="this.src='/images/deckMaker_defaultImg.png'">
                                                            <div style="height:50px;" class="smallContentFont">`+card.name+`</div><p class="smallContentFont">`+card.rarity+`</p></span>`);

                                                     }).fail((e)=>{
                                                   alert(e);
                                                });
                                            }
                                        else{
                                            console.log("커먼");
                                                $.ajax({
                                                    type:"GET",
                                                    url:"/gachaCard/api/rarity?rarity=커먼&gacha_id=1",
                                                    contentType: 'application/x-www-form-urlencoded; charset=euc-kr'
                                                }).done(gachaCardList =>{
                                                     let num = Math.floor(Math.random() * gachaCardList.length);
                                                     const card = gachaCardList[num];
                                                            $("#gachaResult").append(`<span class="gacha-card">
                                                            <img  style="width:105px;margin:5px;" src="`+card.image+`" onerror="this.src='/images/deckMaker_defaultImg.png'">
                                                            <div style="height:50px;" class="smallContentFont">`+card.name+`</div><p class="smallContentFont">`+card.rarity+`</p></span>`);

                                                     }).fail((e)=>{
                                                   alert(e);
                                                });
                                        }
                                    }
                //유니크 확정팩 확률 계산                        
                }else if(gachaClick == 2){
                    for (let i = 1; i <= gachaCnt; i++){
                        $.ajax({
                            type:"GET",
                            url:"/gachaCard/api/rarity?gacha_id=2",
                            contentType: 'application/x-www-form-urlencoded; charset=euc-kr'
                        }).done(gachaCardList =>{
                            console.log(gachaCardList);
                             let num = Math.floor(Math.random() * gachaCardList.length);
                             const card = gachaCardList[num];
                                    $("#gachaResult").append(`<span class="gacha-card">
                                    <img  style="width:105px;margin:5px;" src="`+card.image+`" onerror="this.src='/images/deckMaker_defaultImg.png'">
                                    <div style="height:50px;" class="smallContentFont">`+card.name+`</div><p class="smallContentFont">`+card.rarity+`</p></span>`);
    
                             }).fail((e)=>{
                           alert(e);
                        });   
                    }
                }else{
                    alert("가챠 종류를 선택해주세요");
                }
}




// 등급별 카드 확률 모달창
const gachaPercentageListBtn= () =>{

    $("#gachaPercentage-modal-body").html("");

    // 쉐도우 뽑기 확률
    if(gachaClick == 2){
                $("#gachaPercentageModal").modal("show");
                $("#gachaPercentage-modal-body").html(`
                <table style="border:1px solid;width:700px;">
                    <tr>
                        <th><div class="contentFont">등급</div></th>
                        <th><div class="contentFont">확률</div></th>
                    </tr>
                    <tr>
                        <td><div class="contentFont">유니크</div></td>
                        <td><div class="contentFont">100%</div></td>
                    </tr>
                </table>
                `);

    }else if(gachaClick == 1){
            $("#gachaPercentageModal").modal("show");
            $("#gachaPercentage-modal-body").html(`
            <table style="border:1px solid;width:700px;">
                <tr>
                    <th><div class="contentFont">등급</div></th>
                    <th><div class="contentFont">확률</div></th>
                </tr>
                <tr>
                    <td><div class="contentFont">커먼</div></td>
                    <td><div class="contentFont">64.5%</div></td>
                </tr>
                <tr>
                    <td><div class="contentFont">언커먼</div></td>
                    <td><div class="contentFont">30%</div></td>
                </tr>
                <tr>
                    <td><div class="contentFont">슈페리어</div></td>
                    <td><div class="contentFont">3%</div></td>
                </tr>
                <tr>
                    <td><div class="contentFont">레어</div></td>
                    <td><div class="contentFont">1.5%</div></td>
                </tr>
                <tr>
                    <td><div class="contentFont">유니크</div></td>
                    <td><div class="contentFont">1%</div></td>
                </tr>
            </table>
            `);

    }else{
        alert("가챠 종류를 선택해주세요");
          }

}