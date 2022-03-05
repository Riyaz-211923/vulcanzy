import React from 'react';

function Timer(props){
    const countdown = () => {
        const countDate = new Date('March 18,2022 00:00:00').getTime();
        const now = new Date().getTime();
        var gap = countDate - now;
        if (gap < 0) {
            gap = 0;
        }
        const days = Math.floor(gap / (1000 * 60 * 60 * 24));
        const hours = Math.floor((gap % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((gap % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((gap % (1000 * 60)) / 1000);
        document.querySelector(".day").innerText = days;
        document.querySelector(".hour").innerText = hours;
        document.querySelector(".minute").innerText = minutes;
        document.querySelector(".second").innerText = seconds;
    
    }
    
    setInterval(countdown, 1000);
    return (
            
        <div id="timer">
    <section class="hurry-up">
        <div>
            <h2 class="countdown-header">Hurry Up! Battle Starts Soon</h2>
            <div class="countdown">
                <div class="container-day">
                    <h3 class="day">--</h3>
                    <h3>Days</h3>
                </div>
                <div class="container-hour">
                    <h3 class="hour">--</h3>
                    <h3>Hours</h3>
                </div>
                <div class="container-minute">
                    <h3 class="minute">--</h3>
                    <h3>Minutes</h3>
                </div>
                <div class="container-second">
                    <h3 class="second">--</h3>
                    <h3>Seconds</h3>
                </div>
            </div>
        </div>
    </section>
        </div>
    );
}
export default Timer;