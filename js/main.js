function showTime() {
    var myDate = new Date();
    var myWeek = ["日", "月", "火", "水", "木", "火", "土"];
    document.getElementById("time").innerHTML = myDate.toLocaleString() + "(" + myWeek[myDate.getDay()] + ")";
    setTimeout("showTime()", 1000);
}
function showTimeToGo(){    //show time left to go home.
    var myDate = new Date();
    var myHour = myDate.getHours();
    var myMin = myDate.getMinutes();
    var mySec = myDate.getSeconds();
    var ans =68400-(myHour*3600 + myMin*60 + mySec);
    if(ans >= 0){
        document.getElementById("timeToGo").innerHTML = (ans-ans%3600)/3600 + "h" +(ans%3600-ans%60) /60 + "m" + (ans%60) +"s";
    }else{
        document.getElementById("timeToGo").innerHTML = "Go Home Now!";
    }
    setTimeout("showTimeToGo()", 1000);
}

function showTimePlus(){
    showTime();
    showTimeToGo();
}
