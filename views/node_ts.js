               var form = document.getElementById("hideone");
               var item =[1,2,666];
               var item1 =['123456789','2468','654987'];
               var login = document.getElementById("login");
               var menu = document.getElementById("pass");
               var password = document.getElementById("password");
               var hide = document.getElementById("hide");
               var j = document.getElementById("submit").textContent;
               var y = document.getElementById("demo");
               var y1 = document.getElementById("demo2");
               var y2 = document.getElementById("demo3");
               var y3 = document.getElementById("demo4");
               var y4 = document.getElementById("demo5");
               var y5 = document.getElementById("demo6");

               function Text(){
                for(i = 0;i<j.length;i++){
                  var Key = document.createTextNode(j[i].Key+"["+i+"]"+" - - - ");
                  var Record = document.createTextNode(j[i].Record.GetAddress+"["+i+"]"+" - - - ");
                  var Name = document.createTextNode(j[i].Record.Name+"["+i+"]"+" - - - ");
                  var Phone = document.createTextNode(j[i].Record.Phone+"["+i+"]"+" - - - ");
                  var Status = document.createTextNode(j[i].Record.StatusOwner+"["+i+"]"+" - - - ");
                  var Price = document.createTextNode(j[i].Record.transPrice+"["+i+"]"+" - - - ");
                       
                  y.appendChild(Key);
                  y1.appendChild(Record);
                  y2.appendChild(Name);
                  y3.appendChild(Phone);
                  y4.appendChild(Status);
                  y5.appendChild(Price);
                }
                 }
  
                function filter(x){
                 return x == menu.value;
                }

                function filterx(y){
                  return y != password.value;
                }

                function Submit(){
                    //console.log(item.every(filter));
                    for(var i = 0;i<item.length;i++){
                        if(item[i] == menu.value && password.value == item1[i]){
                                login.style.display = "none";
                                hide.style.display = "block";
                              }
                        }
                        if(item1.every(filterx)){
                                alert("input false");
                         }
                        
                  }
                
                  function Submitone(){
                        hide.style.display = "none";
                        form.style.display = "block";
                  }

               Text();