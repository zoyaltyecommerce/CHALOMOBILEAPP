document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {
    
    $(document).ready(function () {
        debugger;
       getlocations();
    });

};
function getlocations() {
    var result;
    $.ajax({
        url: "http://localhost:7819/api/search",
        type: "Get",
        success: function (data) {
            if (data.length > 0) {
                result = data;
                debugger;
                //    navigator.notification.alert(
                //    'Lohin Successfull',
                //    alertDismissed// message
                //              // title
                //                     // buttonName
                //);
                for (var i = 0; i < data.length; i++) {

                }
            }
            else {

            }


        },
        error: function (msg) { }
    });
    return result;
}