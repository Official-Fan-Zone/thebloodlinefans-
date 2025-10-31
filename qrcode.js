document.getElementById('generateQRBtn').addEventListener('click', () => {
  const name = document.getElementById('cardName').value;
  const qrOutput = document.getElementById('qrCodeOutput');
  const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(name)}&size=200x200`;
  qrOutput.innerHTML = `<img src="${qrUrl}" alt="QR Code">`;
});