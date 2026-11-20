/* Prépare un e-mail sans serveur ni collecte de données. */
(function () {
  'use strict';

  const form = document.getElementById('contact-form');
  if (!form) {
    return;
  }

  const status = document.getElementById('contact-status');

  form.addEventListener('submit', function (event) {
    event.preventDefault();

    if (!form.reportValidity()) {
      return;
    }

    const name = document.getElementById('contact-name').value.trim();
    const email = document.getElementById('contact-email').value.trim();
    const subject = document.getElementById('contact-subject').value.trim();
    const message = document.getElementById('contact-message').value.trim();

    const fullSubject = '[Portfolio URCA] ' + subject;
    const body = [
      'Nom : ' + name,
      'Adresse e-mail : ' + email,
      '',
      'Message :',
      message,
      '',
      '— Message préparé depuis le portfolio.'
    ].join('\n');

    const mailto = 'mailto:contact@tyvoryx.com'
      + '?subject=' + encodeURIComponent(fullSubject)
      + '&body=' + encodeURIComponent(body);

    status.textContent = 'Votre application de messagerie va s’ouvrir. Vérifiez le message avant de l’envoyer.';
    window.location.href = mailto;
  });
})();