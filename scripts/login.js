console.log('log in js connected');

document.getElementById('signin-btn').addEventListener('click', function(){

    const adminName = document.getElementById('input-name').value;
    const password = document.getElementById('input-pass').value;

    // console.log(adminName, password);

    if(adminName =='admin' && password == 'admin123'){
        alert('sign in successful');
        window.location.assign("main.html");
    }

    else{
        alert('sign in failed');
        return;
    }

});