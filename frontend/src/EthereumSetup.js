/**
 * @author Pruthvi Kumar
 * @email pruthvikumar.123@gmail.com
 * @create date 2018-09-20 17:43:13
 * @modify date 2018-09-20 17:43:13
 * @desc Web3 setup to bridge ethereum backend to react frontend!
 */

import Web3 from 'web3';

const web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8484"));

let supplierAddress = '0xb7fec3c4c0777a9ffbd997cc53c921383c83d29e';
let customerAddress = '0x0286b46be0ee227119d9f82179b7f3629c195489';

let supplierABI = [{
    "anonymous": false,
    "inputs": [{
        "indexed": false,
        "name": "idItem",
        "type": "uint256"
    }],
    "name": "ItemAdded",
    "type": "event"
}, {
    "anonymous": false,
    "inputs": [{
        "indexed": false,
        "name": "idOfCustomer",
        "type": "uint256"
    }, {
        "indexed": false,
        "name": "idOrder",
        "type": "uint256"
    }, {
        "indexed": false,
        "name": "status",
        "type": "bool"
    }],
    "name": "ProcessAnOrder",
    "type": "event"
}, {
    "constant": false,
    "inputs": [{
        "name": "itemName",
        "type": "bytes32"
    }, {
        "name": "price",
        "type": "uint256"
    }],
    "name": "addItem",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "constant": false,
    "inputs": [{
        "name": "idOrder",
        "type": "uint256"
    }, {
        "name": "idCustomer",
        "type": "uint256"
    }],
    "name": "processOrder",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "constant": true,
    "inputs": [{
        "name": "idItem",
        "type": "uint256"
    }],
    "name": "getItem",
    "outputs": [{
        "name": "",
        "type": "bytes32"
    }, {
        "name": "",
        "type": "uint256"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": true,
    "inputs": [{
        "name": "idOrder",
        "type": "uint256"
    }],
    "name": "getStatus",
    "outputs": [{
        "name": "",
        "type": "bool"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": true,
    "inputs": [],
    "name": "getTotalNumberOfAvailableItems",
    "outputs": [{
        "name": "",
        "type": "uint256"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": true,
    "inputs": [],
    "name": "getTotalNumberOfOrdersProcessed",
    "outputs": [{
        "name": "",
        "type": "uint256"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}];
let customerABI = [{
    "inputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "constructor"
}, {
    "anonymous": false,
    "inputs": [{
        "indexed": false,
        "name": "idOrder",
        "type": "uint256"
    }],
    "name": "OrderRaised",
    "type": "event"
}, {
    "constant": false,
    "inputs": [{
        "name": "itemName",
        "type": "bytes32"
    }, {
        "name": "quantity",
        "type": "uint256"
    }],
    "name": "purchaseItem",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "constant": false,
    "inputs": [{
        "name": "idOrder",
        "type": "uint256"
    }],
    "name": "recieveItem",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "constant": true,
    "inputs": [{
        "name": "idOrder",
        "type": "uint256"
    }],
    "name": "getOrderDetails",
    "outputs": [{
        "name": "",
        "type": "bytes32"
    }, {
        "name": "",
        "type": "uint256"
    }, {
        "name": "",
        "type": "bool"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": true,
    "inputs": [],
    "name": "getNumberOfItemsPurchased",
    "outputs": [{
        "name": "",
        "type": "uint256"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": true,
    "inputs": [],
    "name": "getNumberOfItemsReceived",
    "outputs": [{
        "name": "",
        "type": "uint256"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}];

web3.eth.defaultAccount = web3.eth.accounts[0];

const supplierContract = web3.eth.contract(supplierABI).at(supplierAddress);
const customerContract = web3.eth.contract(customerABI).at(customerAddress);

export {
    supplierContract,
    customerContract,
    web3
};