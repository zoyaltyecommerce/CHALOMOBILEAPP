
document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {
    $('#btnLogin').on('click', function () {
    //    navigator.notification.alert(
    //    'hello!',
    //    alertDismissed,// message
    //    'Game Over',            // title
    //    'Done'                  // buttonName
        //);

        $(document).ready(function () {
            debugger;
      
        var username = $("#txtUsername").val();
        var password = $("#txtPassword").val();
            $.ajax({
                url: "http://localhost:7819/api/login?username="+ username +"&password="+ password +"",
                type: "Get",
                success: function (data) {
                    if (data.length > 0)
                    {
                        debugger;
                            navigator.notification.alert(
                            'Lohin Successfull',
                            alertDismissed// message
                                      // title
                                             // buttonName
                        );
                        for (var i = 0; i < data.length; i++) {

                        }
                    }
                    else
                    {

                    }
                   
                    
                },
                error: function (msg) { alert(msg); }
            });
        }); 
    })
    $('#btnhomeLogin').on('click', function () {
        //    navigator.notification.alert(
        //    'hello!',
        //    alertDismissed,// message
        //    'Game Over',            // title
        //    'Done'                  // buttonName
        //);

        $(document).ready(function () {

            location.href = "Login.html";
        });
    })
    $('#btnhomeregister').on('click', function () {
        //    navigator.notification.alert(
        //    'hello!',
        //    alertDismissed,// message
        //    'Game Over',            // title
        //    'Done'                  // buttonName
        //);

        $(document).ready(function () {

            location.href = "Register.html";
        });
    })
    $('#btnnext').on('click', function () {
        $(document).ready(function () {
        debugger;
        var firstname = document.getElementById('txtregisterlastname').value;
        var lastname = document.getElementById('txtregisterlastname').value;
        var email = document.getElementById('txtregisteremail').value; 
        var pass = document.getElementById('txtregisterPassword').value; 
        var mobile = document.getElementById('txtregistermobile').value; 
       // var users = { Firstname: firstname, Lastname: lastname, Email: email, Pass: pass, Mobile: mobile };
        $.ajax({
            url: "http://localhost:7819/api/Register?Firstname="+ firstname +"&Lastname="+ lastname +"&Email="+ email +"&Pass="+ pass +"&Mobile="+ mobile +"",
            type: "Post",
            
           // contentType: 'application/json; charset=utf-8',
            success: function (data) {
                if (data.length > 0) {
                 
                    for (var i = 0; i < data.length; i++) {

                    }
                }
                else {

                }


            },
            error: function (msg) { alert(msg); }
        });
        });
    })
}

// alert dialog dismissed
function alertDismissed() {
    // do something
    
}

// Show a custom alert
//
function register() {
    navigator.notification.alert(
        'hello!',  // message
        'Game Over',            // title
        'Done'                  // buttonName
    );
}