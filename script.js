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

  let targetScroll = window.scrollY;
  let currentScroll = window.scrollY;
  let isScrolling = false;

  function easeInOut(t) {
    return t < 0.5
      ? 2 * t * t
      : -1 + (4 - 2 * t) * t;
  }

  function smoothScroll() {
    isScrolling = true;
    currentScroll += (targetScroll - currentScroll) * 0.1;

    if (Math.abs(targetScroll - currentScroll) < 0.5) {
      currentScroll = targetScroll;
      isScrolling = false;
    }

    window.scrollTo(0, currentScroll);

    if (isScrolling) {
      requestAnimationFrame(smoothScroll);
    }
  }

  window.addEventListener('wheel', (e) => {
    e.preventDefault();
    targetScroll += e.deltaY;
    targetScroll = Math.max(0, Math.min(document.body.scrollHeight - window.innerHeight, targetScroll));
    if (!isScrolling) {
      requestAnimationFrame(smoothScroll);
    }
  }, { passive: false });

  const menuToggle = document.getElementById('menu-toggle');
  const mobileNav = document.getElementById('mobile');
  const navLinks = mobileNav.querySelectorAll('a');

  menuToggle.addEventListener('click', () => {
    mobileNav.classList.toggle('active');
    document.body.classList.toggle('menu-open');
  });

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      mobileNav.classList.remove('active');
      document.body.classList.remove('menu-open');
    });
  });