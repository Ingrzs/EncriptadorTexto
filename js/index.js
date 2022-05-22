function encriptar (){
    var texto = document.querySelector(".texto1").value;
    var textoCifrado = texto.replace(/e/gi, "enter").replace(/i/gi, "imes").replace(/a/gi, "ai").replace(/o/gi, "ober").replace(/u/gi, "ufat");
    document.querySelector(".texto2").value = textoCifrado;
    document.querySelector(".texto1").value;
    }


    
var boton1 = document.querySelector(".btnencriptar");
boton1.onclick = encriptar;


function desencriptar (){
     var texto = document.querySelector(".texto1").value;
      var textoCifrado = texto.replace(/enter/gi, "e").replace(/imes/gi, "i").replace(/ai/gi, "a").replace(/ober/gi, "o").replace(/ufat/gi, "u"); 
      document.querySelector(".texto2").value = textoCifrado;
       document.querySelector(".texto1").value;

}

var boton2 = document.querySelector(".btndesencriptar"); 
boton2.onclick = desencriptar;


function copyToClipBoard() {

    var content = document.querySelector(".texto2");
    content.select();
    document.execCommand('copy');

    }

    var botoncopia = document.querySelector(".copia");
    botoncopia.onclick = copyToClipBoard