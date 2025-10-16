document.addEventListener('DOMContentLoaded', () => {
  const wrapper = document.querySelector('.wrapper');
  const card = document.querySelector('.profile-card');
  const glow = document.querySelector('.highlight');

  const MAX_TILT = 18; // degrees

  function getTilt(event, element) {
    const rect = element.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const midX = rect.width / 2;
    const midY = rect.height / 2;

    const rotY = ((x - midX) / midX) * MAX_TILT;
    const rotX = -((y - midY) / midY) * MAX_TILT;

    return { rotX, rotY };
  }

  wrapper.addEventListener('mousemove', (e) => {
    const { rotX, rotY } = getTilt(e, card);
    card.style.transform = `rotateX(${rotX}deg) rotateY(${rotY}deg)`;

    // move glow center
    const rect = card.getBoundingClientRect();
    const gx = ((e.clientX - rect.left) / rect.width) * 100;
    const gy = ((e.clientY - rect.top) / rect.height) * 100;
    glow.style.left = `${gx}%`;
    glow.style.top = `${gy}%`;
  });

  wrapper.addEventListener('mouseleave', () => {
    card.style.transform = 'rotateX(0deg) rotateY(0deg)';
  });
});
