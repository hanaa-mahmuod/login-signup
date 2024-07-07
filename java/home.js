var useremail=document.querySelector('.useremail');
var userpass=document.querySelector('.userpass');
var users=[];
if(localStorage.getItem('allUsers')!=null){
    users=JSON.parse(localStorage.getItem('allUsers'));
    }
    