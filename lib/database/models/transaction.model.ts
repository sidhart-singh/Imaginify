import { model, models, Schema } from "mongoose";

const TransactionSchema = new Schema({
  stripeId: { type: String, required: true },
  amount: { type: Number, required: true },
  plan: { type: String },
  credits: { type: Number },
  buyer: { type: Schema.Types.ObjectId, ref: "User" },
  createdAt: { type: Date, default: Date.now },
});

const Transaction = models?.Transaction || model("Transaction");

export default Transaction;
