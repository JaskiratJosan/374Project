
function Loginform(){

var warn="";

var rt=true;

var str_user_inputs = "";


var x=document.forms.Login.email.value;

if (x==null || x==""){

    warn +="Email is empty. \n";
    rt=false;

}

else if(x.length > 60)
{
   warn += "Max length for email is 60 characters.\n";
   rt =false;
}

else{

    str_user_inputs +="Email: "+x+"\n";

}



var z=document.forms.Login.psw.value;

if(z.length != 8)
{
  warn += "Password must be exactly of 8 characters.\n";
  rt = false;
}

else{
  str_user_inputs +="Password: "+z+"\n";
}



if(rt==false){

  alert(warn);
  return false;
}

else{
  alert(str_user_inputs);
  return false;
}

}