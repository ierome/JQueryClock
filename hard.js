$(document).ready(function () {
    setInterval(function(){
        grabTime()
    }, 1000)
    setInterval(function(){
        updateColor()
    }, 3000)
    
    function grabTime() {
        var dt = new Date();
        hrs = ('0'+ dt.getHours()).slice(-2);
        mins = ('0'+ dt.getMinutes()).slice(-2);
        secs = ('0'+ dt.getSeconds()).slice(-2);
        var time = hrs.toString(16) + mins.toString(16) + secs.toString(16);
        $("#time").html("#" + time)
    }
    function updateColor() {
        var dt = new Date();
        hrs = Number(('0'+ dt.getHours()).slice(-2))
        mins = Number(('0'+ dt.getMinutes()).slice(-2))
        secs = Number(('0'+ dt.getSeconds()).slice(-2))
        var time = hrs.toString(16) + mins.toString(16) + secs.toString(16);
        hrsColor = hrs.toString(16)
        minsColor = mins.toString(16)
        secsColor = secs.toString(16)
        var fullString = "#" + hrsColor + minsColor + secsColor;
        $("body").css("background-color",fullString)
        console.log(fullString)
    }
    grabTime()
    updateColor()
    
    })