// SPDX-License-Identifier: MIT
pragma solidity 0.8.16;

contract WalletTransactionContract {
    struct Transaction {
        uint256 walletId;
        string ownerId;
        int256 amount;  // Changed to int256 to handle both deposits and withdrawals
        string hash;
        string transactionType;
        string meta;
        uint256 createdAt; // Changed from timestamp to createdAt
    }

    mapping(uint256 => Transaction[]) private walletTransactions;
    mapping(string => Transaction[]) private ownerTransactions;
    Transaction[] private allTransactions;

    event TransactionAdded(
        uint256 indexed walletId,
        string ownerId,
        int256 amount,
        string hash,
        string transactionType,
        string meta,
        uint256 createdAt // Changed from timestamp to createdAt
    );

    function addTransaction(
        uint256 _walletId,
        string memory _ownerId,
        int256 _amount,
        string memory _hash,
        string memory _transactionType,
        string memory _meta,
        uint256 _createdAt // Changed from timestamp to createdAt
    ) public {
        Transaction memory newTransaction = Transaction({
            walletId: _walletId,
            ownerId: _ownerId,
            amount: _amount,
            hash: _hash,
            transactionType: _transactionType,
            meta: _meta,
            createdAt: _createdAt // Changed from timestamp to createdAt
        });

        walletTransactions[_walletId].push(newTransaction);
        ownerTransactions[_ownerId].push(newTransaction);
        allTransactions.push(newTransaction);

        emit TransactionAdded(
            _walletId,
            _ownerId,
            _amount,
            _hash,
            _transactionType,
            _meta,
            _createdAt // Changed from timestamp to createdAt
        );
    }

    function getTransactionsByWalletId(uint256 _walletId) public view returns (Transaction[] memory) {
        return walletTransactions[_walletId];
    }

    function getTransactionsByOwnerId(string memory _ownerId) public view returns (Transaction[] memory) {
        return ownerTransactions[_ownerId];
    }

    function getAllTransactions() public view returns (Transaction[] memory) {
        return allTransactions;
    }

    function getBalanceByWalletId(uint256 _walletId) public view returns (int256) {
        int256 balance = 0;
        Transaction[] memory transactions = walletTransactions[_walletId];
        for (uint256 i = 0; i < transactions.length; i++) {
            balance += transactions[i].amount;
        }
        return balance;
    }
}
