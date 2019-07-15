$(document).ready(function () {
setInterval(function(){
    grabTime()
}, 1000)

function grabTime() {
    var dt = new Date();
    hrs = ('0'+ dt.getHours()).slice(-2);
    mins = ('0'+ dt.getMinutes()).slice(-2);
    secs = ('0'+ dt.getSeconds()).slice(-2);
    var time = hrs + ":" + mins + ":" + secs;
    $("#time").html(time)
}
grabTime()

})