let lIn = ['e','i','a','o','u'];
let lOut = ['enter','imes','ai','ober','ufat'];

let textIn = document.querySelector("#textIn");
let textOut = document.querySelector("#texOut");

let buttonEncript = document.querySelector("#encriptarbutton");
let buttonDesencript= document.querySelector("#desencriptarbutton");

buttonEncript.onclick = encriptar;
buttonDesencript.onclick = desencriptar;

textIn.focus();        

function encriptar() {
    let textForEncript = textIn.value;
    let lettersList = textForEncript.split(" ");
    
    for (let i=0; i< lettersList.length; i++) {
        for (let j=0; j< lIn.length; j++){
        
            if (lettersList[i].includes(lIn[j])) {

                textForEncript = textForEncript.replaceAll((lIn[j]),(lOut[j]));
            }
        }                           
    }

    if (lettersList =='') {
        document.querySelector('.ui').removeAttribute('hidden');
        document.querySelector('#logo2').removeAttribute('hidden')                
    }
    textOut = textForEncript;
    document.querySelector('#textOut').textContent = textForEncript;
    document.querySelector('#resultadoArea').textContent = textForEncript

    document.querySelector('#mostrar1').removeAttribute('hidden');
    document.querySelector('#ocultar1').setAttribute('hidden',true);
    console.log(lettersList);

}

function desencriptar () {
    let textForD = textIn.value;
    let wordsList = textForD.split(" ");
    
    for (let i=0; i< wordsList.length; i++) {
        for (let j=0; j< lIn.length; j++){
        
            if (wordsList[i].includes(lIn[j])) {

                textForD = textForD.replaceAll((lOut[j]),(lIn[j]));
            }
        }
    }
    if (wordsList =='') {
        document.querySelector('.ui').removeAttribute('hidden');
        document.querySelector('#logo2').removeAttribute('hidden');                
    }          
    textOut = textForD;
    document.querySelector('#textOut').textContent = textForD;
    document.querySelector('#resultadoArea').textContent = textForD;
    document.querySelector('#mostrar1').removeAttribute('hidden');
    document.querySelector('#ocultar1').setAttribute('hidden',true);
}    

function copiText() {
    let textCont = document.querySelector('#textOut');    
    textCont.select();
    document.execCommand('copy');
}       
