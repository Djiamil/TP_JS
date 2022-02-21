const conteneur=document.querySelector('.conteneur');
const button=document.querySelector('#adnew');

function chargeTextarea(){

    var i1=document.createElement('i');
    i1.setAttribute('class','fa fa-edit');

    var i2=document.createElement('i');
    i2.setAttribute('class','fa fa-trash');

    var header=document.createElement('div');
    header.setAttribute('class','header-top-top');


    header.appendChild(i1);
    header.appendChild(i2);


    var text=document.createElement('textarea');
    text.setAttribute('class','Demo');
    text.setAttribute('cols','30');
    text.setAttribute('rows','20');

    var headertop=document.createElement('div');
    headertop.setAttribute('class','header-top');
    
    headertop.appendChild(header);
    headertop.appendChild(text);

    conteneur.appendChild(headertop);

    i2.addEventListener('click',function(){
        headertop.parentNode.removeChild(headertop);
    });

    i1.addEventListener('click',function(){
        text.toggleAttribute('disabled');
    });
}

button.addEventListener('click', function(){
    chargeTextarea();
});

Window.onload=chargeTextarea();