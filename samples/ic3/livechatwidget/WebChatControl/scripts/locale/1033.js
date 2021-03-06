
//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

// -----------------------------------------------------------------------
// <copyright file="Locale.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------

var Microsoft;
(function (Microsoft) {
    var Omnichannel;
    (function (Omnichannel){
        var LiveChatWidget;
        (function (LiveChatWidget) {
                var Locale = (function () {
                function Locale() {
                }
                Locale.ALT_IMAGE_CLOSE_BUTTON = decodeURIComponent("Select%20to%20close%20error%20notification");
              Locale.ALT_IMAGE_TRANSCRIPT_DOWNLOAD_ICON = decodeURIComponent("Transcript%20Download%20Icon");
              Locale.ALT_IMAGE_TRANSCRIPT_EMAIL_ICON = decodeURIComponent("Transcript%20Email%20Icon");
              Locale.BANNER_ERROR_MESSAGE = decodeURIComponent("Upload%20failed%2C%20please%20try%20again.");
              Locale.BANNER_ERROR_NOTIFICATION = decodeURIComponent("Error%20notification");
              Locale.BANNER_FILE_EXTENSION_ERROR = decodeURIComponent("%7B0%7D%20files%20are%20not%20supported.");
              Locale.BANNER_FILE_NULL_ERROR = decodeURIComponent("There%20was%20an%20error%20uploading%20the%20file%2C%20please%20try%20again.");
              Locale.BANNER_FILE_SIZE_ERROR = decodeURIComponent("File%20exceeds%20the%20allowed%20limit%20of%20%7B0%7D%20MB.");
              Locale.BANNER_FILE_SIZE_EXTENSION_ERROR = decodeURIComponent("File%20exceeds%20the%20allowed%20limit%20of%20%7B0%7D%20MB%20and%20%7B1%7D%20files%20are%20not%20supported.");
              Locale.BANNER_FILE_SIZE_WITHOUT_EXTENSION_ERROR = decodeURIComponent("File%20exceeds%20the%20allowed%20limit%20of%20%7B0%7D%20MB%20and%20please%20upload%20the%20file%20with%20an%20appropriate%20file%20extension.");
              Locale.BANNER_FILE_WITHOUT_EXTENSION = decodeURIComponent("File%20upload%20error.%20Please%20upload%20the%20file%20with%20an%20appropriate%20file%20extension.");
              Locale.BANNER_FILE_IS_EMPTY_ERROR = decodeURIComponent("This%20file%20can't%20be%20attached%20because%20it's%20empty.%20Please%20try%20again%20with%20a%20different%20file.");
              Locale.CHAT_BUTTON_ICON_ALT = decodeURIComponent("chat%20button%20icon");
              Locale.CLOSE_CHAT = decodeURIComponent("Close");
              Locale.CLOSE_CONFIRMATION_DIALOG_CANCELTITLE = decodeURIComponent("Cancel");
              Locale.CLOSE_CONFIRMATION_DIALOG_CONFIRMTITLE = decodeURIComponent("Close");
              Locale.CLOSE_CONFIRMATION_DIALOG_DESCRIPTION = decodeURIComponent("Do%20you%20really%20want%20to%20close%20this%20chat%3F");
              Locale.CLOSE_CONFIRMATION_POPOUT_WINDOW_DIALOG_DESCRIPTION = decodeURIComponent("Leaving%20this%20page%20will%20end%20your%20conversation");
              Locale.CLOSE_CONFIRMATION_DIALOG_TITLE = decodeURIComponent("Close%20chat");
              Locale.CLOSE_ERROR_BANNER_BUTTON = decodeURIComponent("Close%20error%20banner");
              Locale.CLOSE_LCW_ALT = decodeURIComponent("Close%20live%20chat%20widget");
              Locale.DEFAULT_ATTACHMENT_MESSAGE = decodeURIComponent("The%20following%20attachment%20was%20uploaded%20during%20the%20conversation%3A");
              Locale.DEFAULT_IMAGE_ALT_STRING = decodeURIComponent("Chat%20widget%20logo");
              Locale.DOWNLOAD_TRANSCRIPT_FAILED_ERROR_MESSAGE = decodeURIComponent("An%20error%20occurred%20while%20downloading%20the%20chat%20transcript.");
              Locale.DOWNLOAD_TRANSCRIPT_TOOLTIP_MESSAGE = decodeURIComponent("Download%20chat%20transcript");
              Locale.EMAIL_ADDRESS_NOT_VALID_ERROR_MESSAGE = decodeURIComponent("Enter%20a%20valid%20email%20address.");
              Locale.EMAIL_TRANSCRIPT_BUTTON_TITLE = decodeURIComponent("Email%20transcript");
              Locale.EMAIL_TRANSCRIPT_DIALOG_CANCEL_REQUEST_BUTTON = decodeURIComponent("Cancel");
              Locale.EMAIL_TRANSCRIPT_DIALOG_DESCRIPTION = decodeURIComponent("This%20will%20be%20sent%20after%20your%20chat%20ends.");
              Locale.EMAIL_TRANSCRIPT_DIALOG_INPUT_LABEL = decodeURIComponent("Email%20this%20chat%20transcript.%20This%20will%20be%20sent%20after%20your%20chat%20ends.%20Email%20address%20text%20area");
              Locale.EMAIL_TRANSCRIPT_DIALOG_SEND_REQUEST_BUTTON = decodeURIComponent("Send");
              Locale.EMAIL_TRANSCRIPT_DIALOG_TITLE = decodeURIComponent("Email%20this%20chat%20transcript");
              Locale.END_CALL_MESSAGE = decodeURIComponent("Call%20ended");
              Locale.LIVE_CHAT_AVAILABLE = decodeURIComponent("Live%20chat%20is%20available");
              Locale.LOADING_CHAT_WIDGET = decodeURIComponent("Loading%20chat%20widget");
              Locale.MINIMIZE_BUTTON_LABEL = decodeURIComponent("Minimize");
              Locale.CLOSE_BUTTON_LABEL = decodeURIComponent("Close");
              Locale.WIDGET_USE_OUTSIDE_BUSINESS_HOUR_ERROR_TITLE = decodeURIComponent("We%E2%80%99re%20currently%20offline.");
              Locale.WIDGET_USE_OUTSIDE_BUSINESS_HOUR_ERROR_SUB_TITLE = decodeURIComponent("Please%20try%20again%20during%20our%20business%20hours.");
              Locale.MINIMIZE_BUTTON_TITLE = decodeURIComponent("Minimize%20live%20chat%20widget");
              Locale.MINIMIZE_CHAT = decodeURIComponent("Minimize");
              Locale.MINIMIZE_LCW_ALT = decodeURIComponent("Minimize%20live%20chat%20widget");
              Locale.POSTCHAT_LANDMARK = decodeURIComponent("Postchat%20survey");
              Locale.PRECHAT_LANDMARK = decodeURIComponent("Prechat%20survey");
              Locale.REQUIRED_FIELD_MISSING_MESSAGE = decodeURIComponent("A%20required%20field%20cannot%20be%20empty");
              Locale.SEND_EMAIL_TRANSCRIPT_REQUEST_FAIL_ERROR_MESSAGE = decodeURIComponent("An%20error%20occurred%20while%20sending%20the%20chat%20transcript.");
              Locale.WELCOME_SCREEN_ICON_ALT = decodeURIComponent("Loading");
              Locale.WELCOME_SCREEN_LANDMARK = decodeURIComponent("live%20chat");
              Locale.WELCOME_SCREEN_LIVE_CHAT_SUPPORT_TEXT = decodeURIComponent("live%20chat%20support!");
              Locale.WELCOME_SCREEN_LOADING_TEXT = decodeURIComponent("Loading%20...");
              Locale.WELCOME_SCREEN_WELCOME_TO_TEXT = decodeURIComponent("Welcome%20to");
              Locale.POSTCHAT_RATING = decodeURIComponent("Rating");
              Locale.CLOSE_CONFIRMATION_DIALOG_DESCRIPTION_FOR_DOWNLOAD_TRANSCRIPT_ENABLED = decodeURIComponent("Select%20Cancel%20and%20then%20select%20the%20download%20icon.");
              Locale.CLOSE_CONFIRMATION_DIALOG_DESCRIPTION_FOR_EMAIL_AND_DOWNLOAD_TRANSCRIPT_ENABLED = decodeURIComponent("Select%20Cancel%20and%20then%20select%20the%20download%20or%20email%20icon.");
              Locale.CLOSE_CONFIRMATION_DIALOG_DESCRIPTION_FOR_EMAIL_TRANSCRIPT_ENABLED = decodeURIComponent("Select%20Cancel%20and%20then%20select%20the%20email%20icon.");
              Locale.CLOSE_CONFIRMATION_DIALOG_TITLE_FOR_DOWNLOAD_TRANSCRIPT_ENABLED = decodeURIComponent("Want%20a%20copy%20of%20this%20chat%3F");
              Locale.CLOSE_CONFIRMATION_DIALOG_TITLE_FOR_EMAIL_AND_DOWNLOAD_TRANSCRIPT_ENABLED = decodeURIComponent("Want%20a%20copy%20of%20this%20chat%3F");
              Locale.CLOSE_CONFIRMATION_DIALOG_TITLE_FOR_EMAIL_TRANSCRIPT_ENABLED = decodeURIComponent("Want%20a%20copy%20of%20this%20chat%3F");
              Locale.PROACTIVE_CHAT_ACCEPT = decodeURIComponent("Chat%20Now");
              Locale.PROACTIVE_CHAT_BANNER_WELCOME_TO_TEXT = decodeURIComponent("Welcome%20to");
              Locale.PROACTIVE_CHAT_BANNER_LIVE_CHAT_SUPPORT_TEXT = decodeURIComponent("Live%20chat%20support!");
              Locale.PROACTIVE_CHAT_WELCOME_MESSAGE = decodeURIComponent("Hi!%20Have%20any%20questions%3F%20I%E2%80%99m%20here%20to%20help.");
              Locale.CLOSE_INCOMING_PROACTIVE_CHAT = decodeURIComponent("Close");
              Locale.LOADING_TEXT = decodeURIComponent("Loading%20...");
              Locale.MESSAGE_DELIVERED = decodeURIComponent("Sent");
              Locale.MESSAGE_NOT_DELIVERED = decodeURIComponent("Not%20Delivered");
              Locale.MESSAGE_RETRY = decodeURIComponent("Retry");
              Locale.MESSAGE_SENT = decodeURIComponent("Sending%20...");
              Locale.BANNER_NO_INTERNET_CONNECTION = decodeURIComponent("Unable%20to%20connect%E2%80%94please%20check%20your%20internet%20connection.");
              Locale.BANNER_INTERNET_BACK_ONLINE = decodeURIComponent("You%E2%80%99re%20back%20online.");
              Locale.TYPING_INDICATOR_TWO = decodeURIComponent("%7B0%7D%20and%20%7B1%7D%20are%20typing%20...");
              Locale.TYPING_INDICATOR_ONE = decodeURIComponent("%7B0%7D%20is%20typing%20...");
              Locale.TYPING_INDICATOR_MULTIPLE = decodeURIComponent("%7B0%7D%20agents%20are%20typing%20...");
              Locale.ACCEPT_VIDEO_CALL = decodeURIComponent("Accept%20video%20call");
              Locale.ACCEPT_VOICE_CALL = decodeURIComponent("Accept%20voice%20call");
              Locale.END_CALL = decodeURIComponent("End%20call");
              Locale.ENTER_FULL_SCREEN = decodeURIComponent("Enter%20full%20screen");
              Locale.EXIT_FULL_SCREEN = decodeURIComponent("Exit%20full%20screen");
              Locale.EXPAND_CONTROLS = decodeURIComponent("Expand%20controls");
              Locale.HOLD = decodeURIComponent("Hold");
              Locale.INCOMING_CALL_MESSAGE = decodeURIComponent("Incoming%20call");
              Locale.MINIMIZE_CONTROLS = decodeURIComponent("Minimize%20controls");
              Locale.MUTE = decodeURIComponent("Mute");
              Locale.REJECT_CALL = decodeURIComponent("Reject%20call");
              Locale.RESUME = decodeURIComponent("Resume");
              Locale.TURN_CAMERA_OFF = decodeURIComponent("Turn%20camera%20off");
              Locale.TURN_CAMERA_ON = decodeURIComponent("Turn%20camera%20on");
              Locale.UNMUTE = decodeURIComponent("Unmute");

                    return Locale;
                })();
                LiveChatWidget.Locale_1033 = Locale;

        })(LiveChatWidget = Microsoft.Omnichannel.LiveChatWidget || (Microsoft.Omnichannel.LiveChatWidget = {}));
    })(Omnichannel = Microsoft.Omnichannel || (Microsoft.Omnichannel = {}));
})(Microsoft || (Microsoft = {}));
