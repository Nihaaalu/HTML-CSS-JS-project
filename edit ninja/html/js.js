const createLinkButton = document.getElementById('createLink');
const whatsappLink = document.getElementById('whatsappLink');

createLinkButton.addEventListener('click', function() {
  const inf1 = encodeURIComponent(document.getElementById('inf1').value);
  const inf2 = encodeURIComponent(document.getElementById('inf2').value);
  const inf3 = encodeURIComponent(document.getElementById('inf3').value);

  const whatsAppLink = `https://wa.me/9110242527?text=${message1}%20${message2}%20${message3}`;

  whatsappLink.href = whatsAppLink;
  whatsappLink.textContent = whatsAppLink;
});