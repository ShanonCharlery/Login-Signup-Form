const loginBtn = document.getElementById('login_btn')
const resetLink = document.getElementById('reset_link')
const openSignup = document.getElementById('open_signup')
const form = document.getElementById('form')
const signupBtn = document.getElementById('signup_btn')
let birthday = document.getElementById('birthday')
let email = document.getElementById('email')
let password = document.getElementById('password')
let confirmPassword = document.getElementById('confirm_password')
let passwordsCheckbox = document.getElementById('passwords_checkbox')
let passwordStrengthContainer = document.getElementById('password_strength_container')
let passwordStrengthLevel = document.getElementById('password_strength_level')
let passwordStrengthText = document.getElementById('password_strength_text')
let loginStatusText = document.getElementById('login_status_text')

//user login
loginBtn.addEventListener('click', function(){
    let inputEmail = document.getElementById('input_email')
    let inputPassword = document.getElementById('input_password')
    let loginEmail = localStorage.getItem('email')
    let loginPassword = localStorage.getItem('password')

    if(inputEmail.value !== loginEmail || inputPassword.value !== loginPassword){

        loginStatusText.innerText = 'Your email or your password is wrong.'
        return false
    }else{

        alert("Congratulations, you are logged in.")
        return true
    }
})

openSignup.addEventListener('click', function(){
    document.getElementById('signup_form').style.display ='block'
    document.getElementById('open_signup').style.visibility ='hidden'
})

//signup form submition
form.addEventListener('submit', (e) =>{
    e.preventDefault()
})

signupBtn.addEventListener('click', (e) =>{
    
    if(validatePasswordConfirmation() === true){

    let firstName = document.getElementById('first_name')
    let lastName = document.getElementById('last_name')

    firstName = firstName.value
    localStorage.setItem('firstName', firstName)

    lastName = lastName.value
    localStorage.setItem('lastName', lastName)

    email = email.value
    localStorage.setItem('email', email)

    birthday = birthday.value
    localStorage.setItem('birthday', birthday)

    password = password.value
    localStorage.setItem('password', password)

    }
})

//checks password strength
function setStrength(value){
    passwordStrengthLevel = value + '%'
}

function setColorAndText(color, text){
    
    passwordStrengthText.innerHTML = text
    passwordStrengthText.style.color = color
}

function clearStrength(){
    passwordStrengthText.innerHTML = ''
}

password.addEventListener('keyup', checkPasswordStrength);
    function checkPasswordStrength(){
        let strength = 0 

        if(password.value == 0){
            clearStrength()
            return false
        }

        if(password.value.match(/\s/)){
            setColorAndText('red', "White space is not allowed")
            return false
        }

        if(password.value.match(/<|>/)){
            setColorAndText('red', "< > characters are not allowed");
            return false;
         }

        if(password.value.length >= 15){
            setColorAndText('red', "Please enter less than 15 characters inside password")
            return false
        }

        if(password.value.length < 8){
            strength = 20
            setColorAndText('red', "Please enter more than 8 characters inside password")
            return false
        }else{
            let lowerCase = password.value.match(/[a-z]/)
            let upperCase = password.value.match(/[A-Z]/)
            let numbers = password.value.match(/[0-9]/)
            let specialCharacters = password.value.match(/[\!\~\@\&\#\$\%\^\&\*\(\)\{\}\?\-\_\+\=]/)

            if(lowerCase || upperCase || numbers || specialCharacters){
                strength = 40;
                setColorAndText("red", "Weak"); 
             }

             if((lowerCase && upperCase) || (lowerCase && numbers) || (lowerCase && specialCharacters) ||
                (upperCase && numbers) || (upperCase && specialCharacters) || (numbers && specialCharacters)){
                strength = 60;
                setColorAndText("orange", "Medium");			
             } 

             if((lowerCase && upperCase && numbers) || (lowerCase && upperCase && specialCharacters) ||
                (lowerCase && numbers && specialCharacters) ||  (upperCase && numbers && specialCharacters)){
                strength = 80;
                setColorAndText("#088f08", "Strong");	
             }

             if(lowerCase && upperCase && numbers && specialCharacters){
                strength = 100;
                setColorAndText("green", "Very Strong");	
             }
        }

        setStrength(strength)
    }


//checks password confirmation
function validatePasswordConfirmation(){
    if(password.value !== confirmPassword.value){
        alert("The two passwords do not match, please retype. ")
        return false
    }

    else{
        return true
    }
}

//shows or hides the password
passwordsCheckbox.addEventListener('click', function (){
    if(password.type==='password' && confirmPassword.type==='password'){
        password.type='text'
        confirmPassword.type='text'
    }

    else{
        password.type = "password"
        confirmPassword.type='password'
    }
})
























































