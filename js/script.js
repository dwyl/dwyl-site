'use strict';
(function () {
  var burger = document.getElementById('burger');
  var contact = document.getElementById('contact-link');
  var cookieNote = document.getElementById('cookie-notification');
  var cookieButton = document.getElementById('cookie-ok');
  var hasConsented = localStorage.getItem('cookieOk');

  function toggleCookieNote (bool) {
    if (bool) {
      cookieNote.className += ' dn';
    }
  }

  cookieButton.addEventListener('click', function () {
    toggleCookieNote(true);
    localStorage.setItem('cookieOk', 'true');
  });

  contact.addEventListener('click', function () {
    burger.checked = false;
  });

  document.querySelectorAll('.yes-script').forEach(function (node) {
    var newList = node.className.replace('yes-script', '');
    node.className = newList;
  });

  toggleCookieNote(hasConsented);
})();
