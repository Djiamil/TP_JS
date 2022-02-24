
const divGauche= document.querySelector('#divGauche');
const divDroite= document.querySelector('#divDroite');
const droite= document.querySelector('#btn1');
const gauche= document.querySelector('#btn2');

const tab=['Mon Premier','Mon Deuxieme','Mon troisieme','Mon Quatrieme'];
  for (let i = 0; i < tab.length; i++) {
    const para = document.createElement('p');
    para.innerHTML = tab[i];
    para.id='paragraphe';
    divGauche.appendChild(para);

para.addEventListener('mousemove', function(){
  para.className='survol';
})
droite.addEventListener('click',function(){
  if(para.className ==='survol'){
    para.parentNode.removeChild(para);
    divDroite.appendChild(para);
    para.className= "";
  }
  desButton(divGauche,droite);
  desButton(divDroite,gauche);
})
gauche.addEventListener('click',function(){
  if(para.className ==='survol'){
    para.parentNode.removeChild(para);
    divGauche.appendChild(para);
    para.className= "";
  }
  desButton(divDroite,gauche);
  desButton(divGauche,droite);
})
}
function desButton(ddiv,Bbutton){
  if(ddiv.childNodes.length ===0){
    Bbutton.disabled = true;
  }else{
    Bbutton.disabled=false;
  }
}
desButton(divGauche,droite);
desButton(divDroite,gauche);



// function changePlace(){

// for (let i = 0; i < LesP.length; i++) {
//   LesP[i].addEventListener('click', function(){
//     LesP[i].classList.toggle('actived');

//     droite.addEventListener('click',function(){
//       const select=document.querySelector('.actived');
//       divDroite.appendChild(select);

//       gauche.addEventListener('click', function(){
//         const select=document.querySelector('.actived');
//         divGauche.appendChild(select);

//       });

//     });

  
// });
// }
// }
// changePlace();























// function creationTableau(){
//     var premier=document.createElement('th');
//         premier.setAttribute('class','premier');

//     var deuxieme=document.createElement('th');
//        deuxieme .setAttribute('class','deuxieme');

//      var troisieme=document.createElement('th');
//        troisieme.setAttribute('class','troisieme');

//      var quatrieme=document.createElement('th');
//        quatrieme .setAttribute('class','quatrieme');

//      var ttr=document.createElement('tr');
//        ttr.setAttribute('class', 'conteconte');

//        ttr.appendChild(premier);
//        ttr.appendChild(deuxieme);
//        ttr.appendChild(troisieme);
//        ttr.appendChild(quatrieme);


//     var table=document.createElement('table');
//        table.setAttribute('class','conte');
//        table.appendChild(ttr);


//     var divGauche=document.createElement('div');
//         divGauche.setAttribute('class','caisse');
//         divGauche.appendChild(table)

//         return this;
// }

// function dePlace(){

//     var btn1=document.createElement('button');
//         btn1.setAttribute('class', 'btn');
//     var divDroite=document.createElement('div');
//         divDroite.setAttribute('class','caisse')
//     tab=[];
//     btn1.addEventListener('click', function(){
//         if (creationTableau()!=0) {
//             tab=creationTableau();
//         }
    
// });
// }
// console.log(dePlace)
