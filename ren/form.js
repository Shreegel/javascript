function onSubmit(event){
    event.preventDefault();
    var firstname =document.getElementById('fname').value;
    var lastname =document.getElementById('lname').value;
    var phonenumber =document.getElementById('phonenumber').value;
    var email =document.getElementById('email').value;

    console.log(firstname);
    console.log(lastname);
    console.log(phonenumber);
    console.log(email);
   
}

window.onload =function(){
    document.getElementById('ContactForm').addEventListener('submit',onSubmit);
}

