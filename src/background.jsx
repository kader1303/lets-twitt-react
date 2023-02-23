var i = 0;

chrome.alarms.create("hourly_notification", {
    periodInMinutes: 60
});

chrome.alarms.onAlarm.addListener(alarm => {

    if (alarm.name === "hourly_notification") {

        chrome.notifications.getAll(function(notifications) {
            if (Object.keys(notifications).length > 0) {
                console.log("Cantidad de notificaciones: " +  Object.keys(notifications).length.toString())
                i += 1;
                chrome.action.setBadgeText({ text: i.toString() });
            }
        });

        chrome.notifications.create({
            type: "basic",
            iconUrl: "/assets/tweet128.png",
            title: "Hora de Twittear",
            message: "Vamos hacer crecer esa cuenta de Twitter!",
            requireInteraction: true
        }, notificationId => {
            console.log("Notification created with ID: " + notificationId);
        });
    }
});

chrome.notifications.onClicked.addListener(notificationId => {
    console.log("Notification clicked: " + notificationId);
    var extensionUrl = chrome.runtime.getURL("popup.html");
    chrome.tabs.create({ url: extensionUrl });
    chrome.action.setBadgeText({ text: '' });
    chrome.notifications.clear(notificationId);
    i = 0;
});
