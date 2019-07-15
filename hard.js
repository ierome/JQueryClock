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
        /* Slice turns the time which is a number into a String. So I used Number to turn it back to a integer*/
        hrs = Number(('0'+ dt.getHours()).slice(-2))
        mins = Number(('0'+ dt.getMinutes()).slice(-2))
        secs = Number(('0'+ dt.getSeconds()).slice(-2))
        /*Now I am making new variables equal to the INTEGER from above BUT doing .toString to get the hex value of them*/
        hrsColor = hrs.toString(16)
        minsColor = mins.toString(16)
        secsColor = secs.toString(16)
        /*Making the #XXXXXX color*/
        var fullString = "#" + hrsColor + minsColor + secsColor;
        /*Changing the background color to fullString and logging the time + the converted hex value*/
        $("body").css("background-color",fullString)
        console.log(`${hrs}:${mins}:${secs}`)
        console.log(`${hrsColor}:${minsColor}:${secsColor}`)
    }
    grabTime()
    updateColor()
    
    })