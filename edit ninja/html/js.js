const createLinkButton = document.getElementById('createLink');
const whatsappLink = document.getElementById('whatsappLink');

createLinkButton.addEventListener('click', function() {
  const message1 = encodeURIComponent(document.getElementById('message1').value);
  const message2 = encodeURIComponent(document.getElementById('message2').value);
  const message3 = encodeURIComponent(document.getElementById('message3').value);

  const whatsAppLink = `https://wa.me/9110242527?text=${message1}%20${message2}%20${message3}`;

  whatsappLink.href = whatsAppLink;
  whatsappLink.textContent = whatsAppLink;
});