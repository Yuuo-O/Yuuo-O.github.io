document.addEventListener('DOMContentLoaded', function() {
  const heartContainer = document.querySelector('.heart-container');
  for (let i = 0; i < 20; i++) {
      const particle = document.createElement('div');
      particle.className = 'particle';
      heartContainer.appendChild(particle);
      animateParticle(particle);
  }
});

function animateParticle(particle) {
  const size = Math.random() * 5 + 5;
  const left = Math.random() * 100;
  const top = Math.random() * 100;
  const delay = Math.random() * 5;
  const duration = Math.random() * 2 + 2;
  const distanceX = Math.random() * 200 - 100;
  const distanceY = Math.random() * 200 - 100;

  particle.style.width = `${size}px`;
  particle.style.height = `${size}px`;
  particle.style.left = `${left}%`;
  particle.style.top = `${top}%`;
  particle.style.animationName = 'moveParticle';
  particle.style.animationDuration = `${duration}s`;
  particle.style.animationDelay = `${delay}s`;
  particle.style.animationTimingFunction = 'linear';
  particle.style.animationFillMode = 'forwards';
  particle.style.transformOrigin = 'center';

  particle.style.background = `radial-gradient(circle at center, white, white ${size / 2}px, transparent ${size / 2}px)`;
  particle.style.animation = `moveParticle ${duration}s linear ${delay}s infinite`;
  particle.style.transform = `translate(${distanceX}px, ${distanceY}px) scale(1)`;
}