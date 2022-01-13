const { createAlchemyWeb3 } = require("@alch/alchemy-web3");
const {ALCHEMY_WSS} = require('dotenv').config()

// Using WebSockets


const web3 = createAlchemyWeb3(
    ALCHEMY_WSS,
);