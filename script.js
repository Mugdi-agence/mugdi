const cursor = document.querySelector('.custom-cursor');

window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};

document.addEventListener('DOMContentLoaded', () => {
  const menuBtn = document.getElementById('menu');
  const mobileNav = document.getElementById('mobile');
  const navLinks = mobileNav.querySelectorAll('a');

  menuBtn.addEventListener('click', () => {
    mobileNav.classList.toggle('active');
    document.body.classList.toggle('menu-open');
  });

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      mobileNav.classList.remove('active');
      document.body.classList.remove('menu-open');
    });
  });

  function smoothScrollTo(targetY, duration = 800) {
    const startY = window.scrollY;
    const change = targetY - startY;
    const startTime = performance.now();

    function easeInOutQuad(t) {
      return t < 0.5
        ? 2 * t * t
        : -1 + (4 - 2 * t) * t;
    }

    function animateScroll(currentTime) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const ease = easeInOutQuad(progress);

      window.scrollTo(0, startY + change * ease);

      if (progress < 1) {
        requestAnimationFrame(animateScroll);
      } else {
        targetScroll = targetY;
        currentScroll = targetY;
      }
    }

    requestAnimationFrame(animateScroll);
  }

  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const target = document.getElementById(targetId);
      if (target) {
        const targetY = target.offsetTop;
        smoothScrollTo(targetY);
      }
    });
  });

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
