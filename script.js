let timer;

function closeWindow() {
    window.close();
    if (!window.closed) {
        window.open('', '_self', '');
        window.close();
    }
}

function startClock() {
    clearInterval(timer);

    // Slide the prompt container to the left
    const promptContainer = document.querySelector('.prompt-container');
    promptContainer.classList.add('slide-out-left');

    // Delay the clock visibility until the prompt has slid out
    setTimeout(() => {
        const clockContainer = document.getElementById('clock');
        clockContainer.classList.add('slide-in-right'); // Slide clock in from the right
    }, 500); // Match the duration of the slide-out animation

    // Function to update the time every second
    function updateTime() {
        const now = new Date();
        const timeString = now.toLocaleTimeString();
        document.getElementById('clock').textContent = `The current time is ${timeString}`;
    }

    updateTime(); // Update time immediately
    timer = setInterval(updateTime, 1000); // Update time every second
}

function toggleFullscreen() {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen().catch(err => {
            console.error(`Error attempting to enable fullscreen mode: ${err.message}`);
        });
    } else {
        document.exitFullscreen().catch(err => {
            console.error(`Error attempting to exit fullscreen mode: ${err.message}`);
        });
    }
}
