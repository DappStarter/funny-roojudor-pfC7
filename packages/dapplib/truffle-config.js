require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid problem oppose venture strong dash sad exchange good knee metal gauge'; 
let testAccounts = [
"0x3c94d4c5a17a32f636ecd633cec3b1e439bb81fb19ae8987088cccbdfb84da09",
"0xbb8fb3b77e2a9b48c74a4f233125c3b4250c0f9ebe7c237c0354cc6206a64140",
"0x31faaa82b95421dd7297c61a6d0db031c3892b1c44580b18ee5dd4249aad4691",
"0x73f46129dfd4111f6b19b6917ad8b78404603118ae90dd5e850dfcb3816535b5",
"0xfe86307279afaa0f313b6c87d8a591e7db21d46dea0d7eaf0ead1402015883d2",
"0x357867014d5a03e3246c904af14e82a2c06073f61fe5e750f51d3f53e412bfe7",
"0x6f3a9aec6503ec98b960e6ab34a0f0b1a4fa4e0e38c8ba843d20295363c4d4c5",
"0x3f269faa4fd745ccb6dc18cf7403befb170d3f3bb79bd048165702d91fd079df",
"0xad8d34bb49021c4aea973909ebe04afd6fd135f72928f708d76dd4ae8c2c280d",
"0x17e874b48665dfe4c86820ec80af405068b27a948904d8b1b8b2c766a03b62a3"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

