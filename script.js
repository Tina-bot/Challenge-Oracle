
/* Reglas de encriptación: 
"e" es convertido para "enter" 
"i" es convertido para "imes"
"a" es convertido para "ai"
"o" es convertido para "ober"
"u" es convertido para "ufat"
Solo letras minusculas
No se permite acentuación de palabras 
*/

/* Reglas de desencriptación: 
"enter" es convertido para "e" 
"imes" es convertido para "i"
"ai" es convertido para "a"
"ober" es convertido para "o"
"ufat" es convertido para "u"
Solo letras minusculas
No se permite acentuación de palabras   
*/

const textBox = document.getElementById("input-texto");
const textResult = document.getElementById("msg");
const btnEnc = document.getElementById("btn-encriptar");
const btnDes = document.getElementById("btn-desencriptar")
const btnCopy = document.getElementById("btn-copy");

btnEnc.addEventListener("click", encrypt);
btnDes.addEventListener("click", decrypt);
btnCopy.addEventListener("click", copyToClipboard);


function encrypt(event) {
    event.preventDefault();
    const text = textBox.value;
    let textReturn = text.split('');

    for (let index = 0; index < text.length; index++) {

        switch (textReturn[index]) {

            case "e":
                textReturn[index] = "enter";
                break;

            case "i":
                textReturn[index] = "imes";
                break;

            case "a":
                textReturn[index] = "ai";
                break;

            case "o":
                textReturn[index] = "ober";
                break;

            case "u":
                textReturn[index] = "ufat";
                break;

            default:
                break;
        }
    }

    textResult.value = textReturn.join("");
}

function decrypt(event) {

    event.preventDefault();
    const text = textBox.value;
    const textReturn = text
        .replaceAll("ai", "a")
        .replaceAll("enter", "e")
        .replaceAll("imes","i")
        .replaceAll("ober","o")
        .replaceAll("ufat","u");

    textResult.value = textReturn;

}

function copyToClipboard () {

    textResult.select();
    document.execCommand("copy");
    window.alert(`"${textResult.value}" Copied to clipboard`);

}

