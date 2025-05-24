// Clock
    setInterval(() => {
      const now = new Date();
      const time = now.toLocaleTimeString();
      document.getElementById('clock').textContent = time;
    }, 1000);

    // Timer
    let timerInterval;
    function startTimer() {
      clearInterval(timerInterval);
      let minutes = parseInt(document.getElementById('timer-minutes').value) || 0;
      let seconds = parseInt(document.getElementById('timer-seconds').value) || 0;
      let total = minutes * 60 + seconds;
      timerInterval = setInterval(() => {
        if (total <= 0) {
          clearInterval(timerInterval);
        } else {
          total--;
          const m = String(Math.floor(total / 60)).padStart(2, '0');
          const s = String(total % 60).padStart(2, '0');
          document.getElementById('timer-display').textContent = `${m}:${s}`;
        }
      }, 1000);
    }

    function resetTimer() {
      clearInterval(timerInterval);
      document.getElementById('timer-display').textContent = '00:00';
    }

    // Stopwatch
    let swInterval;
    let swSeconds = 0;
    function startStopwatch() {
      clearInterval(swInterval);
      swInterval = setInterval(() => {
        swSeconds++;
        const h = String(Math.floor(swSeconds / 3600)).padStart(2, '0');
        const m = String(Math.floor((swSeconds % 3600) / 60)).padStart(2, '0');
        const s = String(swSeconds % 60).padStart(2, '0');
        document.getElementById('stopwatch-display').textContent = `${h}:${m}:${s}`;
      }, 1000);
    }

    function stopStopwatch() {
      clearInterval(swInterval);
    }

    function resetStopwatch() {
      clearInterval(swInterval);
      swSeconds = 0;
      document.getElementById('stopwatch-display').textContent = '00:00:00';
    }



















