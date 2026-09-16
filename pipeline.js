const pipeline = document.querySelector('#pipeline-animation');
const toggle = document.querySelector('.pipeline-toggle');
if (pipeline && toggle) {
  const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const still = 'assets/images/grapple-workflow.jpg';
  const animated = 'assets/images/grapple-workflow.gif';
  let playing = !motion.matches;
  // After initial loading, the control governs both the picture and its fallback.
  const render = () => {
    pipeline.closest('picture').querySelector('source')?.remove();
    pipeline.src = playing ? animated : still;
    toggle.textContent = playing ? 'Pause animation' : 'Play animation';
  };
  toggle.hidden = false;
  toggle.textContent = playing ? 'Pause animation' : 'Play animation';
  toggle.addEventListener('click', () => { playing = !playing; render(); });
  motion.addEventListener('change', () => { playing = !motion.matches; render(); });
}
