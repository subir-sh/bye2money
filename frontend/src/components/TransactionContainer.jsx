import TransactionSummaryBar from "./TransactionSummaryBar";
import TransactionList from "./TransactionList";

export default function TransactionContainer() {
  return (
    <section className="space-y-6">
      <TransactionSummaryBar income={123456} expense={31214} />
      <TransactionList />
    </section>
  );
}