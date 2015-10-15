// For an introduction to the Blank template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkID=397704
// To debug code on page load in Ripple or on Android devices/emulators: launch your app, set breakpoints, 
// and then run "window.location.reload()" in the JavaScript Console.
(function () {
    "use strict";

    document.addEventListener( 'deviceready', onDeviceReady.bind( this ), false );

    function onDeviceReady() {
        // Handle the Cordova pause and resume events
        document.addEventListener( 'pause', onPause.bind( this ), false );
        document.addEventListener( 'resume', onResume.bind( this ), false );
        $(document).ready(function () {
          
           // checklocalstorage();
            
        });
        // TODO: Cordova has been loaded. Perform any initialization that requires Cordova here.
     
        
  
    };

    function checklocalstorage()
    {
        if(localStorage.CHALO_USER!=null && localStorage.CHALO_USER!="")
        {
            location.href = "search.html";
        }
    }

    function getlocations() {
        
        var result;
        $.ajax({
            url: "http://localhost:7819/api/search",
            type: "Get",
            success: function (data) {
                if (data.length > 0) {
                    debugger
                   
                    //    navigator.notification.alert(
                    //    'Lohin Successfull',
                    //    alertDismissed// message
                    //              // title
                    //                     // buttonName
                    //);
                    var locations = "";
                    for (var i = 0; i < data.length; i++) {
                        locations = locations+"<option value='" + data[i]["LOCATION_ID"] + "'>" + data[i]["LOCATION_NAME"] + "</option>";
                    }
                    document.getElementById('select_pickup').innerHTML = locations;
                    document.getElementById('select_drop').innerHTML = locations;
                }
                else {

                }


            },
            error: function (msg) { }
        });
        return result;
    }
    function onPause() {
        // TODO: This application has been suspended. Save application state here.
    };

    function onResume() {
        // TODO: This application has been reactivated. Restore application state here.
    };
} )();