window.onload = ()=>{
    let myform = document.getElementById('myform');
    myform.addEventListener('submit' ,function(e){
        let email = document.getElementById('email');
        if(email.value == ''){
            let invalid = document.getElementById('invalid');
            invalid.innerHTML = 'Le Champ ne doit pas etre vide';
            invalid.style.color = 'red';
        }
        else {
            e.preventDefault();
            document.getElementById('popupbox').style.display = 'block';
        }
    }); 
}
function showquestions() {
    const question = document.getElementById('phase1');
    question.style.display = 'block';
    const demarrer = document.getElementById('phase0');
    demarrer.style.display = 'none';
    $('#next').show();
}