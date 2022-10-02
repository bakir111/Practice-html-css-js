
  function f1(a)
  {
    if(a.length < 4)
        return "не мение 4 символа";
     else
        return "";
 }
  function f2(b, v)
  {
    if(b.length != v.length)
        return  "пароли должны совпадать";
     else
         return "";
  }
 let exlog,
       rep,
       psw;
 
document.querySelector(".btn_fields").addEventListener("click", function()
   {
     let logg = document.querySelector("#login");
     document.querySelector(".error").innerHTML = f1(logg.value);
     exlog = logg;
   });

document.querySelector(".btn_fields").addEventListener("click", function()
   {
     psw = document.querySelector("#password1");
     document.querySelector(".password1_error").innerHTML = f1(psw.value);
   });

document.querySelector(".btn_fields").addEventListener("click", function()
   {
     rep = document.querySelector("#repeat_the_password");
     document.querySelector(".repeat_the_password_error").innerHTML = f1(rep.value);
   });

document.querySelector(".btn_fields").addEventListener("click", function()
  { 
    document.querySelector(".repeat_the_password_error").innerHTML = f2(rep.value, psw.value);
  });
export default exlog;
 

