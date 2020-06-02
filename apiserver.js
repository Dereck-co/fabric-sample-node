var express = require('express');
var bodyParser = require('body-parser');
var app = express();
//app.use(bodyParser.json());
// Setting for Hyperledger Fabric
const { FileSystemWallet, Gateway } = require('fabric-network');
const fs = require('fs');
const path = require('path');
const ccpPath = path.resolve(__dirname, '..', '..', 'basic-network', 'connection.json');
const ccpJSON = fs.readFileSync(ccpPath, 'utf8');
const ccp = JSON.parse(ccpJSON);

//console.log("test");
app.get('/index', async function (req, res) {
        //res.send( res.status(200).json({response: result.toString()}));
    try {
        // Create a new file system based wallet for managing identities.
                const walletPath = path.join(process.cwd(), 'wallet');
                const wallet = new FileSystemWallet(walletPath);
                console.log(`Wallet path: ${walletPath}`);
        // Check to see if we've already enrolled the user.
                const userExists = await wallet.exists('user1');
                if (!userExists) {
                    console.log('An identity for the user "user1" does not exist in the wallet');
                    console.log('Run the registerUser.js application before retrying');
                    return;
                }
        // Create a new gateway for connecting to our peer node.
                const gateway = new Gateway();
                await gateway.connect(ccp, { wallet, identity: 'user1', discovery: { enabled: false } });
        // Get the network (channel) our contract is deployed to.
                const network = await gateway.getNetwork('mychannel');
        // Get the contract from the network.
                const contract = network.getContract('logistics');
        // Evaluate the specified transaction.
                // queryCar transaction - requires 1 argument, ex: ('queryCar', 'CAR4')
                // queryAllCars transaction - requires no arguments, ex: ('queryAllCars')
                const result = await contract.evaluateTransaction('queryAllorderer');
                console.log(`Transaction has been evaluated, result is: ${result.toString()}`);
               // res.status(200).json({response: result.toString()});
               res.send(`<meta http-equiv="pragma" content="no-cache">
               <style>
                 
                 .de{
                        height:100px;
                        width:40%;
                        background-color: lightblue;
                        border:#00f solid 1px;
                        display:inline-block;
                        margin-bottom:5px;
                        //margin:0px;
                        }

                 h3{
                        font-size:30px;
                        height:100px;
                        width:150px;
                        //border:#f00 solid 1px;
                        display:inline-block;
                        margin:0px;
                        margin-right:20px;
                        float:left;
                 }

                 #hide{
                         display:none;
                 }

                 #hideone{
                        display:none;
                 }
         
               </style>
               <div id="login">
               <div>
               <fieldset>
               <legend>Login : </legend>
               <label>ID--------- : </label><input type="text" id="pass" placeholder="input your ID&hearts;" /><br>
               <label>Password : </label><input type="password" id="password" placeholder="input your password&hearts;&hearts;" /><br>
               <button type="button" onclick="Submit()">Submit</button>
               </fieldset>
               </div>
               </div>
               
               <div id="hide">
               <div class="ts" style="background-color:#66ffff;text-align:left;width:1200;height:700px;border:5px solid #ccc;"> 
               <h3>Key : </h3>
               <div id="demo" class="de">
               </div>
               <br/>
               <h3>Record : </h3>
               <div id="demo2" class="de">
               </div>
               <br/>
               <h3>Name : </h3>
               <div id="demo3" class="de">
               </div>
               <br/>
               <h3>Phone : </h3>
               <div id="demo4" class="de">
               </div>
               <br/>
               <h3>Status : </h3>
               <div id="demo5" class="de">
               </div>
               <br/>
               <h3>Price: </h3>
               <div id="demo6" class="de">
               </div>
               </div>
               <button type="button" onclick="Submitone()">新增表單</button>
               </div>

               <div id="hideone">
               <form action="">
               <label >Name:</label><input type="text" required><br><br>
               <label >Phone:</label><input type="tel" id="phone" pattern="[0-9]{9}|[0-9]{10}|[0-9]{2}-[0-9]{7}" required><br><br>
               <label >Address:</label><input type="text" required><br><br>
               <label >StatusOwner:</label><input type="text" value="comuser"  disabled><br><br>
               <label >Tranprice:</label><input type="number" required><br><br>
               <input type="submit" value="Submit">
               </form>
               </div>
               
               <script>
               var form = document.getElementById("hideone");
               var item =[1,2,666];
               var item1 =['123456789','2468','654987'];
               var login = document.getElementById("login");
               var menu = document.getElementById("pass");
               var password = document.getElementById("password");
               var hide = document.getElementById("hide");
               var j = ${result};
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
               </script>`);
        } catch (error) {
                console.error(`Failed to evaluate transaction: ${error}`);
                res.status(500).json({error: error});
                process.exit(1);
            }
            console.dir(req.path)
        });
        
app.get('/api/query/:ord_index', async function (req, res) {
        try {
    // Create a new file system based wallet for managing identities.
            const walletPath = path.join(process.cwd(), 'wallet');
            const wallet = new FileSystemWallet(walletPath);
            console.log(`Wallet path: ${walletPath}`);
    // Check to see if we've already enrolled the user.
            const userExists = await wallet.exists('user1');
            if (!userExists) {
                console.log('An identity for the user "user1" does not exist in the wallet');
                console.log('Run the registerUser.js application before retrying');
                return;
            }
    // Create a new gateway for connecting to our peer node.
            const gateway = new Gateway();
            await gateway.connect(ccp, { wallet, identity: 'user1', discovery: { enabled: false } });
    // Get the network (channel) our contract is deployed to.
            const network = await gateway.getNetwork('mychannel');
    // Get the contract from the network.
            const contract = network.getContract('logistics');
    // Evaluate the specified transaction.
            // queryCar transaction - requires 1 argument, ex: ('queryCar', 'CAR4')
            // queryAllCars transaction - requires no arguments, ex: ('queryAllCars')
            const result = await contract.evaluateTransaction('queryOrderer', req.params.ord_index);
            console.log(`Transaction has been evaluated, result is: ${result.toString()}`);
            res.status(200).json(result.toString());
    } catch (error) {
            console.error(`Failed to evaluate transaction: ${error}`);
            res.status(500).json({error: error});
            process.exit(1);
        }
    });
app.post('/api/addorderer', async function (req, res) {
    try {
        // Create a new file system based wallet for managing identities.
                const walletPath = path.join(process.cwd(), 'wallet');
                const wallet = new FileSystemWallet(walletPath);
                console.log(`Wallet path: ${walletPath}`);
        // Check to see if we've already enrolled the user.
                const userExists = await wallet.exists('user1');
                if (!userExists) {
                    console.log('An identity for the user "user1" does not exist in the wallet');
                    console.log('Run the registerUser.js application before retrying');
                    return;
                }
        // Create a new gateway for connecting to our peer node.
                const gateway = new Gateway();
                await gateway.connect(ccp, { wallet, identity: 'user1', discovery: { enabled: false } });
        // Get the network (channel) our contract is deployed to.
                const network = await gateway.getNetwork('mychannel');
        // Get the contract from the network.
                const contract = network.getContract('logistics');
        // Submit the specified transaction.
                // createCar transaction - requires 5 argument, ex: ('createCar', 'CAR12', 'Honda', 'Accord', 'Black', 'Tom')
                // changeCarOwner transaction - requires 2 args , ex: ('changeCarOwner', 'CAR10', 'Dave')
                await contract.submitTransaction('createOrderer', req.body.ordererid, req.body.Name, req.body.Phone, req.body.GetAddress, req.body.StatusOwner, req.body.transPrice);
                console.log('Transaction has been submitted');
                res.send('Transaction has been submitted');
        // Disconnect from the gateway.
                await gateway.disconnect();
        } catch (error) {
                console.error(`Failed to submit transaction: ${error}`);
                process.exit(1);
            }
});
app.put('/api/changeowner/:ord_index', async function (req, res) {
    try {
        // Create a new file system based wallet for managing identities.
                const walletPath = path.join(process.cwd(), 'wallet');
                const wallet = new FileSystemWallet(walletPath);
                console.log(`Wallet path: ${walletPath}`);
        // Check to see if we've already enrolled the user.
                const userExists = await wallet.exists('user1');
                if (!userExists) {
                    console.log('An identity for the user "user1" does not exist in the wallet');
                    console.log('Run the registerUser.js application before retrying');
                    return;
                }
        // Create a new gateway for connecting to our peer node.
                const gateway = new Gateway();
                await gateway.connect(ccp, { wallet, identity: 'user1', discovery: { enabled: false } });
        // Get the network (channel) our contract is deployed to.
                const network = await gateway.getNetwork('mychannel');
        // Get the contract from the network.
                const contract = network.getContract('logistics');
        // Submit the specified transaction.
                // createCar transaction - requires 5 argument, ex: ('createCar', 'CAR12', 'Honda', 'Accord', 'Black', 'Tom')
                // changeCarOwner transaction - requires 2 args , ex: ('changeCarOwner', 'CAR10', 'Dave')
                await contract.submitTransaction('changeStatusOwner', req.params.ord_index, req.body.StatusOwner);
                console.log('Transaction has been submitted');
                res.send('Transaction has been submitted');
        // Disconnect from the gateway.
                await gateway.disconnect();
        } catch (error) {
                console.error(`Failed to submit transaction: ${error}`);
                process.exit(1);
            } 
});
app.get('/api/courses/:id',(req, res) => {
        let course = courses.find(courses => courses.id === parseInt(req.params.id));
        if (!course) {
          res.status(404).send('The course with the given ID was not found');
        return ;
        }
        res.send(course);
      });
      app.get('/index.html/1', function (req, res) {
        res.send(req.params)
      })
app.listen(8080);