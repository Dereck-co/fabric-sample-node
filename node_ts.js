               var query = document.getElementById("query");
               var query_1 = document.getElementById("query_1");
               var del = document.getElementById("del");
               var form = document.getElementById("hideone");
               var item =['seller','user','logistic','homedelivery'];
               var item1 =['123456789','2468','654987','20200605'];
               var login = document.getElementById("login");
               var menu = document.getElementById("pass");
               var password = document.getElementById("password");
               var hide = document.getElementById("hide");
               var j = document.getElementById("submit").textContent;
                   j=JSON.parse(j); 
               var y = document.getElementById("demo");
               var y1 = document.getElementById("demo2");
               var y2 = document.getElementById("demo3");
               var y3 = document.getElementById("demo4");
               var y4 = document.getElementById("demo5");
               var y5 = document.getElementById("demo6");
               var se_cus = document.getElementById("se_cus");
               var se_cus1 = document.getElementById("se_cus1");
               var se_cus2 = document.getElementById("se_cus2");
               var se_cus3 = document.getElementById("se_cus3");
               var se_cus_hi = document.getElementById("se_cus_hi");
               var se_cus_hi1 = document.getElementById("se_cus_hi1");
               var se_cus_hi2 = document.getElementById("se_cus_hi2");
               var se_cus_hi3 = document.getElementById("se_cus_hi3");
               var cha = document.getElementById("cha");
              
               
               
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

                function filter_n(n){
                  return n != menu.value;
                 }

                function filterx(y){
                  return y != password.value;
                }

                function filterz(z){
                  return z == password.value;
                }

                function Submit(){
                    
                    for(var i = 0;i<item.length;i++){
                        if(item[i] == menu.value && password.value == item1[i]){
                                login.style.display = "none";
                                hide.style.display = "block";

                                if((menu.value==='user'&&password.value==='2468')){
                                  se_cus.style.display = " block";
                                  se_cus_hi.disabled = false;
                                  
                                }

                                if((menu.value==='homedelivery'&&password.value==='20200605')){
                                  se_cus2.style.display = " block";
                                  se_cus_hi2.disabled = false;
                                  del.style.display = " inline";
                                  cha.style.display = " inline";
                                }
                                if((menu.value==='seller'&&password.value==='123456789')){
                                  se_cus1.style.display = " block";
                                  se_cus_hi1.disabled = false;
                                  del.style.display = " inline";
                                  cha.style.display = " inline";
                                }
                                
                                if((menu.value==='logistic'&&password.value==='654987')){
                                  se_cus3.style.display = " block";
                                  se_cus_hi3.disabled = false;
                                  del.style.display = " inline";
                                  cha.style.display = " inline";
                                }

                              }
                        }

                        if(item1.every(filterx)||(item1.some(filterz)&&item.every(filter_n))){
                                alert("input false");
                         }

                         if(menu.value === "seller"&&(password.value ==="2468"||password.value === "654987"||password.value=="20200605")){
                           alert("input false");
                         }

                         if(menu.value === "user" && (password.value ==="123456789"||password.value === "654987"||password.value=="20200605") ){
                          alert("input false");
                         }

                         if(menu.value === "logistic" && (password.value ==="123456789"||password.value === "2468"||password.value=="20200605" )){
                          alert("input false");
                         }
                        
                         if(menu.value === "homedelivery" && (password.value ==="123456789"||password.value === "2468"||password.value=="654987" )){
                          alert("input false");
                         }
                  }
                
                  function Submitone(){
                        hide.style.display = "none";
                        form.style.display = "block";
                  }

                  function Submittwo(){
                    hide.style.display = "none";
                    query.style.display = "block";
              }

              function Submittree(){
                hide.style.display = "none";
                query_1.style.display = "block";
             }

             function Submitfour(){
              hide.style.display = "none";
              query_2.style.display = "block";
           }

                  function send(){
                    var ord = document.getElementById("ord");
                    var ord_1 = document.getElementById("ord_1");
                    var orderor = document.getElementById("order_s");
                    orderor.value = ord.value + ord_1.value.toString() ;
                    console.log(typeof orderor.value);
                  }


                  function send_1(){
                    var que_1 = document.getElementById("que_1");
                    var que_2 = document.getElementById("que_2");
                    var query = document.getElementById("order_send");
                   query.value = que_1.value + que_2.value.toString() ;
                    console.log(typeof orderor.value);
                  }

                  function send_2(){
                    var del_1 = document.getElementById("del_1");
                    var del_2 = document.getElementById("del_2");
                    var delet = document.getElementById("order_send1");
                    delet.value = del_1.value + del_2.value.toString() ;
                  }

                  function send_3(){
                    var del_3 = document.getElementById("del_3");
                    var del_4 = document.getElementById("del_4");
                    var delet_1 = document.getElementById("order_send2");
                    delet_1.value = del_3.value + del_4.value.toString() ;
                  }

                  function re(){
                    window.location.replace("/");
                  }
               Text();