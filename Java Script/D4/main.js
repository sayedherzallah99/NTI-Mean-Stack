function startEvent() {
    var name = document.getElementById("username").value;
    var seconds = Number(document.getElementById("seconds").value);

    var countdownDiv = document.getElementById("countdown");
    countdownDiv.textContent = "الوقت المتبقي: " + seconds + " ثانية";

    var interval = setInterval(function() {
        seconds--;
        if (seconds >= 0) {
            countdownDiv.textContent = "الوقت المتبقي: " + seconds + " ثانية";
        } else {
            clearInterval(interval);
            var eventTime = new Date();
            var detailedTime = eventTime.getHours() + ":" +
                               eventTime.getMinutes() + ":" +
                               eventTime.getSeconds();
            countdownDiv.textContent = "يا " + name + "، حان الآن وقت الحدث! الوقت الآن: " + detailedTime;
        }
    }, 1000);
}
