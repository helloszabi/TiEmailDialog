var common = require('common');

// Example 1: opening the dialog with default options
$.openFeedbackButton1.addEventListener("click", function(){
    common.openEmailDialog();
});

// Example 2: overriding some options
$.openFeedbackButton2.addEventListener("click", function(){
    common.openEmailDialog({
        subject: "You're the best!",
        setHTML: false,
        notSupportedAlertTitle: "Ouch"
    });
});

