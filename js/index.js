const Validateinput = (v) => {
  if (v === "") {
    document.querySelector(".span_enter_text").style.visibility = "visible";
    setTimeout(() => {
      document.querySelector(".span_enter_text").style.visibility = "hidden";
    }, 900);
  }
  return false;
};


const Encriptar = () => {
  let texto = document.querySelector(".textarea_entertext").value;
  Validateinput(texto)
  let textoCifrado = texto
    .replace(/e/gi, "enter")
    .replace(/i/gi, "imes")
    .replace(/a/gi, "ai")
    .replace(/o/gi, "ober")
    .replace(/u/gi, "ufat");
  document.querySelector(".textarea_result").value = textoCifrado;
  document.querySelector(".textarea_entertext").value = "";
};

const BtnEncriptar = document.querySelector(".btnencriptar");
BtnEncriptar.addEventListener("click", Encriptar);

const Desencriptar = () => {
  let texto = document.querySelector(".textarea_entertext").value;
  Validateinput(texto)
  let textoCifrado = texto
    .replace(/enter/gi, "e")
    .replace(/imes/gi, "i")
    .replace(/ai/gi, "a")
    .replace(/ober/gi, "o")
    .replace(/ufat/gi, "u");
  document.querySelector(".textarea_result").value = textoCifrado;
  document.querySelector(".textarea_entertext").value = "";
}

const BtnDesencriptar = document.querySelector(".btndesencriptar");
BtnDesencriptar.addEventListener("click",Desencriptar)

const Copy = () => {
  let content = document.querySelector(".textarea_result");
  content.select();
  navigator.clipboard.writeText(content.value);
  content.value = "";

  document.querySelector(".span_result_copy").style.visibility = "visible";
  setTimeout(() => {
    document.querySelector(".span_result_copy").style.visibility = "hidden";
  }, 550);
}

var BtnCopy = document.querySelector(".btncopia");
BtnCopy.addEventListener("click", Copy);
