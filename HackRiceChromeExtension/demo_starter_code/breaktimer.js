// List of urls from user "subscription"
const urls = [
    "https://www.youtube.com/embed/ZToicYcHIOU?autoplay=1",
    "https://www.youtube.com/embed/YXBh3riRMmI?autoplay=1",
    "https://www.youtube.com/embed/B38LYJMBWqc?autoplay=1",
    "https://www.youtube.com/embed/z2PIFlnZ19Q?autoplay=1",
    "https://www.youtube.com/embed/C4sAUc_ZGMY?autoplay=1"
]

// Finds random element in an array
Array.prototype.random = function () {
    return this[Math.floor((Math.random()*this.length))];
}

// Random url
let url = urls.random();

function startTimer(duration) { // duration will be in seconds
    if(duration > 0) {
        timerID = setInterval(() => {
            let hours = Math.floor(duration / 3600);
            let minutes = Math.floor((duration % 3600) / 60);
            let seconds = Math.floor(duration % 60); // remainder will alrdy have units of seconds 
            // add a leading '0' if the values are less than 10
            let displayHours = (hours < 10) ? '0' + hours : hours;
            let displayMinutes = (minutes < 10) ? '0' + minutes : minutes;
            let displaySeconds = (seconds < 10) ? '0' + seconds : seconds;
            document.getElementById('breakTimeDisplay').innerHTML = displayHours + ":" + displayMinutes + ":" + displaySeconds;
            duration--;
            if(duration == 0) {
                document.getElementById('startBreakTimer').style.visibility = 'visible';
                clearInterval(timerID);
            } else {
                document.getElementById('startBreakTimer').style.visibility = 'hidden';
            }
        }, 1000) // keep track of timer in the background
    }
};

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('startBreakTimer').addEventListener('click', function() { chrome.storage.sync.get(['stretchBreakHours', 'stretchBreakMinutes'], function(result) {
        let duration = (result.stretchBreakHours*3600) + (result.stretchBreakMinutes*60);
        // Sets the src with the random url
        document.getElementById("video").src = url;
        startTimer(duration);

    }); document.getElementById('startBreakTimer').style.visibility = 'hidden'; });
});
