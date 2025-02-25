const container = document.getElementById('floatingCircles');
const circleCount = 20; // Number of circles
const circleSize = 80; // Circle size

for (let i = 0; i < circleCount; i++) {
    // Create the wrapper div for the circle
    const wrapper = document.createElement('div');
    wrapper.classList.add('circle-wrapper');

    // Random size and position for the wrapper
    wrapper.style.width = `${circleSize + 10}px`; // Add space for the border
    wrapper.style.height = `${circleSize + 10}px`;
    wrapper.style.left = `${10 + Math.random() * 80}%`;
    wrapper.style.top = `${10 + Math.random() * 80}%`;

    // Random animation duration for the wrapper
    const duration = Math.random() * 5 + 5; // Between 5s and 10s
    wrapper.style.animationDuration = `${duration}s`;

    // Create the actual circle div
    const circle = document.createElement('div');
    circle.classList.add('circle');

    // Circle dimensions set to match wrapper
    circle.style.width = '100%';
    circle.style.height = '100%';
    circle.style.boxSizing = 'border-box'; // 包括边框在内

    // Random color (pink, blue, or white)
    const colors = ['rgba(255, 192, 203, 0.3)', 'rgba(135, 206, 235, 0.3)', 'rgba(255, 255, 255, 0.3)'];
    circle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];

    // Append circle to wrapper and wrapper to container
    wrapper.appendChild(circle);
    container.appendChild(wrapper);
}