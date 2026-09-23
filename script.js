// Heartfelt Care Foundation site behavior

document.addEventListener('DOMContentLoaded', function () {

  /* Mobile menu toggle */
  var header = document.querySelector('.site-header');
  var toggle = document.querySelector('.menu-toggle');
  if (toggle) {
    toggle.addEventListener('click', function () {
      header.classList.toggle('open');
    });
    document.querySelectorAll('.nav-links a').forEach(function (link) {
      link.addEventListener('click', function () { header.classList.remove('open'); });
    });
  }

  /* Animated stat counters: trigger once when scrolled into view */
  var stats = document.querySelectorAll('.stat-number[data-target]');
  var counted = false;
  function animateStats() {
    if (counted) return;
    var statsSection = document.querySelector('.stats-grid');
    if (!statsSection) return;
    var rect = statsSection.getBoundingClientRect();
    if (rect.top > window.innerHeight * 0.85) return;
    counted = true;
    stats.forEach(function (el) {
      var target = parseInt(el.getAttribute('data-target'), 10) || 0;
      var suffix = el.getAttribute('data-suffix') || '';
      var current = 0;
      var step = Math.max(1, Math.ceil(target / 60));
      var timer = setInterval(function () {
        current += step;
        if (current >= target) {
          current = target;
          clearInterval(timer);
        }
        el.textContent = current + suffix;
      }, 25);
    });
  }
  window.addEventListener('scroll', animateStats);
  animateStats();

  /* Lightbox for photo grids */
  var lightbox = document.getElementById('lightbox');
  var lightboxImg = document.getElementById('lightbox-img');
  document.querySelectorAll('.photo-grid img').forEach(function (img) {
    img.addEventListener('click', function () {
      lightboxImg.src = img.src;
      lightboxImg.alt = img.alt;
      lightbox.classList.add('open');
    });
  });
  var closeBtn = document.querySelector('.lightbox-close');
  if (closeBtn) closeBtn.addEventListener('click', function () { lightbox.classList.remove('open'); });
  if (lightbox) {
    lightbox.addEventListener('click', function (e) {
      if (e.target === lightbox) lightbox.classList.remove('open');
    });
  }

  /* Comment / message routing: opens WhatsApp or email, pre-filled */
  var form = document.getElementById('message-form');
  if (form) {
    var nameField = document.getElementById('msg-name');
    var emailField = document.getElementById('msg-email');
    var messageField = document.getElementById('msg-text');
    var whatsappNumber = '255781572425'; // no leading 0 / +, per wa.me format
    var email = 'heartfeltcarefoundation@gmail.com';

    function buildText() {
      var name = nameField.value.trim() || 'A visitor';
      var replyTo = emailField ? emailField.value.trim() : '';
      var message = messageField.value.trim();
      if (!message) {
        messageField.focus();
        return null;
      }
      var text = name + ' via website: ' + message;
      if (replyTo) {
        text += ' (reply to: ' + replyTo + ')';
      }
      return text;
    }

    document.getElementById('send-whatsapp').addEventListener('click', function () {
      var text = buildText();
      if (!text) return;
      window.open('https://wa.me/' + whatsappNumber + '?text=' + encodeURIComponent(text), '_blank');
    });

    document.getElementById('send-email').addEventListener('click', function () {
      var text = buildText();
      if (!text) return;
      var subject = 'Message from heartfeltcarefoundation.org';
      window.location.href = 'mailto:' + email + '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(text);
    });
  }

  /* Footer year */
  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* Event countdowns */
  var countdownEls = document.querySelectorAll('.countdown[data-event-date]');
  if (countdownEls.length) {
    var updateCountdowns = function () {
      countdownEls.forEach(function (el) {
        var target = new Date(el.getAttribute('data-event-date')).getTime();
        var now = new Date().getTime();
        var diff = target - now;

        var dayEl = el.querySelector('.cd-days');
        var hourEl = el.querySelector('.cd-hours');
        var minEl = el.querySelector('.cd-mins');
        var secEl = el.querySelector('.cd-secs');

        if (diff <= 0) {
          el.classList.add('is-past');
          if (dayEl) dayEl.textContent = '0';
          if (hourEl) hourEl.textContent = '0';
          if (minEl) minEl.textContent = '0';
          if (secEl) secEl.textContent = '0';
          return;
        }

        var days = Math.floor(diff / 86400000);
        var hours = Math.floor((diff % 86400000) / 3600000);
        var mins = Math.floor((diff % 3600000) / 60000);
        var secs = Math.floor((diff % 60000) / 1000);

        if (dayEl) dayEl.textContent = days;
        if (hourEl) hourEl.textContent = hours;
        if (minEl) minEl.textContent = mins;
        if (secEl) secEl.textContent = secs;
      });
    };
    updateCountdowns();
    setInterval(updateCountdowns, 1000);
  }
});
