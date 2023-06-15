const join = () => {

    let param = {
    "userName": $("#userName").val(),
    "email": $("#email").val(),
    "passWord": $("#password").val()
    }

        $.ajax({
            type: "post",
            url: "/user/join",
            data: JSON.stringify(param),
            contentType: "application/json"
        }).done((res) =>{
            location.href="/";
        }).fail((res) =>{
            console.log(res);
        })
}


