// i18n — walks dot-separated key paths, supports numeric indices for arrays
function resolve(obj, path) {
  return path.split('.').reduce(function (cur, key) {
    return cur != null ? cur[key] : undefined;
  }, obj);
}

function loadContent(lang) {
  return fetch('content/' + (lang || 'en') + '.json')
    .then(function (res) {
      if (!res.ok) throw new Error('content/' + lang + '.json not found');
      return res.json();
    })
    .then(function (data) {
      document.querySelectorAll('[data-i18n]').forEach(function (el) {
        var value = resolve(data, el.getAttribute('data-i18n'));
        if (value == null) return;
        // inputs get their placeholder updated; everything else gets textContent
        if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
          el.placeholder = value;
        } else {
          el.textContent = value;
        }
      });
    });
}

loadContent();

// Language picker
(function () {
  document.querySelectorAll('.lang').forEach(function (lang) {
    var btn = lang.querySelector('.lang__current');
    var active = lang.querySelector('.lang__active');
    btn.addEventListener('click', function (e) {
      e.stopPropagation();
      var open = lang.classList.toggle('is-open');
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    lang.querySelectorAll('.lang__opt').forEach(function (opt) {
      opt.addEventListener('click', function () {
        var picked = opt.textContent;
        opt.textContent = active.textContent;
        active.textContent = picked;
        lang.classList.remove('is-open');
        btn.setAttribute('aria-expanded', 'false');
      });
    });
  });
  document.addEventListener('click', function () {
    document.querySelectorAll('.lang.is-open').forEach(function (l) {
      l.classList.remove('is-open');
      var c = l.querySelector('.lang__current');
      if (c) c.setAttribute('aria-expanded', 'false');
    });
  });
})();

// Info dialog
(function () {
  var dlg = document.getElementById('healthy-dialog');
  var openBtn = document.getElementById('healthy-detail');
  if (!dlg || !openBtn) return;
  function open() { dlg.classList.add('is-open'); document.body.style.overflow = 'hidden'; }
  function close() { dlg.classList.remove('is-open'); document.body.style.overflow = ''; }
  openBtn.addEventListener('click', open);
  dlg.addEventListener('click', function (e) {
    if (e.target === dlg || e.target.closest('[data-dlg-close]')) close();
  });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') close(); });
})();

// Gallery carousel (mobile only)
(function () {
  var track = document.getElementById('a2-gallery');
  if (!track) return;
  var prev = document.querySelector('[data-gallery-prev]');
  var next = document.querySelector('[data-gallery-next]');
  function step(dir) {
    var card = track.querySelector('.usecase');
    var amount = card ? card.getBoundingClientRect().width + 16 : track.clientWidth * 0.8;
    track.scrollBy({ left: dir * amount, behavior: 'smooth' });
  }
  if (prev) prev.addEventListener('click', function () { step(-1); });
  if (next) next.addEventListener('click', function () { step(1); });
})();
