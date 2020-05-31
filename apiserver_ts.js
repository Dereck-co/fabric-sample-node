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
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

app.get('/',  async function (req, res) {
  //res.send( res.status(200).json({response: result.toString()}));
  try {
    // Create a new file system based wallet for managing identities.
           //const file =res.sendFile(__dirname+"/"+"node_ts.js");         
           console.log('1');
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
    // Create a new gateway for connecting to our peer node.__
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
            //const result= await contract.submitTransaction('createOrderer', req.body.ordererid, req.body.Name, req.body.Phone, req.body.GetAddress, req.body.StatusOwner, req.body.transPrice);
            console.log(`Transaction has been evaluated, result is: ${result.toString()}`);
           
           res.render('test',
            {
              title: '首頁',
              result: result
              
            },function(err,html){
                //console.log(html);
                res.send(html);
            });
        } catch (error) {
            console.error(`Failed to evaluate transaction: ${error}`);
            res.status(500).json({error: error});
            process.exit(1);
        }
        console.dir(req.path)
    });


    var server = app.listen(3000, function () {
        //console.log(__dirname);
        console.log('Fake API Server Listening on port 3000');
      });   
    //app.listen(8080);