const join = () => {

    let param = {
    "username": $("#username").val(),
    "nickname": $("#nickname").val(),
    "password": $("#password").val()
    }

        $.ajax({
            type: "post",
            url: "/join",
            data: JSON.stringify(param),
            contentType: "application/json"
        }).done((res) =>{
            location.href="/";
        }).fail((errors) =>{
            alert(errors.responseJSON[0].message);
        })
}


