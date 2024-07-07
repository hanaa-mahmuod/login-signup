var username=document.querySelector('.username');
var useremail=document.querySelector('.useremail');
var userpass=document.querySelector('.userpass');
var users=[];
if(localStorage.getItem('allUsers')!=null){
    users=JSON.parse(localStorage.getItem('allUsers'));
    }
function clear(){
    username.value="";
    useremail.value="";
    userpass.value="";
    
}
function adduser(){

if(username.value==''||useremail.value==''||userpass.value=='')
    {
    
        document.querySelector('.valid').innerHTML='<p >All inputs is required</p>';
   return 0;
    }
    for(var i=0;i<users.length;i++)
        {
            if(useremail.value==users[i].euser)
                {
                    
                    document.querySelector('.valid').innerHTML='<p> email already exists</p>';
                    return 0;
                }
        }
   
       var user=
       {
        nuser:username.value,
        euser:useremail.value,
        puser:userpass.value

       }; 
       users.push(user);
       localStorage.setItem("allUsers",JSON.stringify(users));
       document.querySelector('.valid').innerHTML='<p style="color: #28A744;" >Success</p>';
       
       
    }

var signup=document.querySelector('button');
signup.addEventListener('click',adduser);
var signin=document.querySelector('a');
    signin.addEventListener('click',function(){
        window.location.assign("index.html")
    });