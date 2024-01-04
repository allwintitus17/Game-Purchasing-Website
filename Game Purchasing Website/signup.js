/*document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');

    form.addEventListener('submit', function (event) {
        let isValid = true;

        // Validate First Name
        const firstName = form.querySelector('[name="firstname"]').value.trim();
        if (firstName === '') {
            isValid = false;
            alert('Please enter your First Name.');
        }

        // Validate Last Name
        const lastName = form.querySelector('[name="lastname"]').value.trim();
        if (lastName === '') {
            isValid = false;
            alert('Please enter your Last Name.');
        }

        // Validate Email
        const email = form.querySelector('[name="email"]').value.trim();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            isValid = false;
            alert('Please enter a valid Email address.');
        }

        // Validate Phone Number
        const phone = form.querySelector('[name="phone"]').value.trim();
        const phoneRegex = /^[0-9]{10}$/;
        if (!phoneRegex.test(phone)) {
            isValid = false;
            alert('Please enter a valid Phone Number (10 digits only).');
        }

        // Validate Password
        const password = form.querySelector('[name="password"]').value.trim();
        if (password === '') {
            isValid = false;
            alert('Please enter a Password.');
        }

        // Validate Confirm Password
        const confirmPassword = form.querySelector('[name="password1"]').value.trim();
        if (confirmPassword === '') {
            isValid = false;
            alert('Please confirm your Password.');
        } else if (confirmPassword !== password) {
            isValid = false;
            alert('Passwords do not match.');
        }

        if (!isValid) {
            event.preventDefault(); // Prevent form submission if validation fails
        }
    });
});
*/
const form =document.querySelector('#form');
const username=document.querySelector('#username');
const email=document.querySelector('#email');
const password=document.querySelector('#cpassword');

form.addEventListener('submit',(e)=>{
e.preventDefault()/*if any error comes the forms should not be submitted so we use prevent default*/
validateInputs();
})
function validateInputs(){
const usernameVal=username.value.trim();
const emailVal=email.value.trim();
const passwordVal=password.value.trim();
const cpasswordVal=cpassword.value.trim();




}

function seterror(element,message){
       const inputgroup=element.parentElement;
       const errorelement=inputgroup.querySelector
}