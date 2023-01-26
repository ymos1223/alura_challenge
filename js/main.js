function encriptar() {

  validar();

  if (correcto) {
  var encriptado=texto.replace(/e/igm, "enter");
  var encriptado=encriptado.replace(/i/igm, "imes");
  var encriptado=encriptado.replace(/a/igm, "ai");
  var encriptado=encriptado.replace(/o/igm, "ober");
  var encriptado=encriptado.replace(/u/igm, "ufat");

  document.getElementById("ingresa-texto").innerHTML=encriptado;
  document.getElementById("caja-derecha").style.background="#f44336";
  document.getElementById("enc-des").innerHTML="Texto Encriptado";

ocultarMostrar();
 encripConExito(); // alerta.js
  }
}

function desencriptar() {

  validar();

  if (correcto) {

  var desencriptado=texto.replace(/ai/igm, "a");
  var desencriptado=desencriptado.replace(/enter/igm, "e");
  var desencriptado=desencriptado.replace(/imes/igm, "i");
  var desencriptado=desencriptado.replace(/ober/igm, "o");
  var desencriptado=desencriptado.replace(/ufat/igm, "u");

  document.getElementById("ingresa-texto").innerHTML=desencriptado;
  document.getElementById("caja-derecha").style.background="#04AA6D";
  document.getElementById("enc-des").innerHTML="Texto Desencriptado";
  

 ocultarMostrar();
 decripConExito(); // alerta.js
}
}

function validar() {
  texto = document.getElementById("textarea").value;
  correcto = false;
  /*expReg detecta mayúsculas y carácteres especiales, permite espacios en blanco y la letra "ñ"
  No permite \n (nueva linea) y \r (retorno de carro) */
  let expReg= /[\n\r]|[^a-z0-9ñ\s]/g; 
  let validar=expReg.test(texto);
  if (texto=="") {
    noPuedeEstarVacio(); //alerta.js
   } else {
    if (validar) {
     soloMin();  //alerta.js
    } else {
      correcto=true;
      return texto;
    }
  }
  }
  
  function ocultarMostrar() {

    document.getElementById("imagen-derecha").style.display="none";
    document.getElementById("text-error").style.display="none";
    document.getElementById("txt-encrip").style.display="show";
    document.getElementById("txt-encrip").style.display="inherit";
    document.getElementById("copy").style.display="show";
    document.getElementById("copy").style.display="inherit";
    document.getElementById("textarea").value="";
    }

    
function copy() {

var copyText = document.getElementById("ingresa-texto");
copyText.select();
copyText.setSelectionRange(0, 99999); // Para dispositivos celulares
navigator.clipboard.writeText(copyText.value);
copiado(); //alerta.js

}




