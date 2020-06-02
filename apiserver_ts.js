var express = require('express');
var bodyParser = require('body-parser');
var app = express();
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
            console.log(`Transaction has been evaluated, result is: ${result.toString()}`);
           
           res.render('test',
            {
              title: '首頁',
              result: result
              
            });
        } catch (error) {
            console.error(`Failed to evaluate transaction: ${error}`);
            res.status(500).json({error: error});
            process.exit(1);
        }
        console.dir(req.path)
    });


      app.post('/root', async function (req, res) {
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
                    //req.body.ordererid = ORDERER1;
                    console.dir(req.body);
                    const x = await contract.submitTransaction('createOrderer',req.body.orderer ,req.body.name, req.body.phone, req.body.address, req.body.statusowner, req.body.tranprice);
                    console.log('Transaction has been submitted');
                    res.render('action');
            // Disconnect from the gateway.
                    await gateway.disconnect();
            } catch (error) {
                    console.error(`Failed to submit transaction: ${error}`);
                    process.exit(1);
                }
    });

    app.post("/api/query", async function (req, res) {
        try {
                console.log(req.body);
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
            const result = await contract.evaluateTransaction('queryOrderer', req.body.orderer_se);
            console.log(`Transaction has been evaluated, result is: ${result.toString()}`);
            res.render('orderer',
            {
              value: req.body.orderer_se,
              result_1: result.toString()
              
            });
    } catch (error) {
            console.error(`Failed to evaluate transaction: ${error}`);
            res.status(500).json({error: error});
            process.exit(1);
        }
    });

      app.get('/test', function (req, res) {
        res.sendFile(__dirname+"/"+"node_ts.js")
      });

    var server = app.listen(3009, function () {
        console.log('Fake API Server Listening on port 3000');
      });   
