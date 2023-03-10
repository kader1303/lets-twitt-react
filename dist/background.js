/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!****************************!*\
  !*** ./src/background.jsx ***!
  \****************************/
var i = 0;
chrome.alarms.create("hourly_notification", {
  periodInMinutes: 60
});
chrome.alarms.onAlarm.addListener(function (alarm) {
  if (alarm.name === "hourly_notification") {
    chrome.notifications.getAll(function (notifications) {
      if (Object.keys(notifications).length > 0) {
        console.log("Cantidad de notificaciones: " + Object.keys(notifications).length.toString());
        i += 1;
        chrome.action.setBadgeText({
          text: i.toString()
        });
      }
    });
    chrome.notifications.create({
      type: "basic",
      iconUrl: "/assets/tweet128.png",
      title: "Hora de Twittear",
      message: "Vamos hacer crecer esa cuenta de Twitter!",
      requireInteraction: true
    }, function (notificationId) {
      console.log("Notification created with ID: " + notificationId);
    });
  }
});
chrome.notifications.onClicked.addListener(function (notificationId) {
  console.log("Notification clicked: " + notificationId);
  var extensionUrl = chrome.runtime.getURL("popup.html");
  chrome.tabs.create({
    url: extensionUrl
  });
  chrome.action.setBadgeText({
    text: ''
  });
  chrome.notifications.clear(notificationId);
  i = 0;
});
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFja2dyb3VuZC5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBLElBQUlBLENBQUMsR0FBRyxDQUFDO0FBRVRDLE1BQU0sQ0FBQ0MsTUFBTSxDQUFDQyxNQUFNLENBQUMscUJBQXFCLEVBQUU7RUFDeENDLGVBQWUsRUFBRTtBQUNyQixDQUFDLENBQUM7QUFFRkgsTUFBTSxDQUFDQyxNQUFNLENBQUNHLE9BQU8sQ0FBQ0MsV0FBVyxDQUFDLFVBQUFDLEtBQUssRUFBSTtFQUV2QyxJQUFJQSxLQUFLLENBQUNDLElBQUksS0FBSyxxQkFBcUIsRUFBRTtJQUV0Q1AsTUFBTSxDQUFDUSxhQUFhLENBQUNDLE1BQU0sQ0FBQyxVQUFTRCxhQUFhLEVBQUU7TUFDaEQsSUFBSUUsTUFBTSxDQUFDQyxJQUFJLENBQUNILGFBQWEsQ0FBQyxDQUFDSSxNQUFNLEdBQUcsQ0FBQyxFQUFFO1FBQ3ZDQyxPQUFPLENBQUNDLEdBQUcsQ0FBQyw4QkFBOEIsR0FBSUosTUFBTSxDQUFDQyxJQUFJLENBQUNILGFBQWEsQ0FBQyxDQUFDSSxNQUFNLENBQUNHLFFBQVEsRUFBRSxDQUFDO1FBQzNGaEIsQ0FBQyxJQUFJLENBQUM7UUFDTkMsTUFBTSxDQUFDZ0IsTUFBTSxDQUFDQyxZQUFZLENBQUM7VUFBRUMsSUFBSSxFQUFFbkIsQ0FBQyxDQUFDZ0IsUUFBUTtRQUFHLENBQUMsQ0FBQztNQUN0RDtJQUNKLENBQUMsQ0FBQztJQUVGZixNQUFNLENBQUNRLGFBQWEsQ0FBQ04sTUFBTSxDQUFDO01BQ3hCaUIsSUFBSSxFQUFFLE9BQU87TUFDYkMsT0FBTyxFQUFFLHNCQUFzQjtNQUMvQkMsS0FBSyxFQUFFLGtCQUFrQjtNQUN6QkMsT0FBTyxFQUFFLDJDQUEyQztNQUNwREMsa0JBQWtCLEVBQUU7SUFDeEIsQ0FBQyxFQUFFLFVBQUFDLGNBQWMsRUFBSTtNQUNqQlgsT0FBTyxDQUFDQyxHQUFHLENBQUMsZ0NBQWdDLEdBQUdVLGNBQWMsQ0FBQztJQUNsRSxDQUFDLENBQUM7RUFDTjtBQUNKLENBQUMsQ0FBQztBQUVGeEIsTUFBTSxDQUFDUSxhQUFhLENBQUNpQixTQUFTLENBQUNwQixXQUFXLENBQUMsVUFBQW1CLGNBQWMsRUFBSTtFQUN6RFgsT0FBTyxDQUFDQyxHQUFHLENBQUMsd0JBQXdCLEdBQUdVLGNBQWMsQ0FBQztFQUN0RCxJQUFJRSxZQUFZLEdBQUcxQixNQUFNLENBQUMyQixPQUFPLENBQUNDLE1BQU0sQ0FBQyxZQUFZLENBQUM7RUFDdEQ1QixNQUFNLENBQUM2QixJQUFJLENBQUMzQixNQUFNLENBQUM7SUFBRTRCLEdBQUcsRUFBRUo7RUFBYSxDQUFDLENBQUM7RUFDekMxQixNQUFNLENBQUNnQixNQUFNLENBQUNDLFlBQVksQ0FBQztJQUFFQyxJQUFJLEVBQUU7RUFBRyxDQUFDLENBQUM7RUFDeENsQixNQUFNLENBQUNRLGFBQWEsQ0FBQ3VCLEtBQUssQ0FBQ1AsY0FBYyxDQUFDO0VBQzFDekIsQ0FBQyxHQUFHLENBQUM7QUFDVCxDQUFDLENBQUMsQyIsInNvdXJjZXMiOlsid2VicGFjazovL2xldHMtdHdpdHQtcmVhY3QvLi9zcmMvYmFja2dyb3VuZC5qc3giXSwic291cmNlc0NvbnRlbnQiOlsidmFyIGkgPSAwO1xyXG5cclxuY2hyb21lLmFsYXJtcy5jcmVhdGUoXCJob3VybHlfbm90aWZpY2F0aW9uXCIsIHtcclxuICAgIHBlcmlvZEluTWludXRlczogNjBcclxufSk7XHJcblxyXG5jaHJvbWUuYWxhcm1zLm9uQWxhcm0uYWRkTGlzdGVuZXIoYWxhcm0gPT4ge1xyXG5cclxuICAgIGlmIChhbGFybS5uYW1lID09PSBcImhvdXJseV9ub3RpZmljYXRpb25cIikge1xyXG5cclxuICAgICAgICBjaHJvbWUubm90aWZpY2F0aW9ucy5nZXRBbGwoZnVuY3Rpb24obm90aWZpY2F0aW9ucykge1xyXG4gICAgICAgICAgICBpZiAoT2JqZWN0LmtleXMobm90aWZpY2F0aW9ucykubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJDYW50aWRhZCBkZSBub3RpZmljYWNpb25lczogXCIgKyAgT2JqZWN0LmtleXMobm90aWZpY2F0aW9ucykubGVuZ3RoLnRvU3RyaW5nKCkpXHJcbiAgICAgICAgICAgICAgICBpICs9IDE7XHJcbiAgICAgICAgICAgICAgICBjaHJvbWUuYWN0aW9uLnNldEJhZGdlVGV4dCh7IHRleHQ6IGkudG9TdHJpbmcoKSB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBjaHJvbWUubm90aWZpY2F0aW9ucy5jcmVhdGUoe1xyXG4gICAgICAgICAgICB0eXBlOiBcImJhc2ljXCIsXHJcbiAgICAgICAgICAgIGljb25Vcmw6IFwiL2Fzc2V0cy90d2VldDEyOC5wbmdcIixcclxuICAgICAgICAgICAgdGl0bGU6IFwiSG9yYSBkZSBUd2l0dGVhclwiLFxyXG4gICAgICAgICAgICBtZXNzYWdlOiBcIlZhbW9zIGhhY2VyIGNyZWNlciBlc2EgY3VlbnRhIGRlIFR3aXR0ZXIhXCIsXHJcbiAgICAgICAgICAgIHJlcXVpcmVJbnRlcmFjdGlvbjogdHJ1ZVxyXG4gICAgICAgIH0sIG5vdGlmaWNhdGlvbklkID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJOb3RpZmljYXRpb24gY3JlYXRlZCB3aXRoIElEOiBcIiArIG5vdGlmaWNhdGlvbklkKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufSk7XHJcblxyXG5jaHJvbWUubm90aWZpY2F0aW9ucy5vbkNsaWNrZWQuYWRkTGlzdGVuZXIobm90aWZpY2F0aW9uSWQgPT4ge1xyXG4gICAgY29uc29sZS5sb2coXCJOb3RpZmljYXRpb24gY2xpY2tlZDogXCIgKyBub3RpZmljYXRpb25JZCk7XHJcbiAgICB2YXIgZXh0ZW5zaW9uVXJsID0gY2hyb21lLnJ1bnRpbWUuZ2V0VVJMKFwicG9wdXAuaHRtbFwiKTtcclxuICAgIGNocm9tZS50YWJzLmNyZWF0ZSh7IHVybDogZXh0ZW5zaW9uVXJsIH0pO1xyXG4gICAgY2hyb21lLmFjdGlvbi5zZXRCYWRnZVRleHQoeyB0ZXh0OiAnJyB9KTtcclxuICAgIGNocm9tZS5ub3RpZmljYXRpb25zLmNsZWFyKG5vdGlmaWNhdGlvbklkKTtcclxuICAgIGkgPSAwO1xyXG59KTtcclxuIl0sIm5hbWVzIjpbImkiLCJjaHJvbWUiLCJhbGFybXMiLCJjcmVhdGUiLCJwZXJpb2RJbk1pbnV0ZXMiLCJvbkFsYXJtIiwiYWRkTGlzdGVuZXIiLCJhbGFybSIsIm5hbWUiLCJub3RpZmljYXRpb25zIiwiZ2V0QWxsIiwiT2JqZWN0Iiwia2V5cyIsImxlbmd0aCIsImNvbnNvbGUiLCJsb2ciLCJ0b1N0cmluZyIsImFjdGlvbiIsInNldEJhZGdlVGV4dCIsInRleHQiLCJ0eXBlIiwiaWNvblVybCIsInRpdGxlIiwibWVzc2FnZSIsInJlcXVpcmVJbnRlcmFjdGlvbiIsIm5vdGlmaWNhdGlvbklkIiwib25DbGlja2VkIiwiZXh0ZW5zaW9uVXJsIiwicnVudGltZSIsImdldFVSTCIsInRhYnMiLCJ1cmwiLCJjbGVhciJdLCJzb3VyY2VSb290IjoiIn0=