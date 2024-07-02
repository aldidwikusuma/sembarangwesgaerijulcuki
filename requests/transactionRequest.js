import { body } from "express-validator";

export const validateAddTransaction = [
  body("walletId").isString(),
  body("ownerId").isString(),
  body("amount").isNumeric(),
  body("hash").isString(),
  body("transactionType").isString(),
  body("meta").isString(),
  body("createdAt").isNumeric(),
];
