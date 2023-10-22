window.onload = function() {
   var icon = document.querySelector("link[rel='icon']");
   icon.type = "image.png";
   icon.rel = "icon";
   icon.href = localStorage.getItem("favicon");
   var favicon = localStorage.getItem("favicon");
   var title = localStorage.getItem("title")
   if (favicon) {
    console.log(favicon);
   }
   if (title) {
    console.log(title);
    document.title = title
   }

}