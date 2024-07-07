
var useremail=document.querySelector('.useremail');
var userpass=document.querySelector('.userpass');
var users=[];
function newDoc() {
    window.location.assign("home.html");
  }
if(localStorage.getItem('allUsers')!=null){
    users=JSON.parse(localStorage.getItem('allUsers'));
    }
    
    function login(){
        if(useremail.value==''||userpass.value=='')
            {
            
                document.querySelector('.valid').innerHTML='<p >All inputs is required</p>';
           return 0;
            }
            var ok=0;
for(var i=0;i<users.length;i++)
    {
        if(useremail.value==users[i].euser&&userpass.value==users[i].puser)
            {
                ok=1;
                
                break;
            }
    }
    if(ok==0)
        {
            document.querySelector('.valid').innerHTML='<p >incorrect email or password</p>';
            return 0;
        }
    else if(ok==1)
        {
            console.log('seccess');
             document.querySelector('.valid').innerHTML='';
           window.location.assign("home.html");
           return 0;
         
        }
    }




    var logg=document.querySelector('button');
    logg.addEventListener('click',login);
    var signup=document.querySelector('a');
    signup.addEventListener('click',function(){
        window.location.assign("signup.html")
    });