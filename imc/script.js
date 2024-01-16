import {modal}from './modal.js'
import {alertErro}from "./alertErro.js"
import { notNumber,IMC } from './ultils.js';

const form = document.querySelector('form');

const inputWeight = document.querySelector('#weight');

const inputHeight = document.querySelector('#height');




form.onsubmit = function(event){
    event.preventDefault()
    
    const weight = inputWeight.value
    const height = inputHeight.value

    const showAlertErro = notNumber(weight) || notNumber(height)
    

     if(showAlertErro){
        alertErro.open()
        return;
     }

     alertErro.close()

    

    const result = IMC(weight,height)
    const message = `seu IMC é ${result}`


    
    modal.message.innerText = message
    modal.open()

    
};

inputWeight.oninput = () => alertErro.close();
inputHeight.oninput = () => alertErro.close();





