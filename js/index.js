const QRCode = require("qrcode");
const Pix = require("./pix");

const pix = new Pix(
  "mellnovais14@gmail.com",
  "pg",
  "Mel Anny Novais de Castro Silva",
  "pacatuba",
  "TX1234",
  100.0
);
const payload = pix.getPayload();
console.log(payload);

// Função para gerar o QR Code e salvar como um arquivo de imagem
QRCode.toFile("qrcode.png", payload, function (err) {
  if (err) throw err;
  console.log("QR Code gerado e salvo como qrcode.png");
});

// Alternativamente, você pode gerar o QR Code como uma string de base64
QRCode.toDataURL(payload, function (err, url) {
  if (err) throw err;
  console.log("QR Code gerado como base64:");
  console.log(url);
});
