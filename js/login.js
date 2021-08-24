// login
document.getElementById('login-submit-btn').addEventListener('click', function(){
    // email
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;
    // console.log(userEmail);
    // password
    const passwordField = document.getElementById('user-password');
    const userPassword = passwordField.value;
    // console.log(userPassword);

    // check info
    if(userEmail == 'hamim@test.xyz' && userPassword == 'pass'){
        // window.location.href = 'banking.html';
        window.open('banking.html');

        // clear field
        emailField.value = "";
        passwordField.value = "";
    }
    else{
        alert('Invalid');
    }
})
