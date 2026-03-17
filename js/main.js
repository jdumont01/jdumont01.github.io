
  function toggleQuantumExpand() {
    const details = document.getElementById('quantumDetails');
    const icon = document.getElementById('quantumToggleIcon');
    const card = document.getElementById('quantumSummaryCard');
    const isOpen = details.style.display !== 'none';
    if (isOpen) {
      details.style.display = 'none';
      icon.textContent = '＋';
      icon.style.transform = 'rotate(0deg)';
      card.querySelector('.project-desc + div span:last-child').textContent = 'Click to expand';
    } else {
      details.style.display = 'block';
      icon.textContent = '－';
      icon.style.transform = 'rotate(180deg)';
      card.querySelector('.project-desc + div span:last-child').textContent = 'Click to collapse';
    }
  }



  const photos = [
    { src: 'https://jdumont01.github.io/images/slider/LondonBridgeGreatOceanRoad2.jpg', caption: 'London Bridge — Great Ocean Road, Victoria, Australia' },
    { src: 'https://jdumont01.github.io/images/slider/WinterPlumIsland-2.jpg', caption: 'Parker River National Wildlife Refuge — Winter' },
    { src: 'https://jdumont01.github.io/images/slider/lobster.jpg', caption: 'New England Lobster — Nubble Lighthouse Dive Site, York, Maine' },
    { src: 'https://jdumont01.github.io/images/slider/PlumIslandSunrise.jpg', caption: 'Sunrise Over the North Atlantic Shoreline' },
    { src: 'https://jdumont01.github.io/images/slider/GoldenGateBridge.jpg', caption: 'Golden Gate Bridge — San Francisco, California' }
  ];
  let currentPhoto = 0;

  function openLightbox(index) {
    currentPhoto = index;
    showPhoto();
    document.getElementById('lightbox').style.display = 'flex';
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    document.getElementById('lightbox').style.display = 'none';
    document.body.style.overflow = '';
  }

  function showPhoto() {
    document.getElementById('lightbox-img').src = photos[currentPhoto].src;
    document.getElementById('lightbox-caption').textContent = photos[currentPhoto].caption;
    document.getElementById('lightbox-counter').textContent = (currentPhoto + 1) + ' / ' + photos.length;
  }

  function prevPhoto() { currentPhoto = (currentPhoto - 1 + photos.length) % photos.length; showPhoto(); }
  function nextPhoto() { currentPhoto = (currentPhoto + 1) % photos.length; showPhoto(); }

  document.getElementById('lightbox').addEventListener('click', function(e) {
    if (e.target === this) closeLightbox();
  });

  document.addEventListener('keydown', function(e) {
    if (document.getElementById('lightbox').style.display === 'flex') {
      if (e.key === 'ArrowLeft') prevPhoto();
      if (e.key === 'ArrowRight') nextPhoto();
      if (e.key === 'Escape') closeLightbox();
    }
  });
