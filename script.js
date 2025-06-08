const cursor = document.querySelector('.custom-cursor');

document.addEventListener('mousemove', (e) => {
   cursor.style.top = `${e.clientY}px`;
  cursor.style.left = `${e.clientX}px`;
});

const buttons = document.querySelectorAll('button');

buttons.forEach(btn => {
btn.addEventListener('mouseenter', () => {
    cursor.classList.add('hovering');
});
btn.addEventListener('mouseleave', () => {
    cursor.classList.remove('hovering');
});
});
