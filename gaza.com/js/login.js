function checkLoginStatus(){
    var loginBtn = document.querySelector('#loginBtn');
    var nameTxt = document.querySelector('#name');
    var login =document.getElementById('button');


    if(gauth.isSignedIn.get())
    {
        console.log('logined');
        loginBtn.value = 'Logout';
        var profile = gauth.currentUser.get().getBasicProfile();
        console.log(profile.getName());
        nameTxt.innerHTML ='Welcome <strong>'+profile.getName()+'</strong>';
        login.innerHTML = login.innerHTML.replace('로그인','');
    }
    else 
    {
        console.log('logouted');
        loginBtn.value = 'Login';
        nameTxt.innerHTML ='';
        login.innerHTML = login.innerHTML.replace('','로그인');
    
    }
}
function init(){
  console.log('init');
  gapi.load('auth2', function() {
    console.log('auth2');
    window.gauth = gapi.auth2.init({
      client_id:'355347563908-ltpvkan3ks4gda5jrgbr0i9s2qn8do29.apps.googleusercontent.com'
    })
    gauth.then(function(){
      console.log('googleAuth success');
      checkLoginStatus();
    }, function(){
      console.log('googleAuth fail');
    });
  });
}