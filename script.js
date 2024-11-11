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

    const promptContainer = document.querySelector('.prompt-container');
    promptContainer.classList.add('slide-out-left');

    setTimeout(() => {
        const clockContainer = document.getElementById('clock');
        clockContainer.classList.add('slide-in-right'); 
    }, 500); 

    function updateTime() {
        const now = new Date();
        const timeString = now.toLocaleTimeString();
        document.getElementById('clock').textContent = `The current time is ${timeString}`;
    }

    updateTime();
    timer = setInterval(updateTime, 1000);
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
