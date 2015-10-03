
document.addEventListener("deviceready", onDeviceReady, false);
function onDeviceReady() {
    $('#btnLogin').on('click', function () {
        navigator.notification.alert(
        'hello!',
        alertDismissed,// message
        'Game Over',            // title
        'Done'                  // buttonName
    );
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