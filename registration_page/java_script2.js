let login = document.querySelector("#login");
let password = document.querySelector("#password1");
let repeat_password = document.querySelector("#repeat_the_password");

 document.querySelector(".btn_fields").addEventListener("click",function registration(){

    if(login.value == 0 )
    {
      document.querySelector(".error").innerHTML = "заполните поля";
     }

    else
    {
       document.querySelector(".error").innerHTML = "";
    }
 
    if(login.value.length > 0 && login.value.length < 4 )
    {
       document.querySelector(".error").innerHTML = "Не менше 4 сиволов";
    }
    if(password.value == 0)
    {
    //    console.log("нажата");
       document.querySelector(".password1_error").innerHTML = "заполните поля";
       document.querySelector(".repeat_the_password_error").innerHTML ="";
    }
    else
    {
       document.querySelector(".password1_error").innerHTML = "";
    }
   if(password.value.length > 0 && password.value.length < 4 )
   {
       document.querySelector(".password1_error").innerHTML = "Не мение 4 символов";
   }
   if( repeat_password.value.length != password.value.length)
   {
      document.querySelector(".repeat_the_password_error").innerHTML ="Пароли должны совпадать";
   }
  
   else
   {
      document.querySelector(".repeat_the_password_error").innerHTML ="";
   }
   if(login.value.length > 4 && password.value.length > 4 && repeat_password.value.length > 4 ){
       
       document.location.href="/Third_page/index.html";
}

   
    

   
  });