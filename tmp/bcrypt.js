const bcrypt = require('bcrypt');
const salt = 10;
const myPlaintextPassword = '123456789';
const someOtherPlaintextPassword = 'not_bacon';

function test(){
    bcrypt.hash(myPlaintextPassword, salt, function(err, hash) {
        //let hash = hash;
        console.log(hash);
    });
}

test();