const cancelButton = document.getElementById('cancel');
cancelButton.addEventListener('click', 
function(){
    document.getElementById('userName').value = "";
    document.getElementById('distance').value = "";
    document.getElementById('userAge').value = "";
    document.getElementById('nameUser').innerHTML = "";
    document.getElementById('priceTicket').innerHTML = "";
})
const generateButton = document.getElementById('genera');
generateButton.addEventListener('click',
function(){
    let userName = document.getElementById('userName');
    let chilometers = Number(document.getElementById('distance').value);
    let userAge = Number(document.getElementById('userAge').value);
    console.log(userName, userAge, chilometers);
    document.getElementById('nameUser').innerHTML = userName.value;
    let prezzo = (chilometers * 0.21);
    if(userAge < 18){
        prezzo = prezzo - (prezzo / 100 * 20);
        console.log(prezzo);
    }else if(userAge > 65){
        prezzo = prezzo - (prezzo / 100 * 40);
    }
    document.getElementById('priceTicket').innerHTML = prezzo.toFixed(2) + '€';
})
