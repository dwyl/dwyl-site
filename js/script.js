var burger = document.getElementById('burger');
var contact = document.getElementById('contact-link');

contact.addEventListener('click', function(e) {
  burger.checked = false;
});
