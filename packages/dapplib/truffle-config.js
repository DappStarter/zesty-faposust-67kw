require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'kidney clog tackle venture stool cost script unveil install option army gather'; 
let testAccounts = [
"0x91e4728acd5eb671d422f45907b38cfe834f815fe3bd20c2089f572ba4d24f22",
"0xe20b91a97582f807d5a0a0191c64f0dedc3c4ae5bed7bb894a7769ad522b2d30",
"0xcd7e8dacb31e4525bfb0478081216177b28cb7847d2c3f84ddd61db7a8a779b0",
"0x567306b767fa2dbd2aa0416cdd221384b3086cb64fccaa1dd61b163c59fdfb7b",
"0x5301f2a0511d8d97765e37a6a299640ce8ea35fbed34327b0ebd05ed1f8667ea",
"0x6104d073d4ede18ffbbfba1c2b75c61f1dbcd2dbde96f755abce5e7be266ea96",
"0x6bd70132526ca788544cc1aa8415c1fe8a16bb094da179215f009d8bd74b6597",
"0x029735d211be9138938372197f9b3d3bd0ee480cc589138068de29e9b9b65286",
"0x411577ae025cea6fa0d3eb2b1afb43af9c1619ee94f0e15b2e5b3c7e06df1dee",
"0xd1018342aacfd564943b0513933118f46ee8e5fe6c0f7d530411b2ead2a88e3e"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

