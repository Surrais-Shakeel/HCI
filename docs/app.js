function updateTime() {
    const timeEl = document.getElementById('current-time');
    // Add a check in case the element doesn't exist on a future page
    if (timeEl) { 
        const now = new Date();
        timeEl.textContent = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    }
}
setInterval(updateTime, 1000);
updateTime();