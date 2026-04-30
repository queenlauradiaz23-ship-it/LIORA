// ================================================================
// 🌷 LIORA — deliveryMap.js
// Real Leaflet Map + Animated Truck + Full Interactive Features
// ================================================================

let map, truckMarker, routeLine;
let animationInterval = null;
let countdownInterval = null;
let isTracking = false;
let selectedNewDate = '';
let animationProgress = 0;
let orderCancelled = false;

// Route coordinates (warehouse → home)
const ROUTE_COORDS = [
  [33.3220, 44.3550],
  [33.3195, 44.3580],
  [33.3175, 44.3615],
  [33.3158, 44.3648],
  [33.3140, 44.3690],
  [33.3122, 44.3725],
  [33.3105, 44.3748],
  [33.3090, 44.3762],
  [33.3080, 44.3780]
];

// ================================================================
// MAP INITIALIZATION
// ================================================================
function initMap() {
  try {
    map = L.map('map', {
      zoomControl: true,
      attributionControl: false,
      scrollWheelZoom: true
    }).setView([33.315, 44.366], 14);

    // Tile layer — CartoDB Voyager (beautiful pastel-style map)
    L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
      maxZoom: 19,
      subdomains: 'abcd'
    }).addTo(map);

    // Fallback to OSM if CartoDB fails
    map.on('tileerror', function() {
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19
      }).addTo(map);
    });

    // ── Warehouse marker ─────────────────────────────────────────
    const warehouseIcon = L.divIcon({
      className: '',
      html: `<div class="map-marker warehouse-marker">
               <div class="marker-pin">🏭</div>
               <div class="marker-label">LIORA Warehouse</div>
             </div>`,
      iconSize: [120, 60],
      iconAnchor: [60, 55],
      popupAnchor: [0, -55]
    });

    L.marker(ROUTE_COORDS[0], { icon: warehouseIcon })
      .addTo(map)
      .bindPopup(`
        <div class="custom-popup">
          <b>🏭 LIORA Warehouse</b><br>
          <small>Your order was picked up here with care 🌷</small>
        </div>
      `);

    // ── Home / destination marker ─────────────────────────────────
    const homeIcon = L.divIcon({
      className: '',
      html: `<div class="map-marker home-marker">
               <div class="marker-pin">🏠</div>
               <div class="marker-label">Your Address</div>
             </div>`,
      iconSize: [120, 60],
      iconAnchor: [60, 55],
      popupAnchor: [0, -55]
    });

    L.marker(ROUTE_COORDS[ROUTE_COORDS.length - 1], { icon: homeIcon })
      .addTo(map)
      .bindPopup(`
        <div class="custom-popup">
          <b>🏠 Your Delivery Address</b><br>
          <small>Ruby Red Romance is coming! 🌹</small>
        </div>
      `);

    // ── Animated dashed route line ────────────────────────────────
    routeLine = L.polyline(ROUTE_COORDS, {
      color: '#e83e7c',
      weight: 5,
      opacity: 0.85,
      dashArray: '14, 10',
      lineCap: 'round',
      lineJoin: 'round'
    }).addTo(map);

    // Animate dashes
    let dashOffset = 0;
    setInterval(() => {
      dashOffset -= 1;
      if (routeLine) routeLine.setStyle({ dashOffset });
    }, 40);

    // ── Truck marker ──────────────────────────────────────────────
    const truckHtml = buildTruckHtml();
    const truckIcon = L.divIcon({
      className: '',
      html: truckHtml,
      iconSize: [64, 64],
      iconAnchor: [32, 32],
      popupAnchor: [0, -36]
    });

    truckMarker = L.marker(ROUTE_COORDS[0], { icon: truckIcon, zIndexOffset: 1000 })
      .addTo(map)
      .bindPopup(`
        <div class="custom-popup">
          <b>🚚 Your Delivery Truck</b><br>
          <small>Carrying your bouquet with love!</small>
        </div>
      `);

    // Fit map view
    map.fitBounds(routeLine.getBounds(), { padding: [60, 60] });

    // Start truck animation
    animateTruck();

    // Initial texts
    updateLocationText('Near Central Flower Market');
    updateDistanceText(2400);

    injectMapStyles();

  } catch (err) {
    console.error('Map init error:', err);
    showToast('❌ Map could not load. Check your connection.', 'error');
  }
}

// ── Build truck icon HTML (uses PNG from uploads, falls back to emoji) ──
function buildTruckHtml() {
  // Tries the uploaded truck PNG first, then emoji fallback
  return `<div class="truck-wrapper" id="truck-wrapper">
    <img 
      src="assets/img/truck_icon.png"
      onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';"
      width="64" height="64"
      alt="Delivery Truck"
      class="truck-img"
      id="truck-img"
    />
    <div class="truck-emoji-fallback" style="display:none;">🚚</div>
  </div>`;
}

// ── CSS injected into document for map markers ──
function injectMapStyles() {
  if (document.getElementById('map-injected-styles')) return;
  const s = document.createElement('style');
  s.id = 'map-injected-styles';
  s.textContent = `
    .map-marker { display:flex; flex-direction:column; align-items:center; }
    .marker-pin {
      font-size: 32px;
      filter: drop-shadow(0 4px 8px rgba(193,78,143,0.5));
      animation: markerBounce 2s ease-in-out infinite;
      cursor: pointer;
    }
    .marker-label {
      background: rgba(255,255,255,0.95);
      color: #c14e8f;
      font-size: 11px;
      font-weight: 700;
      border: 1.5px solid #f7c9dd;
      border-radius: 20px;
      padding: 2px 8px;
      white-space: nowrap;
      box-shadow: 0 2px 8px rgba(0,0,0,0.12);
      margin-top: 2px;
    }
    @keyframes markerBounce {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-8px); }
    }
    .truck-wrapper {
      position: relative;
      display: flex; align-items: center; justify-content: center;
      width: 64px; height: 64px;
      animation: truckFloat 1.4s ease-in-out infinite;
    }
    .truck-img {
      width: 64px; height: 64px;
      filter: drop-shadow(0 6px 14px rgba(193,78,143,0.5));
      transition: transform 0.3s ease;
    }
    .truck-emoji-fallback {
      font-size: 42px;
      filter: drop-shadow(0 4px 10px rgba(193,78,143,0.5));
      align-items: center; justify-content: center;
      width: 64px; height: 64px;
    }
    @keyframes truckFloat {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-5px); }
    }
    .truck-wrapper::after {
      content: '';
      position: absolute;
      bottom: -6px; left: 50%;
      transform: translateX(-50%);
      width: 28px; height: 7px;
      background: rgba(193,78,143,0.18);
      border-radius: 50%;
      animation: shadowPulse 1.4s ease-in-out infinite;
    }
    @keyframes shadowPulse {
      0%, 100% { transform: translateX(-50%) scale(1); opacity:0.3; }
      50% { transform: translateX(-50%) scale(1.3); opacity:0.1; }
    }
    .custom-popup {
      font-family: 'DM Sans', sans-serif;
      line-height: 1.5;
      text-align: center;
    }
    .custom-popup b { color:#c14e8f; }
    .leaflet-popup-content-wrapper {
      border-radius: 18px !important;
      box-shadow: 0 8px 30px rgba(0,0,0,0.15) !important;
      border: 2px solid #f7c9dd !important;
    }
    .leaflet-popup-tip {
      background: #fff !important;
    }
  `;
  document.head.appendChild(s);
}

// ================================================================
// TRUCK ANIMATION
// ================================================================
function animateTruck() {
  if (animationInterval) clearInterval(animationInterval);
  if (orderCancelled) return;

  animationProgress = 0;
  const totalSegments = ROUTE_COORDS.length - 1;

  animationInterval = setInterval(() => {
    if (orderCancelled) {
      clearInterval(animationInterval);
      return;
    }

    animationProgress += 0.004;

    if (animationProgress >= 1) {
      animationProgress = 1;
      clearInterval(animationInterval);
      animationInterval = null;

      updateLocationText('🏠 Arriving at your address!');
      updateDistanceText(0);
      showToast('🎉 Your delivery is arriving! Go meet Sara! 🌹', 'success');
      updateStepToDelivered();
      return;
    }

    const pos = animationProgress * totalSegments;
    const segIdx = Math.min(Math.floor(pos), totalSegments - 1);
    const segProg = pos - segIdx;

    const start = ROUTE_COORDS[segIdx];
    const end = ROUTE_COORDS[segIdx + 1] || ROUTE_COORDS[segIdx];
    const lat = start[0] + (end[0] - start[0]) * segProg;
    const lng = start[1] + (end[1] - start[1]) * segProg;

    if (truckMarker) {
      truckMarker.setLatLng([lat, lng]);

      // Rotate truck image in direction of travel
     const angle = getBearing(start[0], start[1], end[0], end[1]) -90;
if (img) img.style.transform = `rotate(${angle}deg)`;
    }

    // Update distance to destination
    if (map) {
      const dest = ROUTE_COORDS[ROUTE_COORDS.length - 1];
      const dist = Math.round(map.distance([lat, lng], dest));
      updateDistanceText(dist);
    }

    updateLocationByProgress(animationProgress);

  }, 120);
}

function getBearing(lat1, lng1, lat2, lng2) {
  const dLng = lng2 - lng1;
  const y = Math.sin(dLng) * Math.cos(lat2);
  const x = Math.cos(lat1) * Math.sin(lat2) - Math.sin(lat1) * Math.cos(lat2) * Math.cos(dLng);
  return (Math.atan2(y, x) * 180 / Math.PI + 360) % 360;
}

function updateLocationByProgress(p) {
  const locations = [
    [0.0, 'Near Central Flower Market 🌸'],
    [0.2, 'Passing Rose Garden District 🌹'],
    [0.4, 'Near Tulip Square 🌷'],
    [0.55, 'On Jasmine Boulevard 🌼'],
    [0.7, 'Approaching your neighborhood 🏘️'],
    [0.85, 'Just around the corner! 🎉'],
    [0.95, '🏠 Almost at your door!']
  ];
  let text = locations[0][1];
  for (const [threshold, label] of locations) {
    if (p >= threshold) text = label;
  }
  updateLocationText(text);
}

// ================================================================
// UI HELPERS
// ================================================================
function updateDistanceText(meters) {
  const el = document.getElementById('distance');
  if (!el) return;
  el.textContent = meters < 100 ? 'Arriving now!' : meters < 1000 ? `${meters}m away` : `${(meters / 1000).toFixed(1)}km away`;
}

function updateLocationText(text) {
  const el = document.getElementById('current-location');
  if (el) el.textContent = text;
}

function updateStepToDelivered() {
  document.querySelectorAll('.step').forEach(s => {
    s.classList.remove('active');
    s.classList.add('completed');
  });
}

// ================================================================
// LIVE TRACK BUTTON
// ================================================================
function liveTrack() {
  if (isTracking || orderCancelled) return;
  isTracking = true;

  const btn = document.getElementById('live-track-btn');
  if (btn) {
    btn.innerHTML = '<span class="live-dot"></span> Tracking...';
    btn.disabled = true;
  }

  showToast('📡 Live tracking enabled! Watch Sara move! 🚚', 'success');

  if (truckMarker && map) {
    map.flyTo(truckMarker.getLatLng(), 16, { duration: 1.5 });
  }

  setTimeout(() => {
    isTracking = false;
    if (btn) {
      btn.innerHTML = '<span class="live-dot"></span> Live Track';
      btn.disabled = false;
    }
    // Zoom back out
    if (map) map.flyTo([33.315, 44.366], 14, { duration: 1.2 });
  }, 6000);
}

// ================================================================
// COUNTDOWN TIMER
// ================================================================
function startCountdown() {
  if (countdownInterval) clearInterval(countdownInterval);

  let totalSeconds = 2 * 3600 + 38 * 60;

  function tick() {
    if (orderCancelled) {
      clearInterval(countdownInterval);
      return;
    }
    totalSeconds = Math.max(0, totalSeconds - 1);

    const h = Math.floor(totalSeconds / 3600);
    const m = Math.floor((totalSeconds % 3600) / 60);
    const s = totalSeconds % 60;

    const hoursEl = document.getElementById('hours');
    const minutesEl = document.getElementById('minutes');
    const secondsEl = document.getElementById('seconds');

    if (hoursEl) hoursEl.textContent = String(h).padStart(2, '0');
    if (minutesEl) minutesEl.textContent = String(m).padStart(2, '0');
    if (secondsEl) secondsEl.textContent = String(s).padStart(2, '0');

    // Update ETA display
    const etaEl = document.getElementById('eta-time');
    if (etaEl) {
      const eta = new Date(Date.now() + totalSeconds * 1000);
      etaEl.textContent = `Today • ${eta.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false })}`;
    }

    if (totalSeconds === 0) {
      clearInterval(countdownInterval);
      showToast('🎉 Your flowers have arrived! Enjoy your Ruby Red Romance 🌹', 'success');
    }
  }

  tick();
  countdownInterval = setInterval(tick, 1000);
}

function resetCountdown(extraSeconds = 0) {
  if (countdownInterval) clearInterval(countdownInterval);
  // Re-init with default + extra
  let totalSeconds = 2 * 3600 + 38 * 60 + extraSeconds;

  function tick() {
    if (orderCancelled) { clearInterval(countdownInterval); return; }
    totalSeconds = Math.max(0, totalSeconds - 1);
    const h = Math.floor(totalSeconds / 3600);
    const m = Math.floor((totalSeconds % 3600) / 60);
    const s = totalSeconds % 60;
    const hoursEl = document.getElementById('hours');
    const minutesEl = document.getElementById('minutes');
    const secondsEl = document.getElementById('seconds');
    if (hoursEl) hoursEl.textContent = String(h).padStart(2, '0');
    if (minutesEl) minutesEl.textContent = String(m).padStart(2, '0');
    if (secondsEl) secondsEl.textContent = String(s).padStart(2, '0');
    const etaEl = document.getElementById('eta-time');
    if (etaEl) {
      const eta = new Date(Date.now() + totalSeconds * 1000);
      etaEl.textContent = `${selectedNewDate || 'Today'} • ${eta.toLocaleTimeString('en-US', { hour:'2-digit', minute:'2-digit', hour12:false })}`;
    }
    if (totalSeconds === 0) clearInterval(countdownInterval);
  }

  tick();
  countdownInterval = setInterval(tick, 1000);
}

// ================================================================
// MODALS
// ================================================================
function showRescheduleModal() {
  if (orderCancelled) { showToast('⚠️ This order has been cancelled.', 'error'); return; }
  const modal = document.getElementById('reschedule-modal');
  const container = document.getElementById('date-options');
  if (!modal || !container) return;

  const dates = generateDateOptions();
  container.innerHTML = dates.map((d, i) => `
    <div class="date-chip ${i === 0 ? 'selected' : ''}" onclick="selectDate(this, '${d.fullDate}')">
      <div class="date-chip__day">${d.day}</div>
      <div class="date-chip__date">${d.date}</div>
      <div class="date-chip__time">${d.time}</div>
    </div>
  `).join('');

  if (dates.length > 0) selectedNewDate = dates[0].fullDate;
  openModal(modal);
}

function generateDateOptions() {
  const options = [];
  const today = new Date();
  const times = ['10:00 AM', '2:00 PM', '11:30 AM', '9:00 AM', '3:30 PM', '1:00 PM', '4:00 PM'];
  const days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
  const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];

  for (let i = 1; i <= 7; i++) {
    const d = new Date(today);
    d.setDate(today.getDate() + i);
    options.push({
      day: days[d.getDay()],
      date: `${months[d.getMonth()]} ${d.getDate()}`,
      time: times[i - 1],
      fullDate: `${months[d.getMonth()]} ${d.getDate()}, ${d.getFullYear()}`
    });
  }
  return options;
}

function selectDate(el, date) {
  document.querySelectorAll('.date-chip').forEach(c => c.classList.remove('selected'));
  el.classList.add('selected');
  selectedNewDate = date;
}

function confirmReschedule() {
  if (!selectedNewDate) { showToast('⚠️ Please select a date first', 'warning'); return; }
  hideModals();
  showToast(`✅ Delivery rescheduled to ${selectedNewDate} 🌷`, 'success');

  const dateEl = document.getElementById('original-date');
  if (dateEl) dateEl.textContent = selectedNewDate;

  // Reset animation and countdown for new date
  animationProgress = 0;
  animateTruck();
  resetCountdown(24 * 3600); // adds a day
}

function showCallDriverModal() {
  if (orderCancelled) { showToast('⚠️ This order has been cancelled.', 'error'); return; }
  const modal = document.getElementById('call-modal');
  if (modal) openModal(modal);
}

function showCancelModal() {
  if (orderCancelled) { showToast('⚠️ This order is already cancelled.', 'error'); return; }
  const modal = document.getElementById('cancel-modal');
  if (modal) openModal(modal);
}

function confirmCancel() {
  hideModals();
  orderCancelled = true;

  if (animationInterval) { clearInterval(animationInterval); animationInterval = null; }
  if (countdownInterval) { clearInterval(countdownInterval); countdownInterval = null; }

  // Grey out steps
  document.querySelectorAll('.step').forEach(s => {
    s.classList.remove('active', 'completed');
    s.style.opacity = '0.4';
  });

  // Zero the countdown
  ['hours','minutes','seconds'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.textContent = '00';
  });

  const etaEl = document.getElementById('eta-time');
  if (etaEl) etaEl.textContent = 'Cancelled';

  updateLocationText('Order cancelled 💔');
  updateDistanceText(0);

  // Grey out action buttons
  document.querySelectorAll('.option-btn--reschedule, .option-btn--call').forEach(btn => {
    btn.disabled = true;
    btn.style.opacity = '0.4';
  });

  showToast('❌ Order cancelled. Refund in 3–5 business days.', 'error');
}

function openModal(modal) {
  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function hideModals() {
  document.querySelectorAll('.liora-modal').forEach(m => m.classList.remove('open'));
  document.body.style.overflow = '';
}

// ================================================================
// TOAST
// ================================================================
function showToast(message, type = 'success') {
  const toast = document.getElementById('toast');
  const text = document.getElementById('toast-text');
  const icon = document.getElementById('toast-icon');

  if (!toast || !text) return;

  const icons = { success: '🌷', error: '❌', warning: '⚠️', info: '📍' };
  if (icon) icon.textContent = icons[type] || '🌷';
  text.innerHTML = message;
  toast.className = `delivery-notification ${type} show`;
  toast.style.display = 'flex';

  // Clear any existing timeout
  if (toast._timeout) clearTimeout(toast._timeout);
  toast._timeout = setTimeout(() => closeToast(), 5000);
}

function closeToast() {
  const toast = document.getElementById('toast');
  if (!toast) return;
  toast.classList.remove('show');
  setTimeout(() => { toast.style.display = 'none'; }, 350);
}

// ================================================================
// KEYBOARD + CLICK OUTSIDE
// ================================================================
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') hideModals();
});

document.addEventListener('click', e => {
  const userMenu = document.querySelector('.user-menu-container');
  if (userMenu && !userMenu.contains(e.target)) {
    const dropdown = userMenu.querySelector('.user-dropdown');
    if (dropdown) dropdown.classList.remove('show');
  }
});

// ================================================================
// INIT
// ================================================================
document.addEventListener('DOMContentLoaded', () => {
  initMap();
  startCountdown();

  const userMenuBtn = document.querySelector('.user-menu-btn');
  if (userMenuBtn) {
    userMenuBtn.addEventListener('click', e => {
      e.preventDefault();
      const dropdown = document.querySelector('.user-dropdown');
      if (dropdown) dropdown.classList.toggle('show');
    });
  }
});

window.addEventListener('beforeunload', () => {
  if (animationInterval) clearInterval(animationInterval);
  if (countdownInterval) clearInterval(countdownInterval);
});