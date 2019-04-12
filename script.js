const countdown = document.querySelector('.countdown');

// set launch date in miliseconds
const launchDate = new Date('Jan 1, 2020 09:00:00').getTime();

// updating every second
const interval = setInterval(() => {
    // current date and time in miliseconds
    const now = new Date().getTime();

    // remaining time from now to the launch date
    const remainingTime = launchDate - now;

    // time calculations for days, hours, minutes...
    const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
    const hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const mins = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
    const secs = Math.floor((remainingTime % (1000 * 60)) / 1000);

    // displaying results
    countdown.innerHTML = `
        <div>${days}<span>Days</span></div>
        <div>${hours}<span>Hours</span></div>
        <div>${mins}<span>Minutes</span></div>
        <div>${secs}<span>Seconds</span></div>
    `;

    // if coming soon date passed
    if (remainingTime < 0 ) {
        // stopping the countdown
        clearInterval(interval);
        countdown.style.color = '#17a2b8';
        countdown.innerHTML = `Launched!`;
    }

}, 1000);