/**
 * Hero Video Background Engine
 * Manages dual 4K/1080p video background crossfading (video1.mp4 & video2.mp4)
 * with seamless autoplay recovery and event chaining.
 */

let currentHeroVideoIndex = 1;

/**
 * Returns video DOM element references.
 */
function getHeroVideos() {
  return {
    v1: document.getElementById('hero-video-1'),
    v2: document.getElementById('hero-video-2')
  };
}

/**
 * Crossfades seamlessly between video 1 and video 2.
 * @param {number} videoNum 1 or 2
 */
function switchHeroVideo(videoNum) {
  const { v1, v2 } = getHeroVideos();
  if (!v1 || !v2) return;

  currentHeroVideoIndex = videoNum;

  if (videoNum === 1) {
    v1.classList.remove('opacity-0');
    v1.classList.add('opacity-100');
    v2.classList.remove('opacity-100');
    v2.classList.add('opacity-0');

    v1.currentTime = 0;
    v1.play().catch(() => {});
    v2.pause();
  } else {
    v2.classList.remove('opacity-0');
    v2.classList.add('opacity-100');
    v1.classList.remove('opacity-100');
    v1.classList.add('opacity-0');

    v2.currentTime = 0;
    v2.play().catch(() => {});
    v1.pause();
  }
}

/**
 * Attaches ended event listeners to chain video 1 -> video 2 -> video 1.
 */
function initHeroVideoListeners() {
  const { v1, v2 } = getHeroVideos();

  if (v1) {
    v1.addEventListener('ended', () => {
      switchHeroVideo(2);
    });
  }
  if (v2) {
    v2.addEventListener('ended', () => {
      switchHeroVideo(1);
    });
  }
}

// Expose globally
window.switchHeroVideo = switchHeroVideo;
window.initHeroVideoListeners = initHeroVideoListeners;

