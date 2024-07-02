import { createContractInstance, sendRawTx } from "./web3Service.js";
import { consoleForDevelop } from "../config/app.js";

export const getAllTransaction = async () => {
  consoleForDevelop("Get Transactions Process [Service]");
  const contract = await createContractInstance("transaction");
  const transactions = await contract.methods.getAllTransactions().call();
  const mappedTransactions = transactions.map((transaction) => {
    return {
      walletId: transaction.walletId.toString(),
      ownerId: transaction.ownerId,
      amount: transaction.amount.toString(),
      hash: transaction.hash,
      transactionType: transaction.transactionType,
      meta: transaction.meta,
      createdAt: transaction.createdAt,
    };
  });
  consoleForDevelop("Transactions fetched successfully", "footer");
  return mappedTransactions;
};

export const addTransaction = async (req) => {
  consoleForDevelop("Add Transaction Process [Service]");
  const {
    walletId,
    ownerId,
    amount,
    hash,
    transactionType,
    meta,
    createdAt,
  } = req;
  let arrayParams = [
    walletId,
    ownerId,
    amount,
    hash,
    transactionType,
    meta,
    createdAt,
  ];
  var response = await sendRawTx(arrayParams, "addTransaction", "transaction");
  if (response.transactionHash) {
    consoleForDevelop(
      [
        "Transaction added successfully",
        "Transaction Hash: " + response.transactionHash,
      ],
      "footer"
    );
    return response.transactionHash;
  }
};
