const PassWord=document.querySelector('.PassWord');
const pasword=document.querySelector('#pasword');
const copy=document.querySelector('#copy');
const header=document.querySelector('.header');
const larpass=document.querySelector('#larpass');
const masiscule=document.querySelector('#masiscule');
const miniscule=document.querySelector('#miniscule');
const numer=document.querySelector('#numer');
const speciaux=document.querySelector('#speciaux');
const GenerePass=document.querySelector('#GenerePass');

// a-Z : START 97 - AND 122
// A-Z : START 65 - AND 90
// 0-9 : START 48 - AND 57
// SPÉCE: START 33 - AND 47









function lettres(beginning, ending){
    let tab="";
    for(let i=beginning ; i <= ending ; i++){
        tab += String.fromCharCode(i);
    }
    return tab.split('');
    
}
console.log(lettres(32, 100));

let tabMin = tab(97, 122);
let tabMaj = tab(65,90);
let tabNum = tab(48, 57);
let tabSpec = tab(33,47);