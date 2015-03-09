// open email dialog function
exports.openEmailDialog = function(arguments) {

    var _defaultMessage = "<br><br>";
    _defaultMessage += "Information:<br>";
    _defaultMessage += "- " + Ti.Platform.name + " v" + Ti.Platform.version + "<br>";
    _defaultMessage += "- " + Ti.App.name + " v" + Ti.App.version + "<br>";

    var options = {
        subject:                    Ti.App.name + ' feedback',
        recipients:                 ['your@emailaddress.com'],
        setHTML:                    true,
        message:                    _defaultMessage,
        notSupportedAlertTitle:     L('error', 'Error'),
        notSupportedAlertText:      L('email_is_not_available', 'Email is not available'),
        successTitle:               L('thank_you', 'Thank you!'),
        successText:                null,
    };
    _.extend(options, arguments || {});

    var emailDialog = Titanium.UI.createEmailDialog();
    if (!emailDialog.isSupported()) {
        Ti.UI.createAlertDialog({
            title: options.notSupportedAlertTitle,
            message: options.notSupportedAlertText
        }).show();
        return;
    }
    emailDialog.setSubject(options.subject);
    emailDialog.setToRecipients(options.recipients);

    emailDialog.setMessageBody(options.message);
    emailDialog.setHtml(options.setHTML);

    emailDialog.addEventListener('complete', function(e) {
        if (e.result == emailDialog.SENT) {
            Ti.UI.createAlertDialog({
                title: options.successTitle,
                message: options.successText
            }).show();
        }
    });
    emailDialog.open();
};
