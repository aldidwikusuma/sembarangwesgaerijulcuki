import dotenv from "dotenv";
dotenv.config();

export const ABI_TRANSACTION = [
	{
		inputs: [
			{
				internalType: "uint256",
				name: "_walletId",
				type: "uint256"
			},
			{
				internalType: "string",
				name: "_ownerId",
				type: "string"
			},
			{
				internalType: "int256",
				name: "_amount",
				type: "int256"
			},
			{
				internalType: "string",
				name: "_hash",
				type: "string"
			},
			{
				internalType: "string",
				name: "_transactionType",
				type: "string"
			},
			{
				internalType: "string",
				name: "_meta",
				type: "string"
			},
			{
				internalType: "uint256",
				name: "_timestamp",
				type: "uint256"
			}
		],
		name: "addTransaction",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "uint256",
				name: "walletId",
				type: "uint256"
			},
			{
				indexed: false,
				internalType: "string",
				name: "ownerId",
				type: "string"
			},
			{
				indexed: false,
				internalType: "int256",
				name: "amount",
				type: "int256"
			},
			{
				indexed: false,
				internalType: "string",
				name: "hash",
				type: "string"
			},
			{
				indexed: false,
				internalType: "string",
				name: "transactionType",
				type: "string"
			},
			{
				indexed: false,
				internalType: "string",
				name: "meta",
				type: "string"
			},
			{
				indexed: false,
				internalType: "uint256",
				name: "timestamp",
				type: "uint256"
			}
		],
		name: "TransactionAdded",
		type: "event"
	},
	{
		inputs: [],
		name: "getAllTransactions",
		outputs: [
			{
				components: [
					{
						internalType: "uint256",
						name: "walletId",
						type: "uint256"
					},
					{
						internalType: "string",
						name: "ownerId",
						type: "string"
					},
					{
						internalType: "int256",
						name: "amount",
						type: "int256"
					},
					{
						internalType: "string",
						name: "hash",
						type: "string"
					},
					{
						internalType: "string",
						name: "transactionType",
						type: "string"
					},
					{
						internalType: "string",
						name: "meta",
						type: "string"
					},
					{
						internalType: "uint256",
						name: "timestamp",
						type: "uint256"
					}
				],
				internalType: "struct WalletTransactionContract.Transaction[]",
				name: "",
				type: "tuple[]"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "_walletId",
				type: "uint256"
			}
		],
		name: "getBalanceByWalletId",
		outputs: [
			{
				internalType: "int256",
				name: "",
				type: "int256"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "string",
				name: "_ownerId",
				type: "string"
			}
		],
		name: "getTransactionsByOwnerId",
		outputs: [
			{
				components: [
					{
						internalType: "uint256",
						name: "walletId",
						type: "uint256"
					},
					{
						internalType: "string",
						name: "ownerId",
						type: "string"
					},
					{
						internalType: "int256",
						name: "amount",
						type: "int256"
					},
					{
						internalType: "string",
						name: "hash",
						type: "string"
					},
					{
						internalType: "string",
						name: "transactionType",
						type: "string"
					},
					{
						internalType: "string",
						name: "meta",
						type: "string"
					},
					{
						internalType: "uint256",
						name: "timestamp",
						type: "uint256"
					}
				],
				internalType: "struct WalletTransactionContract.Transaction[]",
				name: "",
				type: "tuple[]"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "_walletId",
				type: "uint256"
			}
		],
		name: "getTransactionsByWalletId",
		outputs: [
			{
				components: [
					{
						internalType: "uint256",
						name: "walletId",
						type: "uint256"
					},
					{
						internalType: "string",
						name: "ownerId",
						type: "string"
					},
					{
						internalType: "int256",
						name: "amount",
						type: "int256"
					},
					{
						internalType: "string",
						name: "hash",
						type: "string"
					},
					{
						internalType: "string",
						name: "transactionType",
						type: "string"
					},
					{
						internalType: "string",
						name: "meta",
						type: "string"
					},
					{
						internalType: "uint256",
						name: "timestamp",
						type: "uint256"
					}
				],
				internalType: "struct WalletTransactionContract.Transaction[]",
				name: "",
				type: "tuple[]"
			}
		],
		stateMutability: "view",
		type: "function"
	}
]

export const CONTRACT_ADDRESS_TRANSACTION =
  process.env.CONTRACT_ADDRESS_TRANSACTION;

export const PRIVATE_KEY = process.env.MY_WALLET_PRIVATE_KEY;

export const API_URL = process.env.API_URL;

export const WALLET_ADDRESS = process.env.MY_WALLET_ADDRESS;