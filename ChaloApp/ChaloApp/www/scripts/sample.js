
document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {
    $('#btn_signupback').on('click', function () {
        location.href = "index.html";
    });
    //$(document).ready(function () {
    //    debugger;
    //    $('.loadwrapper')
    //        .hide()
    //        .ajaxStart(function () {
    //            $(this).show();
    //        })
    //        .ajaxStop(function () {
    //            $(this).hide();
    //        });
    //});
    function checkEmail(emailnew) {

        var email = emailnew
        var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

        if (!filter.test(email)) {
            
           
            return false;
        }
        else
        {
            return true;
        }
      
   
       
    }
    function mobileValidate(mobileno) {
       // var x = document.form1.txtPhone.value;
        var y = mobileno;
       

        if (isNaN(y) || y.indexOf(" ") != -1) {
            
            return "alphabets are not allowed in mobile number";
        }
       else if (y.length > 10) {
           
            return "Only 10 numericals are allowed in mobile number";
       }
       else
       {
           return "true";
       }
       
    }
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
            if (username != "")
            {
                if(password!="")
                {
                    if(checkEmail(username))
                    {
                        $('.loadwrapper').show();

                        $.ajax({
                            url: "http://localhost:7819/api/login?username=" + username + "&password=" + password + "",
                            type: "Get",
                            success: function (data) {
                                $('.loadwrapper').hide();
                                if (data.length > 0) {
                                   
                                    localStorage.setItem("CHALO_USER", JSON.stringify(data[0]))
                                    location.href = "search.html";
                                }
                                else {
                                    document.getElementById('lbl_error').innerHTML = "Incorrect Email or Password";

                                    document.getElementById('lbl_error').style.display = "inline-block";
                                    //  alert('Email or password wrong');
                                }


                            },
                            error: function (msg) { $('.loadwrapper').hide(); }
                        });
                    }
                    else
                    {
                        document.getElementById('lbl_error').style.display = "inline-block";
                        document.getElementById('lbl_error').innerHTML = "Please enter a valid Email";
                    }
                }
                else
                {
                    document.getElementById('lbl_error').style.display = "inline-block";
                    document.getElementById('lbl_error').innerHTML = "Please enter Password";
                }
            }
            else
            {
                document.getElementById('lbl_error').style.display = "inline-block";
                document.getElementById('lbl_error').innerHTML = "Please enter Email";
            }
          
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

            var firstname = document.getElementById('txtregisterfirstname').value;

            var email = document.getElementById('txtregisteremail').value;
            var pass = document.getElementById('txtregisterPassword').value;
            var mobile = document.getElementById('txtregistermobile').value;
            var Couponcode = document.getElementById('txtcoupon').value;
            document.getElementById('lbl_error').style.display = "none";
           
            if (firstname != "")
            {
                if(email!="")
                {
                    if(pass!="")
                    {
                        if(mobile!="")
                        {
                            if(checkEmail(email))
                            {
                                var mobv = mobileValidate(mobile);
                                if(mobv=="true")
                                {
                                   
                                    $('.loadwrapper').show();
                                    $.ajax({
                                        url: "http://localhost:7819/api/Register?Firstname=" + firstname + "&Email=" + email + "&Pass=" + pass + "&Mobile=" + mobile + "&code=" + Couponcode + "",
                                        type: "Post",

                                        // contentType: 'application/json; charset=utf-8',
                                        success: function (data) {
                                            $('.loadwrapper').hide();
                                            if (data.id == "userexist") {
                                               
                                                document.getElementById('lbl_error').innerHTML = "Email or Mobile already exist";
                                              
                                                document.getElementById('lbl_error').style.display = "inline-block";
                                               
                                                //for (var i = 0; i < data.length; i++) {

                                                //}
                                            }
                                            else if (data.id == "coupondoesnotexist") {
                                               
                                                document.getElementById('lbl_error').innerHTML = "Enter a valid coupon";

                                                document.getElementById('lbl_error').style.display = "inline-block";
                                                document.getElementById('txtcoupon').focus();
                                            }
                                            else {
                                                location.href = "search.html";
                                            }


                                        },
                                        error: function (msg) { $('.loadwrapper').hide(); }
                                    });
                                   
                                }
                                else
                                {
                                    document.getElementById('lbl_error').innerHTML = mobv;
                                    document.getElementById('txtregistermobile').focus();
                                    document.getElementById('lbl_error').style.display = "inline-block";
                                }
                            }
                            else
                            {
                                document.getElementById('lbl_error').innerHTML = "Please enter a valid Email";
                                document.getElementById('lbl_error').style.display = "inline-block";
                                document.getElementById('txtregisteremail').focus();
                            }
                        }
                        else
                        {
                            document.getElementById('lbl_error').innerHTML = "Please enter Mobile number";
                            document.getElementById('lbl_error').style.display = "inline-block";
                            document.getElementById('txtregistermobile').focus();
                        }
                    }
                    else
                    {
                        
                        document.getElementById('lbl_error').innerHTML = "Please enter Password";
                        document.getElementById('lbl_error').style.display = "inline-block";
                        document.getElementById('txtregisterPassword').focus();
                    }
                }
                else
                {
                    document.getElementById('lbl_error').innerHTML = "Please enter Email";
                    document.getElementById('lbl_error').style.display = "inline-block";
                    document.getElementById('txtregisteremail').focus();
                }
            }
            else
            {
                document.getElementById('lbl_error').innerHTML = "Please enter First Name";
                document.getElementById('lbl_error').style.display = "inline-block";
                document.getElementById('txtregisterfirstname').focus();
            }
            // var users = { Firstname: firstname, Lastname: lastname, Email: email, Pass: pass, Mobile: mobile };
          
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