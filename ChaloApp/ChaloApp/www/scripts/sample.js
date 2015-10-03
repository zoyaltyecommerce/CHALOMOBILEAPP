
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
      
        var username = $("#txtUsername").val();
        var password = $("#txtPassword").val();
            $.ajax({
                url: "http://localhost:7819/api/login?username="+ username +"&password="+ password +"",
                type: "Get",
                success: function (data) {
                    if (data.length > 0)
                    {
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