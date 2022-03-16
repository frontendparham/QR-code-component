"use strict";

const qrcode = new QRCode(document.querySelector(".card__qrcode-self"), {
  text: "https://www.frontendmentor.io/",
  width: 140,
  height: 140,
  colorDark: "#ffffff",
  colorLight: "#2b7dfa",
  correctLevel: QRCode.CorrectLevel.H,
});
